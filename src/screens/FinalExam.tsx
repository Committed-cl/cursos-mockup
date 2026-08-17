import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Award, AlertCircle, PlayCircle, ArrowRight, Clock, ShieldCheck, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FINAL_EXAM_QUESTIONS, FINAL_EXAM_PASS_COUNT } from '../data/quizData';
import { useProgress, markFinalExamPassed } from '../lib/progress';
import { isFinalExamUnlocked, firstIncompleteRoute } from '../lib/courseFlow';

export default function FinalExam() {
  const navigate = useNavigate();
  const progress = useProgress();
  const [view, setView] = useState<'intro' | 'exam' | 'result'>('intro');
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = FINAL_EXAM_QUESTIONS;
  const currentQuestion = questions[qIndex];
  const selectedOptionId = answers[currentQuestion.id] ?? null;

  const score = questions.reduce((acc, q) => {
    const correctOption = q.options.find((o) => o.isCorrect);
    return acc + (answers[q.id] === correctOption?.id ? 1 : 0);
  }, 0);
  const passed = score >= FINAL_EXAM_PASS_COUNT;

  // No se pueden saltar los quiz: sin los 4 módulos aprobados, no hay evaluación final.
  useEffect(() => {
    if (!isFinalExamUnlocked(progress)) {
      navigate(firstIncompleteRoute(progress), { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Layout breadcrumb="Soldadura Fuerte > Evaluación Final">
        <div className="max-w-4xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {view === 'intro' ? (
              <motion.div 
                key="intro"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl"
              >
                <div className="bg-brand-primary p-12 text-center text-white relative">
                   <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full"></div>
                      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full"></div>
                   </div>
                   <div className="relative z-10 flex flex-col items-center">
                     <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-6 ring-1 ring-white/30">
                        <Award className="w-12 h-12 text-white" />
                     </div>
                     <h1 className="text-3xl font-bold uppercase tracking-tight">Evaluación Final</h1>
                     <p className="text-white/70 mt-2 font-medium">Procedimiento PRC-MG-026 v.4</p>
                   </div>
                </div>

                <div className="p-8 lg:p-12 space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                         <h3 className="text-lg font-bold text-brand-primary border-b border-gray-100 pb-2">Instrucciones:</h3>
                         <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-gray-600 font-medium">
                               <CheckCircle2 className="w-5 h-5 text-brand-success flex-shrink-0" />
                               10 preguntas de opción múltiple y verdadero/falso.
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 font-medium">
                               <CheckCircle2 className="w-5 h-5 text-brand-success flex-shrink-0" />
                               Nota mínima de aprobación: 70% (7 de 10).
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 font-medium">
                               <CheckCircle2 className="w-5 h-5 text-brand-success flex-shrink-0" />
                               Una vez iniciada la prueba, no se puede pausar.
                            </li>
                         </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-4 text-center sm:text-left">
                         <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
                            <Clock className="w-5 h-5 text-brand-primary" />
                            <span className="text-sm font-bold text-brand-primary">Detalles de la sesión:</span>
                         </div>
                         <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100 italic font-medium text-xs">
                            <span className="text-gray-500">Intentos disponibles:</span>
                            <span className="text-brand-primary">3</span>
                         </div>
                         <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100 italic font-medium text-xs">
                            <span className="text-gray-500">Intentos realizados:</span>
                            <span className="text-brand-primary">0</span>
                         </div>
                      </div>
                   </div>

                   <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 flex gap-4 items-start">
                      <AlertCircle className="w-6 h-6 text-brand-accent flex-shrink-0" />
                      <p className="text-sm text-gray-700 font-medium">
                         Al completar exitosamente esta evaluación, se generará inmediatamente tu certificado de calificación técnica con validez por 24 meses.
                      </p>
                   </div>

                   <div className="flex items-center justify-center pt-4">
                      <button 
                        onClick={() => setView('exam')}
                        className="group bg-brand-primary text-white font-bold py-6 px-12 rounded-2xl hover:bg-[#152e4a] transition-all shadow-2xl shadow-brand-primary/20 flex items-center gap-4 text-xl overflow-hidden relative"
                      >
                         <span className="relative z-10">Comenzar Evaluación Final</span>
                         <PlayCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
                         <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                      </button>
                   </div>
                </div>
              </motion.div>
            ) : view === 'exam' ? (
              <motion.div
                key="exam"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
              >
                  {/* Exam HUD */}
                  <div className="px-8 py-4 bg-gray-900 border-b border-gray-800 flex justify-between items-center">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center text-brand-primary border border-brand-primary/30">
                           <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Evaluación Final</p>
                           <p className="text-sm font-bold text-white uppercase tracking-tighter">PRC-MG-026 v.4</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-8">
                        <div className="text-right hidden sm:block">
                           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tiempo Restante</p>
                           <p className="text-white font-mono text-xl tabular-nums">42:15</p>
                        </div>
                        <div className="h-10 w-px bg-gray-800"></div>
                        <div className="text-right">
                           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pregunta</p>
                           <p className="text-white font-bold text-xl">{qIndex + 1} de 10</p>
                        </div>
                     </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-gray-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((qIndex + 1) / 10) * 100}%` }}
                      className="h-full bg-brand-primary shadow-[0_0_10px_rgba(27,58,92,0.8)]"
                    />
                  </div>

                  <div className="p-8 lg:p-16 space-y-12">
                     <motion.div 
                       key={qIndex}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="space-y-8"
                     >
                        <h2 className="text-2xl font-bold text-brand-primary leading-tight">
                           {currentQuestion.text}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                           {currentQuestion.options.map((opt, i) => (
                             <button
                               key={opt.id}
                               onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: opt.id }))}
                               className={`w-full text-left p-6 rounded-2xl border-2 transition-all group ${
                                 selectedOptionId === opt.id
                                  ? 'border-brand-primary bg-blue-50/50 shadow-md ring-1 ring-brand-primary/20'
                                  : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                               }`}
                             >
                               <div className="flex items-center gap-4">
                                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors ${
                                    selectedOptionId === opt.id ? 'bg-brand-primary border-brand-primary text-white' : 'border-gray-200 text-gray-300 group-hover:border-gray-300'
                                  }`}>
                                     {String.fromCharCode(65 + i)}
                                  </div>
                                  <span className={`text-lg font-medium ${selectedOptionId === opt.id ? 'text-brand-primary font-bold' : 'text-gray-600'}`}>
                                    {opt.text}{opt.isCorrect && ' *'}
                                  </span>
                               </div>
                             </button>
                           ))}
                        </div>
                     </motion.div>

                     <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                        <p className="text-xs text-gray-400 font-medium italic">Respuesta guardada automáticamente al avanzar.</p>
                        <button
                          onClick={() => {
                            if (qIndex < questions.length - 1) {
                              setQIndex(qIndex + 1);
                            } else {
                              setView('result');
                            }
                          }}
                          disabled={!selectedOptionId}
                          className={`px-12 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-3 ${
                            selectedOptionId
                              ? 'bg-brand-primary text-white hover:bg-[#152e4a] shadow-lg shadow-brand-primary/20'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                           {qIndex === questions.length - 1 ? 'Finalizar Evaluación' : 'Siguiente Pregunta'} <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl"
              >
                <div className={`p-12 text-center text-white ${passed ? 'bg-brand-success' : 'bg-brand-error'}`}>
                  <div className="flex justify-center mb-6">
                     <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                        {passed ? <CheckCircle2 className="w-16 h-16 text-white" /> : <XCircle className="w-16 h-16 text-white" />}
                     </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 uppercase tracking-tight">
                    {passed ? 'Evaluación Aprobada' : 'Evaluación Reprobada'}
                  </h2>
                  <p className="text-white/80 font-medium">
                    Obtuviste {score} de {questions.length} respuestas correctas ({Math.round((score / questions.length) * 100)}%) · Mínimo para aprobar: {FINAL_EXAM_PASS_COUNT} de {questions.length} (70%)
                  </p>
                </div>

                <div className="p-8 lg:p-12 space-y-8">
                  {passed ? (
                    <div className="flex flex-col items-center gap-6 text-center">
                      <p className="text-gray-600 font-medium max-w-md">
                        Tu certificado de calificación técnica se generará a continuación.
                      </p>
                      <button
                        onClick={() => {
                          markFinalExamPassed();
                          navigate('/result', { state: { score, total: questions.length } });
                        }}
                        className="bg-brand-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-[#152e4a] transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        Ver mi Certificado <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-6 text-center">
                      <p className="text-gray-600 font-medium max-w-md">
                        No alcanzaste la nota mínima. Repasa el contenido de las láminas con las que tuviste dudas y vuelve a intentarlo.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => {
                            setAnswers({});
                            setQIndex(0);
                            setView('exam');
                          }}
                          className="border-2 border-brand-primary text-brand-primary font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                        >
                          Reintentar Evaluación <RotateCcw className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => navigate('/course')}
                          className="bg-gray-100 text-gray-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-200 transition-all"
                        >
                          Revisar Contenidos
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </div>
  );
}
