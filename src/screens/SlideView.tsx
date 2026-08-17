import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CourseSidebar from '../components/CourseSidebar';
import { ChevronLeft, ChevronRight, Lightbulb, CheckSquare } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { SLIDES } from '../data/courseContent';
import { useProgress, markSlideRead } from '../lib/progress';
import { isSlideUnlocked, firstIncompleteRoute, nextRouteAfterSlide } from '../lib/courseFlow';

export default function SlideView() {
  const navigate = useNavigate();
  const { slideId } = useParams();
  const sId = parseInt(slideId || '1');
  const slide = SLIDES[sId];
  const progress = useProgress();
  const { isSlideRead } = progress;

  const nextRoute = nextRouteAfterSlide(sId);
  const nextIsQuiz = nextRoute?.startsWith('/quiz/');
  const nextIsFinalExam = nextRoute === '/final-exam';

  // React Router reuses this component across "/slide/:slideId" navigations
  // (no remount), so `read` can't be plain per-slide state — it would carry
  // over the previous lámina's value for a render before any effect could
  // correct it. Track only "did I just confirm THIS slide" and derive the
  // rest straight from the progress store, which is always in sync with sId.
  const [locallyConfirmedSlideId, setLocallyConfirmedSlideId] = useState<number | null>(null);
  const read = isSlideRead(sId) || locallyConfirmedSlideId === sId;

  // No se pueden saltar los quiz: si esta lámina todavía no está desbloqueada
  // (falta contenido o un quiz anterior por aprobar), manda al punto real de avance.
  useEffect(() => {
    if (slide && !isSlideUnlocked(sId, progress)) {
      navigate(firstIncompleteRoute(progress), { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sId]);

  if (!slide) {
    return (
      <Layout breadcrumb="Error">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Lámina no encontrada</h2>
          <button onClick={() => navigate('/course')} className="mt-4 text-brand-primary font-bold underline">Volver al curso</button>
        </div>
      </Layout>
    );
  }

  const handleNext = () => {
    if (!read) return;
    navigate(nextRoute ?? '/course');
  };

  const handlePrev = () => {
    const prevId = sId - 1;
    if (SLIDES[prevId]) {
      navigate(`/slide/${prevId}`);
    } else {
      navigate('/course');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Layout breadcrumb={`Soldadura Fuerte > ${slide.sectionTitle} > Lámina ${sId}`}>
        <div className="flex gap-8 relative">
          {/* Sidebar Desktop */}
          <div className="lg:w-80 flex-shrink-0 hidden lg:block border rounded-xl overflow-hidden h-fit bg-white self-start sticky top-24">
            <CourseSidebar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl mx-auto">
            <motion.div 
              key={sId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[600px] flex flex-col"
            >
              {/* Slide Header */}
              <div className="px-8 py-8 border-b border-gray-100 flex justify-between items-center bg-white">
                 <div className="border-l-4 border-brand-primary pl-4">
                    <p className="text-[11px] font-bold text-brand-primary uppercase tracking-widest leading-none mb-2">{slide.sectionTitle}</p>
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight">{slide.title}</h2>
                 </div>
                 <div className="text-right hidden sm:block">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Lámina {sId} de 42</p>
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                       <div className="h-full bg-brand-progress" style={{ width: `${(sId / 42) * 100}%` }}></div>
                    </div>
                 </div>
              </div>

              {/* Slide Content */}
              <div className="flex-1 p-8 lg:p-12 overflow-y-auto prose prose-slate max-w-none">
                 {slide.imageSeed && (
                   <div className="bg-slate-100 w-full aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 mb-8 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/${slide.imageSeed}/1280/720`} 
                        alt={slide.title} 
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                 )}

                 <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                    {slide.content.map((p, i) => (
                      <p key={i} className={p.startsWith('•') ? 'ml-4 font-medium' : 'font-medium'}>
                        {p}
                      </p>
                    ))}
                 </div>

                 {slide.ideaClave && (
                   <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r shadow-sm">
                      <div className="flex items-center mb-1">
                         <span className="text-amber-600 mr-2 font-bold flex items-center gap-2 uppercase tracking-widest text-sm">
                            <Lightbulb className="w-4 h-4" /> Idea clave:
                         </span>
                      </div>
                      <p className="text-sm text-amber-800 leading-snug font-medium m-0">
                         {slide.ideaClave}
                      </p>
                   </div>
                 )}
              </div>

              {/* Slide Navigation Footer */}
              <div className="px-8 py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/50">
                 <button 
                  onClick={handlePrev}
                  className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-primary transition-colors order-2 md:order-1"
                 >
                    <ChevronLeft className="w-5 h-5" /> Anterior
                 </button>

                 <div className="flex items-center gap-4 order-1 md:order-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${read ? 'bg-brand-success border-brand-success' : 'border-gray-300 group-hover:border-brand-primary'}`}>
                          {read && <CheckSquare className="w-4 h-4 text-white" />}
                       </div>
                       <input
                         type="checkbox"
                         className="hidden"
                         checked={read}
                         onChange={() => {
                           // Es una declaración ("ya leí esto"), no un interruptor:
                           // una vez marcada, no tiene sentido "desmarcarla" con otro clic.
                           if (read) return;
                           setLocallyConfirmedSlideId(sId);
                           markSlideRead(sId);
                         }}
                       />
                       <span className={`text-sm font-bold ${read ? 'text-brand-success' : 'text-gray-500'}`}>He leído y comprendido esta lámina</span>
                    </label>
                 </div>

                 <button
                   onClick={handleNext}
                   disabled={!read}
                   className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all order-3 ${
                     read
                      ? 'bg-brand-primary text-white hover:bg-[#152e4a] shadow-lg shadow-brand-primary/10'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                   }`}
                 >
                    {nextIsQuiz ? 'Ir al Quiz' : nextIsFinalExam ? 'Ir a la Evaluación Final' : 'Siguiente'} <ChevronRight className="w-5 h-5" />
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
