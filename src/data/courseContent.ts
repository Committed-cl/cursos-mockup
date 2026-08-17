export interface SlideContent {
  id: number;
  sectionId: number;
  sectionTitle: string;
  title: string;
  content: string[];
  ideaClave?: string;
  imageSeed?: string;
}

export const COURSE_SECTIONS = [
  {
    id: 1,
    title: "1. De qué se trata este curso",
    slides: [1, 2]
  },
  {
    id: 2,
    title: "2. Cuándo aplica el procedimiento",
    slides: [3, 4, 5]
  },
  {
    id: 3,
    title: "3. Quién es responsable",
    slides: [6, 7, 8]
  },
  {
    id: 4,
    title: "4. Marco normativo y lenguaje técnico",
    slides: [9, 10],
    quizId: 'module-1'
  },
  {
    id: 5,
    title: "5. Seguridad y salud: la base de todo",
    slides: [11, 12, 13, 14, 15]
  },
  {
    id: 6,
    title: "6. Equipos, materiales e insumos",
    slides: [16, 17, 18]
  },
  {
    id: 7,
    title: "7. Preparación del trabajo (checklist diario)",
    slides: [19, 20, 21],
    quizId: 'module-2'
  },
  {
    id: 8,
    title: "8. Preparación de la unión",
    slides: [22, 23, 24]
  },
  {
    id: 9,
    title: "9. Aplicación del decapante",
    slides: [25, 26]
  },
  {
    id: 10,
    title: "10. Calentamiento",
    slides: [27, 28, 29, 30]
  },
  {
    id: 11,
    title: "11. Aplicación de la soldadura",
    slides: [31, 32, 33],
    quizId: 'module-3'
  },
  {
    id: 12,
    title: "12. Calidad y defectos típicos",
    slides: [34, 35]
  },
  {
    id: 13,
    title: "13. Enfriamiento, limpieza y cierre",
    slides: [36, 37]
  },
  {
    id: 14,
    title: "14. Calificación del soldador y registros",
    slides: [38, 39, 40, 41],
    quizId: 'module-4'
  },
  {
    id: 15,
    title: "15. Cierre del curso",
    slides: [42]
  }
];

