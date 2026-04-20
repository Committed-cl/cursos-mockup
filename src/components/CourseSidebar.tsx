import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  ChevronDown, 
  Play, 
  FileText, 
  HelpCircle 
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { COURSE_SECTIONS, SLIDES } from '../data/courseContent';

export default function CourseSidebar() {
  const navigate = useNavigate();
  const { slideId, quizId } = useParams();
  const currentSlideId = parseInt(slideId || '0');

  return (
    <aside className="w-full lg:w-80 bg-white border-r border-slate-200 sidebar-gradient flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-slate-200 bg-slate-50/50">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">Progreso General</span>
          <span className="text-xs font-bold text-brand-progress">35%</span>
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div className="bg-brand-progress h-full w-[35%] transition-all duration-1000"></div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto custom-scrollbar pt-2">
        {COURSE_SECTIONS.map((section) => {
          const isCurrentSection = section.slides.includes(currentSlideId) || quizId === section.quizId;
          const isCompleted = section.id < 5 && !isCurrentSection; 

          return (
            <div key={section.id} className="mb-0">
              <button 
                className={`w-full flex items-center justify-between px-4 py-3 bg-slate-100/50 hover:bg-slate-100 transition-colors text-left border-b border-slate-200 ${isCurrentSection ? 'bg-slate-100' : ''}`}
              >
                <div className="flex-1 pr-2">
                  <p className={`text-[11px] font-bold leading-tight ${isCompleted ? 'text-brand-success' : 'text-slate-600'}`}>
                    {section.title.toUpperCase()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                   {isCompleted ? (
                     <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold uppercase">Completado</span>
                   ) : isCurrentSection ? (
                     <span className="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold uppercase">En Progreso</span>
                   ) : null}
                   <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isCurrentSection ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {isCurrentSection && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden bg-white"
                >
                  {section.slides.map((sId) => {
                    const slide = SLIDES[sId];
                    const status = sId < currentSlideId ? 'completed' : sId === currentSlideId ? 'current' : 'locked';
                    
                    return (
                      <button 
                        key={sId}
                        onClick={() => navigate(`/slide/${sId}`)}
                        className={`w-full flex items-center gap-3 px-6 py-3 border-b border-slate-100 transition-all text-left ${
                          sId === currentSlideId ? 'bg-blue-50/30' : 'hover:bg-slate-50'
                        } ${status === 'locked' && sId > 13 ? 'opacity-60 grayscale' : ''}`}
                      >
                        <div className="flex-shrink-0">
                          {sId < currentSlideId || (sId < 13) ? <span className="text-xs">✅</span> : 
                           sId === currentSlideId ? <span className="text-xs">▶️</span> : 
                           <span className="text-xs">🔒</span>}
                        </div>
                        <span className={`text-[12px] font-medium leading-snug flex-1 ${
                          sId === currentSlideId ? 'text-brand-primary font-bold' : 'text-slate-500'
                        } ${(sId < currentSlideId || (sId < 13)) ? 'text-green-600' : ''}`}>
                          Lámina {sId}. {slide.title}
                        </span>
                      </button>
                    );
                  })}
                  {section.quizId && (
                    <button 
                      onClick={() => navigate(`/quiz/${section.quizId}`)}
                      className={`w-full flex items-center gap-3 px-6 py-3 border-b border-slate-100 transition-all text-left hover:bg-slate-50 ${quizId === section.quizId ? 'bg-blue-50/30' : ''}`}
                    >
                      <div className="flex-shrink-0">
                         {quizId === section.quizId ? <span className="text-xs">▶️</span> : <span className="text-xs">🔒</span>}
                      </div>
                      <span className={`text-[12px] font-bold italic leading-snug flex-1 ${quizId === section.quizId ? 'text-brand-primary' : 'text-slate-500'}`}>
                        Quiz: {section.title.split('. ')[1]}
                      </span>
                      <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
        
        <div className="px-4 py-3 bg-slate-50 flex items-center justify-between border-b border-slate-200 opacity-50">
          <span className="text-[11px] font-bold text-slate-500 uppercase font-bold">Evaluación Final</span>
          <span className="text-xs">🔒</span>
        </div>
      </nav>
    </aside>
  );
}
