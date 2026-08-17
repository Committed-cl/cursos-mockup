import Layout from '../components/Layout';
import CourseSidebar from '../components/CourseSidebar';
import { PlayCircle, Clock, BookOpen, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../lib/progress';
import { firstIncompleteRoute, courseProgressPercent } from '../lib/courseFlow';

export default function CourseView() {
  const navigate = useNavigate();
  const progress = useProgress();
  const continueRoute = firstIncompleteRoute(progress);
  const courseFinished = continueRoute === '/certificates';
  const progressPercent = courseProgressPercent(progress);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Layout breadcrumb="Procedimiento de Soldadura Fuerte de Tuberías de Cobre">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0 hidden lg:block border rounded-xl overflow-hidden h-fit bg-white">
            <CourseSidebar />
          </div>

          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="aspect-video bg-gray-900 relative">
                 <img
                   src={`${import.meta.env.BASE_URL}images/laminas/course-cover.jpg`}
                   alt="Portada del curso"
                   className="w-full h-full object-cover opacity-60"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => navigate('/slide/1')}
                      className="group relative"
                    >
                       <div className="absolute inset-0 bg-brand-primary rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
                       <PlayCircle className="w-20 h-20 text-white relative group-hover:scale-110 transition-transform cursor-pointer" />
                    </button>
                 </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-brand-progress text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-100">
                    PRC-MG-026 v.4
                  </span>
                  <span className="px-3 py-1 bg-orange-50 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full border border-orange-100">
                    Certificación Obligatoria
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-brand-primary mb-4 leading-tight">
                  Procedimiento de Soldadura Fuerte de Tuberías de Cobre
                </h1>
                
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  Capacitación integral en los criterios operativos, de seguridad, calidad y control documental necesarios para ejecutar trabajos de soldadura fuerte conforme al procedimiento corporativo PRC-MG-026.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-100 my-8">
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> Duración
                      </p>
                      <p className="font-bold text-brand-primary">4 Horas</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                        <BookOpen className="w-3 h-3" /> Contenido
                      </p>
                      <p className="font-bold text-brand-primary">42 Láminas</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                        <FileText className="w-3 h-3" /> Evaluación
                      </p>
                      <p className="font-bold text-brand-primary">4 Quizzes</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Award className="w-3 h-3" /> Certificación
                      </p>
                      <p className="font-bold text-brand-primary">Final PDF</p>
                   </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex-1 w-full">
                      <div className="flex justify-between items-end mb-2">
                         <span className="text-sm font-bold text-brand-primary">Tu avance actual</span>
                         <span className="text-lg font-bold text-brand-progress">{progressPercent}%</span>
                      </div>
                      <div className="h-3 w-full bg-white rounded-full border border-gray-200 overflow-hidden">
                        <div className="h-full bg-brand-progress shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" style={{ width: `${progressPercent}%` }}></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Última actividad: Hoy, 10:45 AM</p>
                   </div>
                   <button
                     onClick={() => navigate(continueRoute)}
                     className="w-full md:w-auto bg-brand-primary hover:bg-[#152e4a] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-3"
                   >
                     {courseFinished ? 'Ver mi Certificado' : 'Continuar donde lo dejé'} <PlayCircle className="w-5 h-5" />
                   </button>
                </div>

                <div className="prose prose-sm prose-slate">
                  <h3 className="font-bold text-brand-primary">Al finalizar el curso vas a poder:</h3>
                  <ul>
                    <li>Reconocer cuándo aplica este procedimiento y cuándo no.</li>
                    <li>Cumplir las condiciones de seguridad antes, durante y después del trabajo.</li>
                    <li>Revisar y seleccionar correctamente equipos, materiales e insumos.</li>
                    <li>Ejecutar la unión de forma ordenada y técnicamente correcta.</li>
                    <li>Distinguir a simple vista una unión bien hecha de una defectuosa.</li>
                    <li>Usar los checklists diario y mensual como herramienta real de control.</li>
                    <li>Saber cuándo se exige calificación del soldador y qué registros hay que guardar.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

function Award({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