export const SLIDES: Record<number, SlideContent> = {
  1: {
    id: 1,
    sectionId: 1,
    sectionTitle: "1. De qué se trata este curso",
    title: "Propósito de la capacitación",
    content: [
      "Este curso te entrega el criterio para ejecutar soldadura fuerte en tuberías de cobre tal como lo exige el procedimiento PRC-MG-026 (versión 4) de Metrogas: con seguridad, con calidad y dejando la evidencia que corresponde.",
      "No se trata solo de \"hacer que pegue\". Una unión bien soldada es el resultado de una secuencia: preparar, controlar riesgos, elegir el material correcto, calentar bien, aportar en el momento justo, verificar y registrar. Si un eslabón falla, falla la unión."
    ],
    ideaClave: "una buena soldadura no depende solo del pulso, sino de hacer bien cada paso del procedimiento.",
    imageSeed: "training-purpose"
  },
  2: {
    id: 2,
    sectionId: 1,
    sectionTitle: "1. De qué se trata este curso",
    title: "Qué vas a poder hacer al terminar",
    content: [
      "Al finalizar el curso deberías ser capaz de:",
      "• Reconocer cuándo aplica este procedimiento y cuándo no.",
      "• Cumplir las condiciones de seguridad antes, durante y después del trabajo.",
      "• Revisar y seleccionar correctamente equipos, materiales e insumos.",
      "• Ejecutar la unión de forma ordenada y técnicamente correcta.",
      "• Distinguir a simple vista una unión bien hecha de una defectuosa.",
      "• Usar los checklists diario y mensual como herramienta real de control.",
      "• Saber cuándo se exige calificación del soldador y qué registros hay que guardar."
    ],
    ideaClave: "el estándar no es \"saber soldar\", es \"soldar según el procedimiento y poder demostrarlo\".",
    imageSeed: "learning-outcomes"
  },
  3: {
    id: 3,
    sectionId: 2,
    sectionTitle: "2. Cuándo aplica el procedimiento",
    title: "Objetivo del procedimiento",
    content: [
      "El procedimiento fija la metodología aceptada por Metrogas, en seguridad y calidad, para ejecutar trabajos de soldadura fuerte en cañerías de cobre. En la práctica funciona como el estándar común: todos —personal propio y contratistas— ejecutan de la misma forma."
    ],
    ideaClave: "el procedimiento es el estándar de referencia; no es opcional ni queda al criterio de cada uno.",
    imageSeed: "procedure-objective"
  },
  4: {
    id: 4,
    sectionId: 2,
    sectionTitle: "2. Cuándo aplica el procedimiento",
    title: "Dónde aplica",
    content: [
      "El procedimiento aplica a todas las soldaduras fuertes realizadas en cañerías de cobre que operen con presiones de hasta 1,4 bar.",
      "Debe aplicarlo tanto el personal propio de Metrogas como los contratistas y subcontratistas que cuenten con su acreditación para este tipo de trabajo."
    ],
    ideaClave: "si el trabajo es soldadura fuerte en cobre hasta 1,4 bar, este procedimiento se aplica siempre.",
    imageSeed: "technical-scope"
  },
  5: {
    id: 5,
    sectionId: 2,
    sectionTitle: "2. Cuándo aplica el procedimiento",
    title: "Qué queda fuera del alcance",
    content: [
      "Queda fuera del alcance de este procedimiento la siguiente situación:",
      "• Uniones de tapones para arranques de futuros artefactos: en ese caso se usa tapatornillo o soldadura estaño-plomo para facilitar la conexión posterior del nuevo artefacto."
    ],
    ideaClave: "no toda unión en cobre se resuelve con soldadura fuerte; primero verifica si el caso está cubierto por el procedimiento.",
    imageSeed: "excluded-cases"
  },
  6: {
    id: 6,
    sectionId: 3,
    sectionTitle: "3. Quién es responsable",
    title: "Responsables de aplicar el procedimiento",
    content: [
      "Son responsables de aplicarlo todas las personas que ejecutan las actividades descritas en él —personal propio de Metrogas y personal de contratistas o subcontratistas—, siempre que cuenten con su acreditación.",
      "Esto implica responsabilidad directa sobre conocer el procedimiento, cumplirlo en terreno, ejecutar bien la técnica y respetar las medidas de seguridad y control."
    ],
    ideaClave: "el que ejecuta responde por hacerlo según el procedimiento, no según su costumbre.",
    imageSeed: "responsibilities"
  },
  7: {
    id: 7,
    sectionId: 3,
    sectionTitle: "3. Quién es responsable",
    title: "Responsabilidad del contratista",
    content: [
      "El contratista debe velar por que el procedimiento se aplique entre sus colaboradores y adoptar las medidas necesarias para su implementación y cumplimiento. Además, debe capacitar a su costo a sus trabajadores y a sus subcontratistas cuando corresponda.",
      "Un punto que no admite confusión: que haya personal de Metrogas presente en el lugar no exime al contratista de su responsabilidad."
    ],
    ideaClave: "la responsabilidad del contratista sobre su gente no se traspasa por el solo hecho de que Metrogas esté mirando.",
    imageSeed: "contractor-resp"
  },
  8: {
    id: 8,
    sectionId: 3,
    sectionTitle: "3. Quién es responsable",
    title: "Control en terreno",
    content: [
      "En términos operativos, el procedimiento distribuye el control así:",
      "• El ejecutante (personal propio de Metrogas o de contratistas y subcontratistas acreditados) cumple y ejecuta correctamente el procedimiento.",
      "• El contratista vela por su aplicación y adopta las medidas de control necesarias en terreno, sin que la presencia de Metrogas lo exima.",
      "• El encargado de seguridad de la empresa que ejecuta los trabajos controla la inspección y mantención de los equipos.",
      "Y en toda actividad, en todo momento, debe velarse por el cumplimiento de los cinco principios básicos de Seguridad y Salud."
    ],
    ideaClave: "cada quien tiene su parte del control: el que suelda, el contratista y el encargado de seguridad.",
    imageSeed: "field-control"
  },
  9: {
    id: 9,
    sectionId: 4,
    sectionTitle: "4. Marco normativo y lenguaje técnico",
    title: "En qué se respalda el procedimiento",
    content: [
      "Las actividades deben ejecutarse conforme a la legislación, reglamentación y normas técnicas vigentes. El procedimiento cita, entre otras:",
      "• NCh 1466.Of78: \"Prevención de riesgo en los trabajos de corte y soldaduras con gas – Aspectos Generales\".",
      "• Norma ASME B31.8, edición 2007.",
      "• Norma ASME BPVC-IX 2001.",
      "• \"Instalaciones de Gas Natural\", Procobre, 2004.",
      "• DS N° 298/2005, Reglamento para la certificación de productos eléctricos y combustibles.",
      "• PE.00039.GN-SP.CL, Trabajos en altura.",
      "• PE.00101.GN-SP.CL, Trabajo en espacios confinados.",
      "• \"Bases técnicas para la aplicación del sistema de gestión preventivo para contratistas y subcontratistas (Ley N° 20.123)\" y \"Reglamento especial de prevención de riesgos para contratistas y subcontratistas\"."
    ],
    ideaClave: "la soldadura fuerte no es un oficio libre; es una actividad regulada con respaldo normativo.",
    imageSeed: "norms"
  },
  10: {
    id: 10,
    sectionId: 4,
    sectionTitle: "4. Marco normativo y lenguaje técnico",
    title: "Definiciones que debes manejar",
    content: [
      "El procedimiento, para sus propios efectos, define expresamente tres conceptos:",
      "• AST (Análisis de Seguridad en el Trabajo): antes de iniciar la tarea, se identifican los peligros y se definen las medidas de control para ejecutarla de forma segura.",
      "• EPP (Equipo de Protección Personal): los elementos que el trabajador usa para protegerse de los riesgos de la actividad; deben mantenerse en buen estado y libres de grasas, aceites u otros materiales combustibles.",
      "• IDS (Inspecciones Documentadas de Seguridad): el registro formal de las verificaciones de seguridad; a la IDS se adjuntan, entre otros, el checklist diario del operador y la copia de la inspección periódica de los equipos."
    ],
    ideaClave: "AST, EPP e IDS son el lenguaje del procedimiento; se usan para exigir cumplimiento, así que hay que manejarlos.",
    imageSeed: "definitions"
  },
  11: {
    id: 11,
    sectionId: 5,
    sectionTitle: "5. Seguridad y salud: la base de todo",
    title: "Principio general de seguridad",
    content: [
      "En todas las actividades y en todo momento debe velarse por el cumplimiento de los cinco principios básicos de Seguridad y Salud. El procedimiento se aplica conforme a la NCh 1466.Of78, cuyos artículos sobre control de riesgos, EPP, ventilación, manipulación de cilindros y señalización son de implementación obligatoria. En trabajos fuera de taller se adoptan además las medidas del punto 7.1 de esa norma."
    ],
    ideaClave: "la seguridad no es una etapa aparte; es parte de la ejecución, de principio a fin.",
    imageSeed: "safety-principle"
  },
  12: {
    id: 12,
    sectionId: 5,
    sectionTitle: "5. Seguridad y salud: la base de todo",
    title: "EPP obligatorio",
    content: [
      "Los elementos de protección personal deben mantenerse en buenas condiciones y libres de grasas, aceites u otros materiales combustibles, y deben usarse siempre, sin importar lo corto o simple que parezca el trabajo. Los elementos indicados son:",
      "• Guantes de cuero de puño largo.",
      "• Anteojos oscuros filtrantes.",
      "• Delantal de cuero o, cuando sea necesario, chaqueta de cuero de manga larga.",
      "• Polainas de cuero cuando sea necesario.",
      "• Botín o bota de seguridad.",
      "• Gorro de género, casco de seguridad u otro elemento protector según los riesgos presentes.",
      "Cuando en espacios confinados no sea posible una adecuada renovación de aire, el soldador debe usar máscara de aire independiente del medio ambiente y aplicar el procedimiento de trabajo en espacios confinados. En trabajos en altura, aplica el procedimiento de altura (PE.00039)."
    ],
    ideaClave: "el EPP se usa siempre y completo; \"es un trabajo corto\" no es excusa para no ponérselo.",
    imageSeed: "ppe"
  },
  13: {
    id: 13,
    sectionId: 5,
    sectionTitle: "5. Seguridad y salud: la base de todo",
    title: "Condiciones del entorno antes de encender",
    content: [
      "Antes de encender el soplete, verifica el entorno:",
      "• Que no haya líquidos inflamables, vapores, gases explosivos ni materiales combustibles cercanos.",
      "• Que los pisos combustibles estén cubiertos con lámina metálica, arena u otro material idóneo (se prohíbe asbesto e Internit).",
      "• Que haya ventilación adecuada y señalización preventiva.",
      "• Especial cuidado con el goteo de soldadura caliente.",
      "• Resguardo reforzado al soldar cerca del medidor, para que la temperatura no dañe el empalme existente."
    ],
    ideaClave: "no se enciende el soplete hasta confirmar que el entorno tolera el calor y el trabajo; cerca del medidor, doble cuidado.",
    imageSeed: "environment"
  },
  14: {
    id: 14,
    sectionId: 5,
    sectionTitle: "5. Seguridad y salud: la base de todo",
    title: "Humos, ventilación y protección respiratoria",
    content: [
      "Los materiales de aporte y los fundentes, al sobrecalentarse, generan humos que pueden ser perjudiciales para la salud, sobre todo por recubrimientos, tintas, cadmio y fluoruros. Por eso:",
      "• Trabaja en áreas bien ventiladas y evita inhalar los humos.",
      "• Usa ventiladores para sacar las emanaciones del lugar, o máscara de aire independiente si no puedes asegurar renovación de aire.",
      "• Limpia bien los metales base: un contaminante desconocido puede descomponer rápido el fundente y aumentar las emanaciones.",
      "• Usa fundente suficiente y calienta el metal base de forma profusa y uniforme, no el metal de aporte.",
      "• Con aportes que contengan cadmio, extrema el cuidado y respeta la Ficha de Datos de Seguridad y la etiqueta de advertencia."
    ],
    ideaClave: "el humo de la soldadura no es inofensivo; ventila, no lo respires y no sobrecalientes el fundente.",
    imageSeed: "ventilation"
  },
  15: {
    id: 15,
    sectionId: 5,
    sectionTitle: "5. Seguridad y salud: la base de todo",
    title: "Manejo y almacenamiento de cilindros",
    content: [
      "El control del equipo parte antes del punto de soldadura:",
      "• Almacena los cilindros en lugares secos y bien ventilados.",
      "• Mantén separados los de oxígeno de los de gases combustibles (con tabiques, mallas o 1 a 1,5 m de distancia).",
      "• Separa los llenos de los vacíos y mantén siempre las válvulas cerradas.",
      "• No los apoyes en superficies que puedan formar parte de circuitos eléctricos.",
      "• En el traslado, fíjalos bien para evitar golpes o daños (NCh 1466, capítulo 10).",
      "• Compra o reemplaza cilindros con carga solo en empresas autorizadas: no se permite el rellenado."
    ],
    ideaClave: "oxígeno y combustible siempre separados, válvulas cerradas y nada de rellenar cilindros.",
    imageSeed: "cylinders"
  },
  16: {
    id: 16,
    sectionId: 6,
    sectionTitle: "6. Equipos, materiales e insumos",
    title: "Herramientas y equipos",
    content: [
      "Como parte del equipamiento, el procedimiento señala:",
      "• Herramientas de gasfitería (cortatubos, lija, etc.).",
      "• Soplete simple a GLP o equipo con mezcla oxígeno–propano.",
      "• En toda configuración que use oxígeno, sistema antirretroceso de llamas adicional al del propio equipo, en ambas líneas (oxígeno y combustible).",
      "• Varillas de aportación de cobre-fosfórica o con aleación de plata.",
      "• Extintor portátil de 10 kg tipo ABC.",
      "• Todo el equipamiento limpio y en buen estado."
    ],
    ideaClave: "no basta con \"tener\" el equipo; debe estar certificado, limpio, completo y con el antirretroceso cuando se usa oxígeno.",
    imageSeed: "tools"
  },
  17: {
    id: 17,
    sectionId: 6,
    sectionTitle: "6. Equipos, materiales e insumos",
    title: "Material de aporte: cómo elegirlo según el trabajo",
    content: [
      "El material de aporte se elige según el tipo de trabajo, no por costumbre:",
      "• Redes interiores en baja presión: material sin porcentaje de plata específico, pero con temperatura de fusión superior a 450 °C.",
      "• Redes interiores de cobre en media presión, hasta 1,4 bar: material con 15% de plata.",
      "• Matrices interiores de cobre en media o baja presión, hasta 1,4 bar: material con 15% de plata.",
      "• Extensión de empalmes en 3,8 bar: se rige por otro procedimiento específico (PGO-GI-SI-004), no por este."
    ],
    ideaClave: "el porcentaje de plata depende del tipo de red y de la presión; elegir mal el aporte es un error de fondo.",
    imageSeed: "filler-material"
  },
  18: {
    id: 18,
    sectionId: 6,
    sectionTitle: "6. Equipos, materiales e insumos",
    title: "Certificación, mangueras y mantención",
    content: [
      "Todos los equipos de soldadura deben contar con certificación de seguridad conforme al Decreto 298. El procedimiento menciona expresamente: soplete a GLP; soplete para mezcla GLP y oxígeno; reguladores de GLP para cilindros de 5, 10 o 15 kg y de 45 kg; regulador para cilindros de oxígeno; arrestallamas; y mangueras con abrazaderas de compresión de fábrica (no se admiten abrazaderas atornilladas).",
      "Sobre la mantención:",
      "• Los equipos se inspeccionan una vez al mes en dependencias de la empresa, llenando el checklist del Anexo 2, bajo control del encargado de seguridad, con copia a la IDS.",
      "• Las mangueras se reemplazan cada vez que se detecte un daño.",
      "• Todo equipo con un daño que afecte la seguridad se reemplaza."
    ],
    ideaClave: "equipo certificado, mangueras con abrazadera de fábrica y revisión mensual documentada; ante daño, se cambia, no se repara a la mala.",
    imageSeed: "certification"
  },
  19: {
    id: 19,
    sectionId: 7,
    sectionTitle: "7. Preparación del trabajo (checklist diario)",
    title: "El checklist de uso diario (Anexo 1)",
    content: [
      "Antes de iniciar las labores diarias, el personal de terreno verifica el Anexo 1 \"Checklist de Seguridad, uso Diario - Operador de Equipo de Soldadura con Gas\", y una copia queda adjunta a la IDS. El checklist cubre cuatro grupos: condiciones del entorno, estado del equipo, EPP según riesgos, y procedimientos previos al encendido."
    ],
    ideaClave: "el checklist diario es rutina obligatoria de partida, no un papel que se completa al final.",
    imageSeed: "checklist"
  },
  20: {
    id: 20,
    sectionId: 7,
    sectionTitle: "7. Preparación del trabajo (checklist diario)",
    title: "Revisión del entorno",
    content: [
      "Del checklist diario y del cuerpo del procedimiento, en el entorno se revisa:",
      "• Área libre de líquidos inflamables, vapores o gases explosivos.",
      "• Piso combustible protegido con lámina metálica o arena.",
      "• Señalización preventiva instalada.",
      "• Extintor ABC ≥10 kg disponible y operativo, al lado de quien suelda, antes de encender.",
      "• Condiciones de ventilación.",
      "• Zona segura de encendido."
    ],
    ideaClave: "entorno despejado, piso protegido y extintor ≥10 kg al lado antes de la primera chispa.",
    imageSeed: "environment-check"
  },
  21: {
    id: 21,
    sectionId: 7,
    sectionTitle: "7. Preparación del trabajo (checklist diario)",
    title: "Revisión del equipo",
    content: [
      "En el equipo, antes de encender, se revisa:",
      "• Mangueras sin grietas, cortes ni fugas.",
      "• Conexiones firmes y probadas con agua jabonosa.",
      "• Reguladores sin fisuras y funcionando correctamente.",
      "• Válvulas de cilindros que abren y cierran sin esfuerzo.",
      "• Arrestallamas correctamente montados.",
      "• Encendedor tipo chispero disponible (no fósforos).",
      "En equipos con oxígeno, la válvula de gas combustible se abre solo media vuelta."
    ],
    ideaClave: "un equipo que \"parece\" bueno puede tener fuga; se confirma estanqueidad e integridad antes de encender.",
    imageSeed: "equipment-check"
  },
  22: {
    id: 22,
    sectionId: 8,
    sectionTitle: "8. Preparación de la unión",
    title: "Corte a medida del tubo",
    content: [
      "La unión empieza por un buen corte. El tubo se corta perpendicular al eje con cortatubo: así se obtiene un corte limpio y a escuadra, con menos rebabas. Un tubo mal cortado aumenta la separación entre tubo y accesorio e impide la capilaridad."
    ],
    ideaClave: "corte perpendicular con cortatubo; de ahí en adelante todo depende de que el tubo entre bien.",
    imageSeed: "tube-cutting"
  },
  23: {
    id: 23,
    sectionId: 8,
    sectionTitle: "8. Preparación de la unión",
    title: "Rebabas, recalibrado y limpieza",
    content: [
      "Después del corte:",
      "• Elimina las rebabas de los extremos para que el tubo acople bien y no queden residuos que generen turbulencias.",
      "• Si el extremo quedó deformado, recalíbralo con punzón y anillo calibrador.",
      "• Limpia y desengrasa la superficie exterior del tubo y la interior del accesorio. Primero elimina aceite y grasa con disolvente desengrasante; después el óxido o el sarro con limpieza abrasiva (lija, esmeril, lima o granallado) y enjuague.",
      "Con las piezas limpias, sigue de inmediato al paso siguiente para evitar recontaminación por polvo o aceites de las manos. Nunca se admite abocardado (abocinado) del tubo para soldar por capilaridad."
    ],
    ideaClave: "superficies perfectamente limpias y a escuadra; sucio o abocinado no suelda por capilaridad.",
    imageSeed: "cleaning"
  },
  24: {
    id: 24,
    sectionId: 8,
    sectionTitle: "8. Preparación de la unión",
    title: "Por qué la preparación define la calidad",
    content: [
      "La calidad de la unión se juega antes del calor. Depende del ajuste correcto entre piezas, de la limpieza real de las superficies, de la ausencia de deformaciones y de mantener el intersticio adecuado para que opere la capilaridad. Si esto falla, el aporte no moja la unión, forma gotas o escurre por fuera sin penetrar."
    ],
    ideaClave: "la preparación no es el \"antes\" del trabajo; es la base de la estanqueidad y de la calidad final.",
    imageSeed: "quality-prep"
  },
  25: {
    id: 25,
    sectionId: 9,
    sectionTitle: "9. Aplicación del decapante",
    title: "Para qué sirve el decapante",
    content: [
      "Inmediatamente después de la limpieza, se aplica una capa fina de decapante no corrosivo sobre la superficie exterior del tubo, con pincel. El decapante protege la superficie durante el calentamiento y aumenta la penetración del material de aporte, pero no limpia: las superficies deben estar limpias antes de aplicarlo."
    ],
    ideaClave: "el decapante protege y ayuda a penetrar, no reemplaza la limpieza previa.",
    imageSeed: "flux-function"
  },
  26: {
    id: 26,
    sectionId: 9,
    sectionTitle: "9. Aplicación del decapante",
    title: "Cómo aplicarlo correctamente",
    content: [
      "• Aplica la capa fina apenas termines de limpiar, para evitar la reoxidación.",
      "• Inserta el tubo en el accesorio hasta el tope.",
      "• Gíralo a derecha e izquierda para repartir el decapante de forma uniforme.",
      "• Antes de calentar, retira el exceso de decapante con un trapo limpio o papel absorbente."
    ],
    ideaClave: "capa fina, tubo hasta el tope, girar para repartir y retirar el exceso antes de calentar.",
    imageSeed: "flux-application"
  },
  27: {
    id: 27,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Objetivo y combustible",
    content: [
      "El objetivo del calentamiento es llevar la unión a la temperatura en que el metal de aporte funde y penetra por capilaridad en el intersticio. Para ello se utiliza el soplete empleando como combustible propano; según el equipo, puede ser un soplete simple a GLP o un equipo con mezcla oxígeno–propano. Todo equipo que use oxígeno debe contar con el sistema antirretroceso de llamas en ambas líneas (oxígeno y combustible)."
    ],
    ideaClave: "el combustible es propano (GLP); si el equipo usa oxígeno, va con antirretroceso en ambas líneas.",
    imageSeed: "heating-obj"
  },
  28: {
    id: 28,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Técnica de calentamiento",
    content: [
      "Se calienta primero la cañería de cobre, no el accesorio ni el material de aporte. La llama se dirige a la cañería a unos 2 a 2,5 cm del accesorio y se mantiene en movimiento continuo, perpendicular al eje del tubo, para abarcar toda la circunferencia y evitar recalentamientos locales. Cuando el desoxidante adquiere un aspecto tranquilo y transparente, como si fuera agua, la cañería alcanzó la temperatura adecuada (≥450 °C); recién entonces la llama se dirige al accesorio, calentándolo de forma uniforme."
    ],
    ideaClave: "primero la cañería, llama en movimiento a 2–2,5 cm; el desoxidante \"como agua\" avisa que llegó a temperatura.",
    imageSeed: "heating-tech"
  },
  29: {
    id: 29,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Reconocer que la unión está lista y casos especiales",
    content: [
      "La unión está a punto cuando el desoxidante se ve tranquilo y transparente tanto en la cañería como en el accesorio. En ese momento se mueve la llama alternadamente en ambos sentidos sobre la unión, evitando siempre el sobrecalentamiento local.",
      "En cañerías de diámetros grandes, donde cuesta calentar toda la unión, se usa un soplete de varias bocas o se calienta y suelda por sectores hasta completar toda la circunferencia. Recuerda además que no se sueldan entre sí tuberías de cobre y de acero/acero inoxidable: para unir materialidades distintas se usa un elemento de transición o un accesorio de aleación de cobre."
    ],
    ideaClave: "transparente en tubo y accesorio = listo; en diámetros grandes, varias bocas o por sectores.",
    imageSeed: "ready-heating"
  },
  30: {
    id: 30,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Riesgos por calentamiento incorrecto",
    content: [
      "El calentamiento no debe ser exagerado: se corre el riesgo de quemar el cobre y dejarlo frágil y poroso, comprometiendo la unión. Y cuando hay uniones cercanas sensibles al calor —por ejemplo transiciones cobre-polietileno— primero se enfría la parte metálica intermedia envolviéndola con un paño de algodón saturado en agua; terminada la soldadura, se enfría con abundante agua hasta confirmar que la superficie de cobre quedó fría por completo."
    ],
    ideaClave: "de más también se arruina: sobrecalentar quema el cobre y daña las transiciones; protege con paño húmedo y enfría bien.",
    imageSeed: "overheating"
  },
  31: {
    id: 31,
    sectionId: 11,
    sectionTitle: "11. Aplicación de la soldadura",
    title: "Aporte por capilaridad",
    content: [
      "Apenas alcanzada la temperatura, se aplica el metal de aporte, que penetra rápidamente por capilaridad en el intersticio entre tubo y accesorio. La unión está llena cuando se forma un cordón uniforme de soldadura alrededor del tubo, en el borde del accesorio. El operario no \"empuja\" la soldadura: genera las condiciones para que la capilaridad haga el trabajo."
    ],
    ideaClave: "es la capilaridad la que llena la unión; tu trabajo es lograr la temperatura y la limpieza para que ocurra.",
    imageSeed: "capillarity"
  },
  32: {
    id: 32,
    sectionId: 11,
    sectionTitle: "11. Aplicación de la soldadura",
    title: "Secuencia correcta de aplicación",
    content: [
      "Durante el aporte:",
      "• Mantén suficientemente alta la temperatura de la unión.",
      "• Acerca el hilo o varilla al borde del accesorio.",
      "• Aparta la llama del hilo durante la aportación.",
      "• Sigue calentando tubo y accesorio con movimiento oscilante de la llama.",
      "Y aplica el aporte en esta secuencia: primero en la parte inferior de la unión, luego en las laterales y finalmente en la superior. Así el aporte cubre toda la circunferencia."
    ],
    ideaClave: "llama fuera del hilo durante el aporte y secuencia inferior → lados → superior para llenar toda la vuelta.",
    imageSeed: "brazing-sequence"
  },
  33: {
    id: 33,
    sectionId: 11,
    sectionTitle: "11. Aplicación de la soldadura",
    title: "Precauciones durante la aplicación",
    content: [
      "Si la derivación del accesorio apunta hacia abajo, no recalientes el tubo: la aleación podría escurrir fuera del accesorio a lo largo del tubo. Si el tubo se recalienta, aleja la fuente de calor, deja solidificar la aleación y luego reanuda. Cuando la unión ya se llenó —se ve el cordón continuo alrededor de la cañería en el borde del accesorio— interrumpe el aporte: seguir agregando material no mejora la unión."
    ],
    ideaClave: "cuando aparece el cordón continuo, para; agregar de más no suma, y en derivaciones hacia abajo, no recalientes.",
    imageSeed: "brazing-precautions"
  },
  34: {
    id: 34,
    sectionId: 12,
    sectionTitle: "12. Calidad y defectos típicos",
    title: "Control de calidad",
    content: [
      "Asegúrate, por control visual, de que los intersticios queden completamente llenos. Un control más preciso se puede hacer midiendo la longitud del hilo de soldadura consumido. En terreno conviene preguntarse: ¿penetró el material o quedó superficial?, ¿hay cordón uniforme y continuo?, ¿hubo calentamiento parejo?"
    ],
    ideaClave: "la inspección visual del cordón es parte del trabajo; la unión se verifica, no se supone.",
    imageSeed: "quality-control"
  },
  35: {
    id: 35,
    sectionId: 12,
    sectionTitle: "12. Calidad y defectos típicos",
    title: "Diagnóstico de defectos",
    content: [
      "Dos señales típicas y su causa:",
      "• Si la aleación forma gotas sobre la superficie y no se reparte por los intersticios: las superficies no están desoxidadas (no dejan que la aleación las moje) o no están suficientemente calientes.",
      "• Si la aleación no penetra y escurre por la superficie exterior: falta calentamiento del elemento macho (normalmente la cañería) y/o hay recalentamiento del elemento hembra (generalmente el accesorio)."
    ],
    ideaClave: "gotas = superficie sucia o fría; escurre por fuera = faltó calor en la cañería o sobró en el accesorio.",
    imageSeed: "defects"
  },
  36: {
    id: 36,
    sectionId: 13,
    sectionTitle: "13. Enfriamiento, limpieza y cierre",
    title: "Enfriamiento y limpieza final",
    content: [
      "Las partes soldadas se pueden enfriar bruscamente con agua fría, lo que separa buena parte del polvo soldado y vitrificado. Cuando la unión ya está fría, se limpia la zona para eliminar los restos de decapante. Esta limpieza no es estética: deja ver la calidad de la unión y evita residuos indeseados."
    ],
    ideaClave: "enfriar con agua y limpiar el decapante es parte del cierre técnico, no un adorno.",
    imageSeed: "cleaning-final"
  },
  37: {
    id: 37,
    sectionId: 13,
    sectionTitle: "13. Enfriamiento, limpieza y cierre",
    title: "Cierre seguro del trabajo",
    content: [
      "Terminado el trabajo:",
      "• Repón de inmediato los elementos de control de riesgo que se hayan retirado.",
      "• Verifica que no quede material en ignición.",
      "• Deja el sitio limpio y ordenado.",
      "• Devuelve el equipo al lugar que corresponde."
    ],
    ideaClave: "el trabajo termina cuando la zona queda segura, limpia y sin fuentes de riesgo, no cuando se apaga el soplete.",
    imageSeed: "safe-closing"
  },
  38: {
    id: 38,
    sectionId: 14,
    sectionTitle: "14. Calificación del soldador y registros",
    title: "Calificación en matriz interior",
    content: [
      "Para soldaduras en tramos de matriz interior, el soldador debe estar calificado conforme a la norma ASME B31.8 (2007), apéndice G, punto g; alternativamente, puede calificarse con la norma ASME BPVC-IX. Para mantener la calificación, debe demostrar que no ha dejado de realizar soldadura fuerte por un período mayor a 6 meses; si no puede demostrarlo, debe recalificarse."
    ],
    ideaClave: "en matriz interior se exige soldador calificado, y la calificación se pierde si pasan más de 6 meses sin soldar.",
    imageSeed: "qualification"
  },
  39: {
    id: 39,
    sectionId: 14,
    sectionTitle: "14. Calificación del soldador y registros",
    title: "Procedimiento calificado en centrales térmicas",
    content: [
      "Para soldaduras en tramos de red interior en proyectos de centrales térmicas, se exige contar con un procedimiento calificado conforme a la norma ASME BPVC-IX 2001 o posterior. Es decir, en ese contexto no basta con calificar al soldador: también se exige validar formalmente el procedimiento de soldadura."
    ],
    ideaClave: "en centrales térmicas, además del soldador, el procedimiento mismo debe estar calificado.",
    imageSeed: "qualification-thermal"
  },
  40: {
    id: 40,
    sectionId: 14,
    sectionTitle: "14. Calificación del soldador y registros",
    title: "Registros y trazabilidad",
    content: [
      "Según el tipo de trabajo, hay que mantener documentación:",
      "• Soldaduras en matriz interior: calificación del soldador.",
      "• Soldaduras en red interior de central térmica: procedimiento calificado y registro que indique el nombre del soldador.",
      "Además, mensualmente se completa el \"Checklist de Inspección Periódica de Equipos de Soldadura con Gas\" (Anexo 2), como parte del control del trabajo."
    ],
    ideaClave: "ejecutar bien no basta: hay que poder demostrarlo con la calificación, el nombre del soldador y el checklist mensual.",
    imageSeed: "records"
  },
  41: {
    id: 41,
    sectionId: 14,
    sectionTitle: "14. Calificación del soldador y registros",
    title: "Los anexos como herramienta de control",
    content: [
      "Los anexos no son papeleo: son herramientas de control preventivo.",
      "• Anexo 1 – Checklist diario del operador: verifica las condiciones mínimas antes de iniciar cada jornada.",
      "• Anexo 2 – Checklist periódico de equipos: controla la integridad y la mantención del sistema de soldadura a gas."
    ],
    ideaClave: "el checklist diario y el mensual son evidencia de que el trabajo se hizo en condiciones seguras.",
    imageSeed: "annex-use"
  },
  42: {
    id: 42,
    sectionId: 15,
    sectionTitle: "15. Cierre del curso",
    title: "Mensajes críticos que hay que retener",
    content: [
      "1. La soldadura fuerte es una actividad regulada, no una práctica libre de taller.",
      "2. Aplica a cañerías de cobre hasta 1,4 bar, para personal propio y contratistas acreditados.",
      "3. La seguridad empieza antes de encender: entorno, EPP, ventilación, equipos y cilindros.",
      "4. La preparación de la unión —corte, limpieza, ajuste— define la calidad final.",
      "5. Se calienta la cañería primero; el desoxidante \"como agua\" marca los ≥450 °C.",
      "6. El combustible es propano; con oxígeno, siempre antirretroceso en ambas líneas.",
      "7. La capilaridad llena la unión; la secuencia es inferior, lados y superior.",
      "8. La calidad se verifica en el cordón; gotas o escurrimiento avisan qué falló.",
      "9. El trabajo cierra con zona segura, limpia y con los registros completos.",
      "10. Cuando corresponde, la calificación del soldador y la trazabilidad son exigencias formales."
    ],
    ideaClave: "si retienes estos diez puntos, tienes el criterio para ejecutar según el procedimiento.",
    imageSeed: "key-messages"
  }
};
