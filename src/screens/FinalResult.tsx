import Layout from '../components/Layout';
import { Award, Download, ArrowLeft, CheckCircle2, QrCode, ShieldCheck, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function FinalResult() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Layout>
        <div className="max-w-4xl mx-auto w-full py-8">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
           >
              {/* Celebartion Header */}
              <div className="bg-gradient-to-br from-brand-success to-[#1e8a4a] p-12 text-center text-white relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-40 h-40 border-8 border-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 border-8 border-white rounded-full"></div>
                 </div>
                 
                 <div className="relative z-10 space-y-6">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, stiffness: 100 }}
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl"
                    >
                       <Award className="w-12 h-12 text-brand-success" />
                    </motion.div>
                    
                    <div className="space-y-2">
                       <h1 className="text-4xl font-extrabold tracking-tight">¡Felicitaciones, Juan!</h1>
                       <p className="text-white/80 text-lg font-medium max-w-md mx-auto">
                          Has aprobado exitosamente la evaluación técnica del procedimiento de soldadura fuerte.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
                 <div className="p-8 text-center border-r border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Resultado Final</p>
                    <p className="text-3xl font-black text-brand-success">90%</p>
                    <p className="text-xs text-gray-500 font-medium mt-1">9 de 10 correctas</p>
                 </div>
                 <div className="p-8 text-center border-r border-gray-100 bg-gray-50/50">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Nota de Aprobación</p>
                    <p className="text-3xl font-black text-brand-primary">70%</p>
                    <p className="text-xs text-gray-500 font-medium mt-1">Nota mínima exigida</p>
                 </div>
                 <div className="p-8 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Estado</p>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-brand-success rounded-full text-xs font-bold uppercase tracking-widest border border-green-200">
                       <CheckCircle2 className="w-4 h-4" /> Aprobado
                    </div>
                    <p className="text-xs text-gray-500 font-medium mt-2">Válido hasta: 20/04/2028</p>
                 </div>
              </div>

              {/* Certificate Preview */}
              <div className="p-8 lg:p-12 bg-gray-100/50">
                 <h3 className="text-lg font-bold text-brand-primary mb-8 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-brand-primary" />
                    Vista Previa de tu Certificado
                 </h3>

                 <div className="bg-white p-8 lg:p-16 border-[12px] border-double border-gray-200 shadow-xl relative max-w-3xl mx-auto rounded-sm overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full border border-gray-100 pointer-events-none"></div>
                    
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
                       <div className="text-8xl font-black text-black rotate-[-15deg]">METROGAS</div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full text-center space-y-10">
                       <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
                          <div className="font-bold text-xs tracking-widest uppercase text-brand-primary flex items-center gap-2">
                             <Award className="w-5 h-5" /> Plataforma de Capacitación
                          </div>
                          <div className="font-bold text-xs tracking-widest uppercase text-brand-primary">
                             Folio: CERT-2026-00142
                          </div>
                       </div>

                       <div className="space-y-4">
                          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Certificado de Aprobación</h2>
                          <p className="text-gray-500 text-sm italic italic">La Dirección de Capacitación y Seguridad otorga este diploma a:</p>
                          <h1 className="text-4xl font-black text-brand-primary uppercase tracking-tighter">Juan Pérez</h1>
                          <div className="w-32 h-1 bg-brand-accent mx-auto"></div>
                       </div>

                       <div className="space-y-4 max-w-md mx-auto">
                          <p className="text-gray-600 text-sm leading-relaxed">
                             Por haber completado satisfactoriamente el curso de entrenamiento técnico basado en el procedimiento corporativo:
                          </p>
                          <h4 className="font-bold text-brand-primary text-xl uppercase tracking-tight">
                             "Procedimiento de Soldadura Fuerte de Tuberías de Cobre"
                          </h4>
                          <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest">
                             PRC-MG-026 v.43 - Código de Actividad: MG-402
                          </p>
                       </div>

                       <div className="grid grid-cols-2 gap-12 pt-8">
                          <div className="text-center space-y-2">
                             <div className="h-0.5 bg-gray-200 w-full mb-2"></div>
                             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Metrogas S.A.</p>
                             <p className="text-[9px] text-gray-500 font-medium">Departamento de Ingeniería y Redes</p>
                          </div>
                          <div className="text-center space-y-2">
                             <div className="h-0.5 bg-gray-200 w-full mb-2"></div>
                             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Centro de Formación Técnica</p>
                             <p className="text-[9px] text-gray-500 font-medium">Validación de Competencias Laborales</p>
                          </div>
                       </div>

                       <div className="flex justify-between items-end pt-8">
                          <div className="flex items-center gap-3 grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                             <div className="font-bold text-base tracking-widest text-brand-primary">
                                METRO<span className="text-brand-accent">GAS</span>
                             </div>
                          </div>
                          <div className="p-2 border border-gray-100 rounded-lg group-hover:border-gray-200 transition-colors">
                             <QrCode className="w-12 h-12 text-gray-300 group-hover:text-gray-800 transition-colors" />
                             <p className="text-[8px] font-bold text-gray-300 group-hover:text-gray-400 mt-1 uppercase">Validar Código</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mt-12 mb-4">
                    <button className="flex-1 bg-brand-primary text-white font-bold py-5 px-8 rounded-2xl hover:bg-[#152e4a] transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3">
                       <Download className="w-5 h-5" /> Descargar Certificado (PDF)
                    </button>
                    <button className="sm:w-auto bg-white text-brand-primary border-2 border-brand-primary font-bold py-5 px-8 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 px-10">
                       <Printer className="w-5 h-5" /> Imprimir
                    </button>
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 border-t border-gray-100">
                 <button 
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors"
                 >
                    <ArrowLeft className="w-5 h-5" /> Volver a Mis Cursos
                 </button>
                 
                 <div className="flex items-center gap-4">
                    <p className="text-sm font-medium text-gray-400 italic">¿Necesitas ayuda con tu certificación?</p>
                    <button className="text-sm font-bold text-brand-primary hover:underline">Soporte Metrogas</button>
                 </div>
              </div>
           </motion.div>
        </div>
      </Layout>
    </div>
  );
}
