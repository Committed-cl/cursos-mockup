import { useState } from 'react';
import Layout from '../components/Layout';
import CourseSidebar from '../components/CourseSidebar';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const questions = [
  {
    id: 1,
    text: "¿Cuál de los siguientes NO es un EPP exigido para la actividad de soldadura fuerte?",
    options: [
      { id: 'a', text: "Guantes de cuero de puño largo" },
      { id: 'b', text: "Anteojos oscuros filtrantes" },
      { id: 'c', text: "Guantes de látex desechables", isCorrect: true },
      { id: 'd', text: "Botín o bota de seguridad" }
    ],
    feedback: "Los guantes de látex no ofrecen protección térmica ni mecánica contra salpicaduras de metal fundido. Se requieren obligatoriamente guantes de cuero de puño largo."
  },
  {
    id: 2,
    text: "Antes de encender el soplete, ¿qué debe verificarse primero?",
    options: [
      { id: 'a', text: "Que el material de aporte esté listo" },
      { id: 'b', text: "Que el entorno tolera térmica y operacionalmente la actividad", isCorrect: true },
      { id: 'c', text: "Que el tubo esté cortado a medida" },
      { id: 'd', text: "Que el decapante esté aplicado" }
    ],
    feedback: "La seguridad es primaria. El entorno debe ser validado antes de generar cualquier llama abierta."
  },
  {
    id: 3,
    text: "¿Verdadero o Falso? En espacios confinados sin ventilación adecuada, el soldador debe usar máscara de aire independiente del medio ambiente.",
    options: [
      { id: 'a', text: "Verdadero", isCorrect: true },
      { id: 'b', text: "Falso" }
    ],
    feedback: "Correcto. El riesgo de asfixia o intoxicación por humos de soldadura es crítico en espacios confinados."
  }
];

export default function QuizView() {
  const navigate = useNavigate();
  const { quizId } = useParams();
  
  const sectionNum = quizId?.split('-')[1] || '5';
  
  const [currentStep, setCurrentStep] = useState<'quiz' | 'result'>('quiz');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId: number, oId: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: oId }));
  };

  const handleFinish = () => {
    setSubmitted(true);
    setCurrentStep('result');
  };

  const score = questions.reduce((acc, q) => {
    const correctOption = q.options.find(o => o.isCorrect);
    return acc + (answers[q.id] === correctOption?.id ? 1 : 0);
  }, 0);

  const passed = score >= 2;

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-slate-800">
      <Layout breadcrumb={`Soldadura Fuerte > Sección ${sectionNum} > Quiz de Evaluación`}>
        <div className="flex gap-8">
          <div className="lg:w-80 flex-shrink-0 hidden lg:block border rounded-xl overflow-hidden h-fit bg-white self-start sticky top-24">
            <CourseSidebar />
          </div>

          <div className="flex-1 max-w-3xl mx-auto space-y-8">
            <AnimatePresence mode="wait">
              {currentStep === 'quiz' ? (
                <motion.div 
                  key="quiz"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-progress">
                          <HelpCircle className="w-6 h-6" />
                       </div>
                       <div>
                          <h1 className="text-xl font-bold text-brand-primary">Evaluación: Sección {sectionNum}</h1>
                          <p className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest">Validación de conocimientos técnicos</p>
                       </div>
                    </div>

                    <div className="space-y-12">
                      {questions.map((q, idx) => (
                        <div key={q.id} className="space-y-4">
                          <h3 className="font-bold text-brand-primary flex gap-3">
                            <span className="text-brand-progress">0{idx + 1}.</span>
                            {q.text}
                          </h3>
                          <div className="grid grid-cols-1 gap-3">
                            {q.options.map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() => handleSelect(q.id, opt.id)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                                  answers[q.id] === opt.id 
                                    ? 'border-brand-primary bg-blue-50/30' 
                                    : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                   <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                     answers[q.id] === opt.id ? 'border-brand-primary' : 'border-gray-300'
                                   }`}>
                                      {answers[q.id] === opt.id && <div className="w-2.5 h-2.5 bg-brand-primary rounded-full"></div>}
                                   </div>
                                   <span className={`text-sm font-medium ${answers[q.id] === opt.id ? 'text-brand-primary font-bold' : 'text-gray-600'}`}>
                                     {opt.text}
                                   </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex justify-end">
                       <button
                         onClick={handleFinish}
                         disabled={Object.keys(answers).length < questions.length}
                         className={`px-8 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                           Object.keys(answers).length < questions.length
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-brand-primary text-white hover:bg-[#152e4a] shadow-lg shadow-brand-primary/20'
                         }`}
                       >
                         Enviar Respuestas <ArrowRight className="w-5 h-5" />
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
                       {passed ? (
                         <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                           <CheckCircle2 className="w-16 h-16 text-white" />
                         </div>
                       ) : (
                         <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                           <XCircle className="w-16 h-16 text-white" />
                         </div>
                       )}
                    </div>
                    <h2 className="text-3xl font-bold mb-2 uppercase tracking-tight">
                      {passed ? 'Quiz Aprobado' : 'Quiz Reprobado'}
                    </h2>
                    <p className="text-white/80 font-medium">
                      Has obtenido {score} de {questions.length} respuestas correctas ({Math.round((score / questions.length) * 100)}%)
                    </p>
                  </div>

                  <div className="p-8 lg:p-12 space-y-8">
                    <div className="space-y-12">
                      {questions.map((q, idx) => {
                        const correctOption = q.options.find(o => o.isCorrect);
                        const isUserCorrect = answers[q.id] === correctOption?.id;
                        return (
                          <div key={q.id} className="space-y-4">
                            <div className="flex gap-4">
                               <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 ${isUserCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                                  {isUserCorrect ? (
                                    <CheckCircle2 className="w-5 h-5 text-brand-success" />
                                  ) : (
                                    <XCircle className="w-5 h-5 text-brand-error" />
                                  )}
                               </div>
                               <div>
                                  <h3 className="font-bold text-brand-primary mb-3">Pregunta {idx + 1}: {q.text}</h3>
                                  <div className={`p-4 rounded-xl border border-dashed text-sm leading-relaxed ${isUserCorrect ? 'bg-green-50/50 border-green-200 text-green-700' : 'bg-red-50/50 border-red-200 text-red-700'}`}>
                                     <strong className="block mb-1 font-bold uppercase tracking-widest text-[10px]">Retroalimentación:</strong>
                                     {q.feedback}
                                  </div>
                               </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                      {passed ? (
                        <button 
                          onClick={() => navigate('/final-exam')}
                          className="flex-1 bg-brand-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-[#152e4a] transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                          Continuar a la Evaluación Final <ArrowRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => {
                            setCurrentStep('quiz');
                            setAnswers({});
                            setSubmitted(false);
                          }}
                          className="flex-1 border-2 border-brand-primary text-brand-primary font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                        >
                          Reintentar Quiz <RotateCcw className="w-5 h-5" />
                        </button>
                      )}
                      {!passed && (
                        <button 
                          onClick={() => navigate('/course')}
                          className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-200 transition-all"
                        >
                          Revisar Contenidos
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Layout>
    </div>
  );
}
