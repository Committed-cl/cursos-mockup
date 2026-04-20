import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, PlayCircle, Clock, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';

const courses = [
  {
    id: 1,
    title: "Soldadura Fuerte de Tuberías de Cobre",
    code: "PRC-MG-026",
    progress: 35,
    status: "En progreso",
    image: "https://picsum.photos/seed/soldadura/800/450",
    color: "brand-progress"
  },
  {
    id: 2,
    title: "Prevención de Riesgos en Instalaciones de Gas",
    code: "SEG-MG-012",
    progress: 0,
    status: "No iniciado",
    image: "https://picsum.photos/seed/seguridad/800/450",
    color: "brand-locked"
  },
  {
    id: 3,
    title: "Normativa de Seguridad DS N°66",
    code: "NORM-MG-001",
    progress: 100,
    status: "Completado",
    image: "https://picsum.photos/seed/normativa/800/450",
    color: "brand-success"
  }
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-8">
        <div className="border-l-4 border-brand-primary pl-4">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Bienvenido, Juan Pérez</h1>
          <p className="text-slate-500 mt-2 font-medium">Asignaciones de capacitación técnica vigentes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video bg-gray-200">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                   <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm ${
                     course.status === 'Completado' ? 'bg-brand-success' : 
                     course.status === 'En progreso' ? 'bg-brand-progress' : 'bg-brand-secondary'
                   }`}>
                     {course.status}
                   </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{course.code}</p>
                  {course.status === 'Completado' && <CheckCircle2 className="w-5 h-5 text-brand-success" />}
                </div>
                <h3 className="font-bold text-lg text-brand-primary leading-tight h-12 overflow-hidden mb-4">
                  {course.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-gray-500">Avance del curso</span>
                      <span className="text-brand-primary">{course.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${
                          course.status === 'Completado' ? 'bg-brand-success' : 
                          course.progress > 0 ? 'bg-brand-progress' : 'bg-gray-300'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium pt-2 border-t border-gray-50">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> 4h total
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> 16 módulos
                    </div>
                  </div>

                  <button 
                    onClick={() => course.id === 1 ? navigate('/course') : null}
                    className={`w-full py-3 px-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      course.status === 'Completado' 
                        ? 'bg-gray-100 text-brand-primary hover:bg-gray-200' 
                        : 'bg-brand-primary text-white hover:bg-[#152e4a] shadow-lg shadow-brand-primary/10'
                    }`}
                  >
                    {course.status === 'Completado' ? (
                      <><Award className="w-4 h-4" /> Ver Certificado</>
                    ) : (
                      <><PlayCircle className="w-4 h-4" /> {course.progress > 0 ? 'Continuar' : 'Comenzar'}</>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Stats */}
        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-progress">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">1</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Curso activo</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-brand-success">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">2</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Cursos completados</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-brand-accent">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-primary">2</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Certificados vigentes</p>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
