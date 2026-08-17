import {
  CheckCircle2,
  Circle,
  Lock,
  ChevronDown,
  Play,
  FileText,
  HelpCircle
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { COURSE_SECTIONS, SLIDES } from '../data/courseContent';
import { MODULE_QUIZZES } from '../data/quizData';
import { useProgress } from '../lib/progress';
import { isSlideUnlocked, isQuizUnlocked, isFinalExamUnlocked } from '../lib/courseFlow';

// Progreso de ejemplo de la demo (35%): sin una lámina o quiz específico en la URL
// (p. ej. en la vista general del curso), se muestra este punto como "actual".
const DEFAULT_CURRENT_SLIDE_ID = 13;

export default function CourseSidebar() {
  const navigate = useNavigate();
  const { slideId, quizId } = useParams();
  const currentSlideId = slideId ? parseInt(slideId) : quizId ? 0 : DEFAULT_CURRENT_SLIDE_ID;
  const progress = useProgress();
  const { isSlideRead, isQuizPassed } = progress;

  const currentSection = COURSE_SECTIONS.find(
    (s) => s.slides.includes(currentSlideId) || (!!quizId && s.quizId === quizId)
  );

  const [openSections, setOpenSections] = useState<Set<number>>(
    () => new Set(currentSection ? [currentSection.id] : [])
  );

  // Keep the section you're actually reading expanded, without collapsing sections you opened manually.
  useEffect(() => {
    if (!currentSection) return;
    setOpenSections((prev) => (prev.has(currentSection.id) ? prev : new Set(prev).add(currentSection.id)));
  }, [currentSection?.id]);

  const toggleSection = (id: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
          const isCurrentSection = section.slides.includes(currentSlideId) || (!!quizId && quizId === section.quizId);
          const isOpen = openSections.has(section.id);
          const isCompleted =
            section.slides.every((sId) => isSlideRead(sId)) &&
            (!section.quizId || isQuizPassed(section.quizId));

          return (
            <div key={section.id} className="mb-0">
              <button
                onClick={() => toggleSection(section.id)}
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
                   <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {isOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden bg-white"
                >
                  {section.slides.map((sId) => {
                    const slide = SLIDES[sId];
                    const isRead = isSlideRead(sId);
                    const isCurrent = sId === currentSlideId;
                    const unlocked = isRead || isCurrent || isSlideUnlocked(sId, progress);

                    return (
                      <button
                        key={sId}
                        onClick={() => unlocked && navigate(`/slide/${sId}`)}
                        disabled={!unlocked}
                        title={unlocked ? undefined : 'Completa el contenido y los quiz anteriores para desbloquear esta lámina'}
                        className={`w-full flex items-center gap-3 px-6 py-3 border-b border-slate-100 transition-all text-left ${
                          isCurrent ? 'bg-blue-50/30' : unlocked ? 'hover:bg-slate-50' : 'cursor-not-allowed'
                        } ${!isRead && !isCurrent ? 'opacity-60 grayscale' : ''}`}
                      >
                        <div className="flex-shrink-0">
                          {isRead ? <span className="text-xs">✅</span> :
                           isCurrent ? <span className="text-xs">▶️</span> :
                           <span className="text-xs">🔒</span>}
                        </div>
                        <span className={`text-[12px] font-medium leading-snug flex-1 ${
                          isCurrent ? 'text-brand-primary font-bold' : isRead ? 'text-green-600' : 'text-slate-500'
                        }`}>
                          Lámina {sId}. {slide.title}
                        </span>
                      </button>
                    );
                  })}
                  {section.quizId && (() => {
                    const passed = isQuizPassed(section.quizId);
                    const unlocked = passed || quizId === section.quizId || isQuizUnlocked(section.quizId, progress);
                    return (
                      <button
                        onClick={() => unlocked && navigate(`/quiz/${section.quizId}`)}
                        disabled={!unlocked}
                        title={unlocked ? undefined : 'Termina todas las láminas de esta sección para desbloquear el quiz'}
                        className={`w-full flex items-center gap-3 px-6 py-3 border-b border-slate-100 transition-all text-left ${
                          unlocked ? 'hover:bg-slate-50' : 'cursor-not-allowed opacity-60 grayscale'
                        } ${quizId === section.quizId ? 'bg-blue-50/30' : ''}`}
                      >
                        <div className="flex-shrink-0">
                           {passed ? <span className="text-xs">✅</span> :
                            quizId === section.quizId ? <span className="text-xs">▶️</span> :
                            <span className="text-xs">🔒</span>}
                        </div>
                        <span className={`text-[12px] font-bold italic leading-snug flex-1 ${
                          quizId === section.quizId ? 'text-brand-primary' : passed ? 'text-green-600' : 'text-slate-500'
                        }`}>
                          {MODULE_QUIZZES[section.quizId].title.split(' — ')[0]}
                        </span>
                        <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                    );
                  })()}
                </motion.div>
              )}
            </div>
          );
        })}

        {(() => {
          const unlocked = isFinalExamUnlocked(progress);
          return (
            <button
              onClick={() => unlocked && navigate('/final-exam')}
              disabled={!unlocked}
              title={unlocked ? undefined : 'Aprueba los 4 quiz de módulo para desbloquear la evaluación final'}
              className={`w-full px-4 py-3 bg-slate-50 flex items-center justify-between border-b border-slate-200 text-left ${
                unlocked ? 'hover:bg-slate-100' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <span className="text-[11px] font-bold text-slate-500 uppercase">Evaluación Final</span>
              <span className="text-xs">{unlocked ? '▶️' : '🔒'}</span>
            </button>
          );
        })()}
      </nav>
    </aside>
  );
}
