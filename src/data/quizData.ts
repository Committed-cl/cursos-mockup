export interface QuizOption {
  id: string;
  text: string;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: number;
  type: 'multiple' | 'boolean';
  text: string;
  options: QuizOption[];
  feedback: string;
}

export interface ModuleQuiz {
  id: string;
  title: string;
  sectionsLabel: string;
  passCount: number;
  questions: QuizQuestion[];
}

export const MODULE_QUIZZES: Record<string, ModuleQuiz> = {
  'module-1': {
    id: 'module-1',
    title: 'Módulo 1 — Marco: cuándo, quién y con qué respaldo',
    sectionsLabel: 'Secciones 2, 3 y 4',
    passCount: 3,
    questions: [
      {
        id: 1,
        type: 'multiple',
        text: '¿A qué trabajos aplica este procedimiento?',
        options: [
          { id: 'a', text: 'A cualquier soldadura sobre metales' },
          { id: 'b', text: 'A soldaduras fuertes en cañerías de cobre que operen hasta 1,4 bar', isCorrect: true },
          { id: 'c', text: 'Solo a cañerías de acero' },
          { id: 'd', text: 'A la soldadura estaño-plomo de tapones' }
        ],
        feedback: 'El procedimiento aplica a soldadura fuerte en cobre hasta 1,4 bar (Lámina 4).'
      },
      {
        id: 2,
        type: 'boolean',
        text: 'Si hay personal de Metrogas presente en el lugar, el contratista queda liberado de su responsabilidad.',
        options: [
          { id: 'a', text: 'Verdadero' },
          { id: 'b', text: 'Falso', isCorrect: true }
        ],
        feedback: 'Falso. La presencia de Metrogas no exime al contratista de su responsabilidad (Lámina 7).'
      },
      {
        id: 3,
        type: 'multiple',
        text: '¿Qué significa la sigla IDS?',
        options: [
          { id: 'a', text: 'Inspecciones Documentadas de Seguridad', isCorrect: true },
          { id: 'b', text: 'Índice de Soldadura' },
          { id: 'c', text: 'Instrucción de Seguridad' },
          { id: 'd', text: 'Inspección de Ductos' }
        ],
        feedback: 'A la IDS se adjuntan, entre otros, el checklist diario y la inspección de equipos (Lámina 10).'
      },
      {
        id: 4,
        type: 'multiple',
        text: '¿Cuál de estas situaciones queda FUERA del alcance del procedimiento?',
        options: [
          { id: 'a', text: 'Uniones de cobre en media presión' },
          { id: 'b', text: 'Uniones de tapones para arranques de futuros artefactos (tapatornillo o estaño-plomo)', isCorrect: true },
          { id: 'c', text: 'Soldaduras en matriz interior' },
          { id: 'd', text: 'Redes interiores de baja presión' }
        ],
        feedback: 'Es la única exclusión indicada (Lámina 5).'
      }
    ]
  },
  'module-2': {
    id: 'module-2',
    title: 'Módulo 2 — Seguridad, equipos y preparación previa',
    sectionsLabel: 'Secciones 5, 6 y 7',
    passCount: 4,
    questions: [
      {
        id: 1,
        type: 'multiple',
        text: 'El extintor que debe estar junto a quien suelda, antes de encender, es:',
        options: [
          { id: 'a', text: 'ABC de ≥10 kg', isCorrect: true },
          { id: 'b', text: 'De agua de 6 kg' },
          { id: 'c', text: 'Opcional si el trabajo es corto' },
          { id: 'd', text: 'CO₂ de 2 kg' }
        ],
        feedback: 'Extintor ABC ≥10 kg operativo, al lado, antes de encender (Láminas 13 y 20).'
      },
      {
        id: 2,
        type: 'boolean',
        text: 'Los cilindros de oxígeno pueden almacenarse junto a los de gas combustible, sin separación.',
        options: [
          { id: 'a', text: 'Verdadero' },
          { id: 'b', text: 'Falso', isCorrect: true }
        ],
        feedback: 'Falso. Se separan con tabiques/mallas o 1 a 1,5 m; además, llenos separados de vacíos y válvulas cerradas (Lámina 15).'
      },
      {
        id: 3,
        type: 'multiple',
        text: 'Para redes interiores de cobre en media presión (hasta 1,4 bar), el material de aporte debe tener:',
        options: [
          { id: 'a', text: '15% de plata', isCorrect: true },
          { id: 'b', text: '0% de plata siempre' },
          { id: 'c', text: '45% de plata' },
          { id: 'd', text: 'Cualquier aleación sirve' }
        ],
        feedback: 'El % de plata se elige según red y presión (Lámina 17).'
      },
      {
        id: 4,
        type: 'multiple',
        text: '¿Cuándo se usa el EPP completo?',
        options: [
          { id: 'a', text: 'Solo en trabajos largos' },
          { id: 'b', text: 'Siempre, sin importar lo corto o simple del trabajo', isCorrect: true },
          { id: 'c', text: 'Solo si lo pide el supervisor' },
          { id: 'd', text: 'Solo en espacios confinados' }
        ],
        feedback: 'El EPP se usa siempre y en buen estado (Lámina 12).'
      },
      {
        id: 5,
        type: 'multiple',
        text: 'En un equipo que usa oxígeno, además del arrestallamas propio del equipo, se exige:',
        options: [
          { id: 'a', text: 'Un sistema antirretroceso de llamas adicional, en ambas líneas (oxígeno y combustible)', isCorrect: true },
          { id: 'b', text: 'Nada adicional' },
          { id: 'c', text: 'Duplicar las mangueras' },
          { id: 'd', text: 'Un segundo operador' }
        ],
        feedback: 'Antirretroceso adicional en ambas líneas cuando se usa oxígeno (Láminas 16 y 18).'
      }
    ]
  },
  'module-3': {
    id: 'module-3',
    title: 'Módulo 3 — Ejecución de la unión',
    sectionsLabel: 'Secciones 8, 9, 10 y 11',
    passCount: 4,
    questions: [
      {
        id: 1,
        type: 'multiple',
        text: '¿Qué combustible indica el procedimiento para el soplete?',
        options: [
          { id: 'a', text: 'Propano (GLP)', isCorrect: true },
          { id: 'b', text: 'Acetileno / oxiacetileno' },
          { id: 'c', text: 'Gasolina' },
          { id: 'd', text: 'Hidrógeno' }
        ],
        feedback: 'El combustible es propano; el equipo puede ser a GLP o mezcla oxígeno-propano (Lámina 27).'
      },
      {
        id: 2,
        type: 'multiple',
        text: 'Al calentar, ¿qué se calienta primero y a qué distancia del accesorio?',
        options: [
          { id: 'a', text: 'El material de aporte, pegado al accesorio' },
          { id: 'b', text: 'La cañería de cobre, a unos 2 a 2,5 cm del accesorio', isCorrect: true },
          { id: 'c', text: 'El accesorio primero, a 10 cm' },
          { id: 'd', text: 'Da igual el orden' }
        ],
        feedback: 'Primero la cañería, llama en movimiento a 2–2,5 cm (Lámina 28).'
      },
      {
        id: 3,
        type: 'boolean',
        text: 'Cuando el desoxidante se ve tranquilo y transparente, «como agua», la cañería alcanzó la temperatura adecuada (≥450 °C).',
        options: [
          { id: 'a', text: 'Verdadero', isCorrect: true },
          { id: 'b', text: 'Falso' }
        ],
        feedback: 'Verdadero. Esa es la señal para dirigir luego la llama al accesorio (Lámina 28).'
      },
      {
        id: 4,
        type: 'multiple',
        text: '¿Cuál es la secuencia correcta para aplicar la aleación en la unión?',
        options: [
          { id: 'a', text: 'Superior, lados, inferior' },
          { id: 'b', text: 'Inferior, lados, superior', isCorrect: true },
          { id: 'c', text: 'Solo en la parte superior' },
          { id: 'd', text: 'En cualquier orden' }
        ],
        feedback: 'Así el aporte cubre toda la circunferencia (Lámina 32).'
      },
      {
        id: 5,
        type: 'multiple',
        text: '¿Qué NO se admite al preparar el tubo para soldar por capilaridad?',
        options: [
          { id: 'a', text: 'Cortar con cortatubo' },
          { id: 'b', text: 'Limpiar con lija' },
          { id: 'c', text: 'Abocardar (abocinar) el tubo', isCorrect: true },
          { id: 'd', text: 'Aplicar decapante' }
        ],
        feedback: 'Nunca se admite abocardado para soldar por capilaridad (Lámina 23).'
      }
    ]
  },
  'module-4': {
    id: 'module-4',
    title: 'Módulo 4 — Resultado, cierre y formalidad',
    sectionsLabel: 'Secciones 12, 13 y 14',
    passCount: 3,
    questions: [
      {
        id: 1,
        type: 'multiple',
        text: 'Si la aleación forma gotas sobre la superficie y no se reparte por los intersticios, lo más probable es que:',
        options: [
          { id: 'a', text: 'Las superficies no estén desoxidadas o la temperatura sea insuficiente', isCorrect: true },
          { id: 'b', text: 'Haya exceso de plata' },
          { id: 'c', text: 'El tubo esté demasiado limpio' },
          { id: 'd', text: 'Falte decapante siempre' }
        ],
        feedback: 'Gotas = superficie sucia/no desoxidada o falta de calor (Lámina 35).'
      },
      {
        id: 2,
        type: 'multiple',
        text: 'La calificación del soldador en matriz interior se pierde si:',
        options: [
          { id: 'a', text: 'Cambia de empresa' },
          { id: 'b', text: 'Pasa más de 6 meses sin realizar soldadura fuerte', isCorrect: true },
          { id: 'c', text: 'Usa propano' },
          { id: 'd', text: 'Nunca se pierde' }
        ],
        feedback: 'Si no puede demostrar continuidad, debe recalificarse (Lámina 38).'
      },
      {
        id: 3,
        type: 'boolean',
        text: 'Terminado el trabajo basta con apagar el soplete; no es necesario verificar que no quede material en ignición.',
        options: [
          { id: 'a', text: 'Verdadero' },
          { id: 'b', text: 'Falso', isCorrect: true }
        ],
        feedback: 'Falso. Hay que verificar que no quede material en ignición y dejar el sitio seguro y ordenado (Lámina 37).'
      },
      {
        id: 4,
        type: 'multiple',
        text: '¿Qué registro debe completarse mensualmente?',
        options: [
          { id: 'a', text: 'El checklist de inspección periódica de equipos (Anexo 2)', isCorrect: true },
          { id: 'b', text: 'La calificación del soldador' },
          { id: 'c', text: 'El AST' },
          { id: 'd', text: 'Ninguno' }
        ],
        feedback: 'Inspección mensual de equipos, con copia a la IDS (Láminas 40 y 41).'
      }
    ]
  }
};

export const FINAL_EXAM_PASS_COUNT = 7;

export const FINAL_EXAM_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple',
    text: '¿Hasta qué presión aplica el procedimiento para soldaduras fuertes en cañerías de cobre?',
    options: [
      { id: 'a', text: 'Hasta 3,8 bar' },
      { id: 'b', text: 'Solo a presión atmosférica' },
      { id: 'c', text: 'Hasta 1,4 bar', isCorrect: true },
      { id: 'd', text: 'Sin límite de presión' }
    ],
    feedback: 'Aplica a cobre hasta 1,4 bar; la extensión de empalmes en 3,8 bar se rige por otro procedimiento (Láminas 4 y 17).'
  },
  {
    id: 2,
    type: 'boolean',
    text: 'Los elementos de protección personal deben usarse siempre, sin importar lo corto o simple que parezca el trabajo.',
    options: [
      { id: 'a', text: 'Verdadero', isCorrect: true },
      { id: 'b', text: 'Falso' }
    ],
    feedback: 'Verdadero. El EPP se usa siempre y debe estar en buen estado, libre de grasas y aceites (Lámina 12).'
  },
  {
    id: 3,
    type: 'multiple',
    text: 'Antes de encender el soplete, junto a quien suelda debe haber:',
    options: [
      { id: 'a', text: 'Un balde con agua' },
      { id: 'b', text: 'Un extintor ABC de ≥10 kg, operativo', isCorrect: true },
      { id: 'c', text: 'Nada, si el trabajo es corto' },
      { id: 'd', text: 'Un extintor de CO₂ de 2 kg' }
    ],
    feedback: 'Extintor ABC ≥10 kg al lado, antes de encender (Láminas 13 y 20).'
  },
  {
    id: 4,
    type: 'multiple',
    text: 'Para matrices interiores de cobre en media o baja presión (hasta 1,4 bar), el material de aporte debe tener:',
    options: [
      { id: 'a', text: '0% de plata' },
      { id: 'b', text: '45% de plata' },
      { id: 'c', text: 'Es indiferente' },
      { id: 'd', text: '15% de plata', isCorrect: true }
    ],
    feedback: 'El % de plata se define según el tipo de red y la presión (Lámina 17).'
  },
  {
    id: 5,
    type: 'multiple',
    text: '¿Qué indica el procedimiento respecto de unir cobre con acero o acero inoxidable?',
    options: [
      { id: 'a', text: 'Se pueden soldar directamente si se calienta más' },
      { id: 'b', text: 'No se permite soldarlos entre sí; se usa un elemento de transición o un accesorio de aleación de cobre', isCorrect: true },
      { id: 'c', text: 'Se unen con soldadura estaño-plomo' },
      { id: 'd', text: 'Se permite solo en matriz interior' }
    ],
    feedback: 'No se sueldan entre sí; se intercala una transición o un accesorio de aleación de cobre (Lámina 29).'
  },
  {
    id: 6,
    type: 'multiple',
    text: '¿Con qué combustible se alimenta el soplete según el procedimiento?',
    options: [
      { id: 'a', text: 'Acetileno / oxiacetileno' },
      { id: 'b', text: 'Butano puro' },
      { id: 'c', text: 'Propano (GLP)', isCorrect: true },
      { id: 'd', text: 'Gasolina blanca' }
    ],
    feedback: 'El combustible es propano; el equipo puede ser a GLP o mezcla oxígeno-propano, con antirretroceso si usa oxígeno (Láminas 16 y 27).'
  },
  {
    id: 7,
    type: 'multiple',
    text: 'Durante el calentamiento, ¿qué se calienta primero y cómo se reconoce que se alcanzó la temperatura adecuada (≥450 °C)?',
    options: [
      { id: 'a', text: 'Se calienta primero la cañería, a 2–2,5 cm del accesorio, y la señal es el desoxidante tranquilo y transparente, «como agua»', isCorrect: true },
      { id: 'b', text: 'Se calienta primero el material de aporte hasta que se derrite' },
      { id: 'c', text: 'Se calienta primero el accesorio y luego el tubo' },
      { id: 'd', text: 'Se reconoce cuando el cobre se pone rojo' }
    ],
    feedback: 'Primero la cañería, llama en movimiento; el desoxidante «como agua» avisa la temperatura (Lámina 28).'
  },
  {
    id: 8,
    type: 'multiple',
    text: 'Al aportar la aleación, ¿en qué orden debe aplicarse sobre la unión?',
    options: [
      { id: 'a', text: 'En cualquier orden' },
      { id: 'b', text: 'Superior, lados e inferior' },
      { id: 'c', text: 'Solo en la parte superior' },
      { id: 'd', text: 'Inferior, lados y superior', isCorrect: true }
    ],
    feedback: 'Así el aporte cubre toda la circunferencia (Lámina 32).'
  },
  {
    id: 9,
    type: 'multiple',
    text: 'Si la aleación no penetra en los intersticios y escurre por la superficie exterior, lo más probable es que:',
    options: [
      { id: 'a', text: 'Haya demasiado decapante' },
      { id: 'b', text: 'Falte calentamiento del elemento macho (la cañería) y/o haya recalentamiento del elemento hembra (el accesorio)', isCorrect: true },
      { id: 'c', text: 'El material tenga demasiada plata' },
      { id: 'd', text: 'El decapante esté vencido' }
    ],
    feedback: 'Escurre por fuera = falta calor en la cañería y/o exceso en el accesorio (Lámina 35).'
  },
  {
    id: 10,
    type: 'multiple',
    text: 'En soldaduras de matriz interior, la calificación del soldador se pierde si:',
    options: [
      { id: 'a', text: 'La calificación nunca vence' },
      { id: 'b', text: 'Cambia de supervisor' },
      { id: 'c', text: 'Deja de realizar soldadura fuerte por un período mayor a 6 meses y no puede demostrar continuidad', isCorrect: true },
      { id: 'd', text: 'Usa varillas con plata' }
    ],
    feedback: 'Si no puede demostrar continuidad, debe recalificarse (Lámina 38).'
  }
];
