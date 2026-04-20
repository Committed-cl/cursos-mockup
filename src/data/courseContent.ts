export interface SlideContent {
  id: number;
  sectionId: number;
  sectionTitle: string;
  title: string;
  content: string[];
  important?: string;
  imageSeed?: string;
}

export const COURSE_SECTIONS = [
  {
    id: 1,
    title: "1. Apertura y Propósito",
    slides: [1, 2]
  },
  {
    id: 2,
    title: "2. Alcance y Límites",
    slides: [3, 4, 5]
  },
  {
    id: 3,
    title: "3. Responsabilidades",
    slides: [6, 7, 8]
  },
  {
    id: 4,
    title: "4. Marco Normativo",
    slides: [9, 10]
  },
  {
    id: 5,
    title: "5. Seguridad y Salud",
    slides: [11, 12, 13, 14, 15],
    quizId: 'sec-5'
  },
  {
    id: 6,
    title: "6. Equipos e Insumos",
    slides: [16, 17, 18]
  },
  {
    id: 7,
    title: "7. Preparación del Trabajo",
    slides: [19, 20, 21]
  },
  {
    id: 8,
    title: "8. Preparación de la Unión",
    slides: [22, 23, 24],
    quizId: 'sec-8'
  },
  {
    id: 9,
    title: "9. Aplicación del Decapante",
    slides: [25, 26]
  },
  {
    id: 10,
    title: "10. Calentamiento",
    slides: [27, 28, 29, 30],
    quizId: 'sec-10'
  },
  {
    id: 11,
    title: "11. Aplicación de la Soldadura",
    slides: [31, 32, 33]
  },
  {
    id: 12,
    title: "12. Control de Calidad",
    slides: [34, 35],
    quizId: 'sec-12'
  },
  {
    id: 13,
    title: "13. Enfriamiento y Cierre",
    slides: [36, 37]
  },
  {
    id: 14,
    title: "14. Calificación del Soldador",
    slides: [38, 39]
  },
  {
    id: 15,
    title: "15. Registros y Trazabilidad",
    slides: [40, 41]
  },
  {
    id: 16,
    title: "16. Cierre Técnico",
    slides: [42, 43]
  }
];

export const SLIDES: Record<number, SlideContent> = {
  1: {
    id: 1,
    sectionId: 1,
    sectionTitle: "1. Apertura y Propósito",
    title: "Título y propósito del curso",
    content: [
      "Esta capacitación tiene por finalidad entregar al personal técnico los criterios operativos, de seguridad, calidad y control documental exigidos para ejecutar trabajos de soldadura fuerte en tuberías de cobre conforme al procedimiento PRC-MG-026, versión 43.",
      "El foco no es solo explicar cómo se realiza una unión soldada, sino asegurar que cada trabajador comprenda:",
      "• Cuándo aplica este procedimiento.",
      "• Qué exigencias de seguridad deben cumplirse antes de iniciar.",
      "• Cómo preparar correctamente la unión.",
      "• Cómo ejecutar el calentamiento y el aporte sin generar defectos.",
      "• Cómo verificar la calidad del trabajo realizado.",
      "• Qué documentación y evidencias deben quedar registradas."
    ],
    important: "La lógica de fondo es que una soldadura técnicamente aceptable depende de la correcta combinación entre preparación, control de riesgos, selección de materiales, ejecución disciplinada y trazabilidad.",
    imageSeed: "training-purpose"
  },
  2: {
    id: 2,
    sectionId: 1,
    sectionTitle: "1. Apertura y Propósito",
    title: "Resultado esperado de la capacitación",
    content: [
      "Al término de esta capacitación, cada participante debe ser capaz de:",
      "• Identificar el alcance y los límites del procedimiento.",
      "• Reconocer las responsabilidades individuales y del contratista.",
      "• Aplicar las condiciones de seguridad exigidas antes, durante y después del trabajo.",
      "• Seleccionar y revisar correctamente equipos, materiales e insumos.",
      "• Ejecutar el proceso de soldadura fuerte de manera ordenada y técnicamente correcta.",
      "• Utilizar los checklists diarios y periódicos como herramientas reales de control.",
      "• Comprender cuándo se exige calificación de soldador."
    ],
    important: "El estándar esperado no es solo 'conocer el procedimiento', sino poder aplicarlo en terreno con criterio, consistencia y trazabilidad.",
    imageSeed: "learning-outcomes"
  },
  3: {
    id: 3,
    sectionId: 2,
    sectionTitle: "2. Alcance y Límites",
    title: "Objetivo del procedimiento",
    content: [
      "El procedimiento establece la metodología aceptada por Metrogas en materia de seguridad y calidad para realizar trabajos de soldadura fuerte en tuberías de cobre.",
      "Esto significa que el documento define:",
      "• El marco técnico mínimo para ejecutar la actividad.",
      "• Las condiciones de seguridad obligatorias.",
      "• La secuencia operativa recomendada.",
      "• Los criterios de control de calidad.",
      "• Las exigencias de documentación y verificación asociadas al proceso."
    ],
    important: "En la práctica, el procedimiento opera como estándar de referencia para asegurar uniformidad de ejecución entre personal propio y contratistas.",
    imageSeed: "procedure-objective"
  },
  4: {
    id: 4,
    sectionId: 2,
    sectionTitle: "2. Alcance y Límites",
    title: "Alcance técnico de aplicación",
    content: [
      "El procedimiento aplica a todas las soldaduras fuertes realizadas en cañerías de cobre que operen con presiones de hasta 1,4 bar.",
      "Además, debe ser aplicado por:",
      "• Personal propio de Metrogas.",
      "• Contratistas o subcontratistas que cuenten con la acreditación correspondiente para este tipo de trabajo."
    ],
    important: "La aplicación del procedimiento no queda entregada a criterio del ejecutante. Si la actividad corresponde al alcance definido, el procedimiento debe aplicarse.",
    imageSeed: "technical-scope"
  },
  5: {
    id: 5,
    sectionId: 2,
    sectionTitle: "2. Alcance y Límites",
    title: "Casos excluidos del alcance",
    content: [
      "Quedan fuera del alcance algunas situaciones específicas:",
      "• Uniones de tapones para arranques de futuros artefactos, donde se utiliza soldadura estaño-plomo.",
      "• Situaciones aledañas a uniones de estaño donde no sea factible controlar el incremento de temperatura."
    ],
    important: "No toda unión en cobre debe resolverse automáticamente con soldadura fuerte. Primero debe verificarse si el caso está cubierto por el procedimiento.",
    imageSeed: "excluded-cases"
  },
  6: {
    id: 6,
    sectionId: 3,
    sectionTitle: "3. Responsabilidades",
    title: "Responsabilidades de aplicación",
    content: [
      "Son responsables de aplicar el procedimiento todas las personas que ejecuten las actividades descritas en él.",
      "Esto implica responsabilidad directa sobre:",
      "• Conocimiento del procedimiento.",
      "• Cumplimiento efectivo en terreno.",
      "• Correcta ejecución técnica.",
      "• Observancia de las medidas de seguridad y control definidas."
    ],
    important: "El procedimiento no debe entenderse como material de consulta optativa, sino como estándar operativo exigible.",
    imageSeed: "responsibilities"
  },
  7: {
    id: 7,
    sectionId: 3,
    sectionTitle: "3. Responsabilidades",
    title: "Responsabilidad del contratista",
    content: [
      "El contratista debe velar por la aplicación del procedimiento brindando las facilidades y supervisión necesarias.",
      "Además, debe realizar a su costo las capacitaciones necesarias para sus trabajadores y subcontratistas.",
      "La presencia de personal de Metrogas en el lugar no exime al contratista de su responsabilidad."
    ],
    important: "La capacitación no reemplaza el deber de control de la jefatura; lo refuerza.",
    imageSeed: "contractor-resp"
  },
  8: {
    id: 8,
    sectionId: 3,
    sectionTitle: "3. Responsabilidades",
    title: "Rol de control en terreno",
    content: [
      "• El contratista tiene responsabilidad de cumplimiento directo.",
      "• El GIO es el encargado de exigir el cumplimiento en terreno.",
      "• Todo personal interno de Metrogas que realice soldaduras también debe cumplirlo.",
      "Esto instala una lógica de control cruzado: el ejecutante cumple, el supervisor verifica y la organización sostiene condiciones seguras."
    ],
    imageSeed: "field-control"
  },
  9: {
    id: 9,
    sectionId: 4,
    sectionTitle: "4. Marco Normativo",
    title: "Referencias normativas clave",
    content: [
      "Las actividades deben ejecutarse conforme a:",
      "• DS N°66/2007 sobre instalaciones interiores y medidores de gas.",
      "• DS N°20/2008, que modifica el DS N°66.",
      "• NCh 1466.Of78 sobre prevención de riesgos en trabajos de corte y soldadura.",
      "• ASME B31.8 y ASME BPVC-IX."
    ],
    important: "La soldadura fuerte no es solo una práctica de oficio; es una actividad regulada por marcos legales y técnicos estrictos.",
    imageSeed: "norms"
  },
  10: {
    id: 10,
    sectionId: 4,
    sectionTitle: "4. Marco Normativo",
    title: "Definiciones que el equipo debe dominar",
    content: [
      "• Soldadura fuerte: Punto de fusión del metal de aporte es al menos 450 °C.",
      "• AST: Análisis de seguridad en el trabajo.",
      "• Red interior de gas: Tuberías desde la salida de medición hasta artefactos.",
      "• Matriz interior: Tramo de empalme múltiple hacia arranques de medidores.",
      "• EPP: Equipo de protección personal.",
      "• IDS: Inspecciones documentadas de seguridad."
    ],
    imageSeed: "definitions"
  },
  11: {
    id: 11,
    sectionId: 5,
    sectionTitle: "5. Seguridad y Salud",
    title: "Principio general de seguridad",
    content: [
      "Debe velarse por el cumplimiento de los principios básicos de Seguridad y Salud en todo momento.",
      "• No iniciar trabajos si no están dadas las condiciones de seguridad.",
      "• No improvisar frente a riesgos previsibles.",
      "• No separar la técnica de la prevención.",
      "• No tratar la revisión como un mero trámite documental."
    ],
    important: "La seguridad debe formar parte de la ejecución misma y no ser una etapa paralela o secundaria.",
    imageSeed: "safety-principle"
  },
  12: {
    id: 12,
    sectionId: 5,
    sectionTitle: "5. Seguridad y Salud",
    title: "EPP exigido para la actividad",
    content: [
      "Los elementos de protección deben estar limpios y libres de grasas o aceites:",
      "• Ropa gruesa y guantes de cuero de puño largo.",
      "• Anteojos oscuros filtrantes.",
      "• Delantal de cuero y polainas (cuando sea necesario).",
      "• Botín de seguridad y casco (según riesgos presentes).",
      "• Máscara de aire en espacios confinados sin ventilación adecuada."
    ],
    imageSeed: "ppe"
  },
  13: {
    id: 13,
    sectionId: 5,
    sectionTitle: "5. Seguridad y Salud",
    title: "Condiciones del entorno antes de iniciar",
    content: [
      "Antes de iniciar debe verificarse:",
      "• Ausencia de gases explosivos o materiales combustibles cercanos.",
      "• Protección de pisos combustibles con láminas metálicas o arena.",
      "• Disponibilidad de ventilación adecuada.",
      "• Presencia de señalización preventiva y extintor.",
      "• Resguardo especial cerca del medidor o zonas sensibles al calor."
    ],
    important: "Esta etapa requiere especial cuidado porque la fuente térmica puede afectar elementos adyacentes o generar ignición.",
    imageSeed: "environment"
  },
  14: {
    id: 14,
    sectionId: 5,
    sectionTitle: "5. Seguridad y Salud",
    title: "Ventilación, humos y protección respiratoria",
    content: [
      "Los materiales de aporte y fundentes pueden producir humos perjudiciales al sobrecalentarse.",
      "• Realizar el proceso en áreas bien ventiladas.",
      "• Evitar la inhalación de humos.",
      "• Atención especial a recubrimientos que contengan cadmio o fluoruros.",
      "• Usar ventiladores o máscara de aire si la renovación no es posible."
    ],
    important: "Muchas fallas de seguridad surgen por subestimar el riesgo respiratorio frente a un trabajo aparentemente rutinario.",
    imageSeed: "ventilation"
  },
  15: {
    id: 15,
    sectionId: 5,
    sectionTitle: "5. Seguridad y Salud",
    title: "Cilindros: almacenamiento y traslado seguro",
    content: [
      "• Almacenar en lugares secos, ventilados y con válvulas cerradas.",
      "• Mantener separados cilindros de oxígeno de los gases combustibles.",
      "• Separar cilindros llenos de los vacíos.",
      "• Durante el traslado, fijarlos para evitar golpes.",
      "• Comprarlos o reemplazarlos solo en empresas autorizadas."
    ],
    important: "El control del equipo comienza desde el transporte y almacenamiento, no solo en el punto de soldadura.",
    imageSeed: "cylinders"
  },
  16: {
    id: 16,
    sectionId: 6,
    sectionTitle: "6. Equipos e Insumos",
    title: "Herramientas y equipos requeridos",
    content: [
      "• Herramientas de gasfitería: cortatubos, lija, etc.",
      "• Soplete GLP o equipo con oxígeno-propano.",
      "• Sistema antirretroceso de llamas obligatorio para equipos con oxígeno.",
      "• Varillas de plata o cobre-fosfóricas.",
      "• Extintor portátil tipo ABC.",
      "• Equipamiento general limpio y en buen estado."
    ],
    important: "El estándar no es solo 'tener herramientas', sino tenerlas adecuadas, certificadas y seguras.",
    imageSeed: "tools"
  },
  17: {
    id: 17,
    sectionId: 6,
    sectionTitle: "6. Equipos e Insumos",
    title: "Material de aporte y criterio de selección",
    content: [
      "• Redes interiores baja presión: Material sin % específico de plata (fusión > 450°C).",
      "• Redes interiores media presión (hasta 1,4 bar): 15% de plata.",
      "• Matrices interiores: 15% de plata.",
      "La selección del material es un criterio técnico, no una decisión improvisada."
    ],
    imageSeed: "filler-material"
  },
  18: {
    id: 18,
    sectionId: 6,
    sectionTitle: "6. Equipos e Insumos",
    title: "Certificación y mantención de equipos",
    content: [
      "• Todos los equipos deben contar con certificación conforme al Decreto 298.",
      "• Mangueras con abrazaderas de compresión de fábrica (no atornilladas).",
      "• Inspección mensual obligatoria de equipos.",
      "• Reemplazo inmediato de mangueras o equipos con daño detectado."
    ],
    imageSeed: "certification"
  },
  19: {
    id: 19,
    sectionId: 7,
    sectionTitle: "7. Preparación del Trabajo",
    title: "Checklist previo de uso diario",
    content: [
      "Antes de iniciar labores, se debe verificar el Anexo 1 del procedimiento.",
      "El checklist considera cuatro grupos:",
      "1. Condiciones del entorno.",
      "2. Estado del equipo.",
      "3. EPP según riesgos.",
      "4. Procedimientos previos al encendido.",
      "Copia del checklist debe quedar adjunta a la IDS."
    ],
    important: "Debe enseñarse como una rutina obligatoria de preparación, no como un documento a completar al final.",
    imageSeed: "checklist"
  },
  20: {
    id: 20,
    sectionId: 7,
    sectionTitle: "7. Preparación del Trabajo",
    title: "Qué revisar en el entorno antes de encender",
    content: [
      "• Área libre de líquidos o vapores inflamables.",
      "• Protección de piso combustible.",
      "• Extintor operativo disponible.",
      "• Zona segura para el encendido.",
      "• Cuidado especial cerca de medidores u otros componentes existentes."
    ],
    important: "No se enciende el soplete hasta verificar que el entorno tolera térmica y operacionalmente la actividad.",
    imageSeed: "environment-check"
  },
  21: {
    id: 21,
    sectionId: 7,
    sectionTitle: "7. Preparación del Trabajo",
    title: "Qué revisar en el equipo antes de encender",
    content: [
      "• Mangueras sin grietas ni fugas.",
      "• Conexiones probadas con agua jabonosa.",
      "• Reguladores y válvulas funcionando correctamente.",
      "• Arrestallamas correctamente montados.",
      "• Chispero disponible (no usar fósforos)."
    ],
    important: "Un equipo aparentemente operativo puede ser inseguro si no se confirma su estanqueidad y condición funcional.",
    imageSeed: "equipment-check"
  },
  22: {
    id: 22,
    sectionId: 8,
    sectionTitle: "8. Preparación de la Unión",
    title: "Paso 1: corte correcto del tubo",
    content: [
      "El corte debe realizarse perpendicularmente mediante cortatubo.",
      "• Obtener un corte limpio y a escuadra.",
      "• Reducir rebabas.",
      "• Favorecer una capilaridad adecuada.",
      "Un mal corte afecta la geometría y puede impedir el ingreso del material de aporte."
    ],
    imageSeed: "tube-cutting"
  },
  23: {
    id: 23,
    sectionId: 8,
    sectionTitle: "8. Preparación de la Unión",
    title: "Paso 2: rebabas, recalibrado y limpieza",
    content: [
      "• Eliminar rebabas en los extremos.",
      "• Recalibrar el tubo si presenta deformaciones.",
      "• Limpiar y desengrasar superficie exterior del tubo e interior del accesorio.",
      "La limpieza incluye eliminación de aceite (disolvente) y óxido (limpieza abrasiva).",
      "El procedimiento prohíbe el abocardado para soldar por capilaridad."
    ],
    imageSeed: "cleaning"
  },
  24: {
    id: 24,
    sectionId: 8,
    sectionTitle: "8. Preparación de la Unión",
    title: "Por qué la preparación determina la calidad",
    content: [
      "La calidad depende primero de:",
      "• Ajuste correcto entre piezas.",
      "• Limpieza real de las superficies.",
      "• Ausencia de deformaciones.",
      "• Mantención del intersticio para la capilaridad.",
      "Si las superficies no están preparadas, el material puede no mojar la unión."
    ],
    important: "La etapa de preparación no es un preámbulo, es la base de la estanqueidad y calidad final.",
    imageSeed: "quality-prep"
  },
  25: {
    id: 25,
    sectionId: 9,
    sectionTitle: "9. Aplicación del Decapante",
    title: "Función del decapante",
    content: [
      "Se debe aplicar una fina capa de decapante no corrosivo sobre el tubo mediante pincel.",
      "• Proteger la superficie metálica durante el calentamiento.",
      "• Aumentar la penetración del material de aporte.",
      "• Favorecer la capilaridad.",
      "El decapante no tiene por misión limpiar; las piezas deben estar limpias antes."
    ],
    imageSeed: "flux-function"
  },
  26: {
    id: 26,
    sectionId: 9,
    sectionTitle: "9. Aplicación del Decapante",
    title: "Forma correcta de aplicación",
    content: [
      "• Insertar el tubo en el accesorio hasta el tope.",
      "• Girar el tubo para distribuir uniformemente el decapante.",
      "• Retirar el exceso con un trapo limpio antes del calentamiento.",
      "El exceso de decapante puede afectar el comportamiento térmico y la limpieza final."
    ],
    imageSeed: "flux-application"
  },
  27: {
    id: 27,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Objetivo técnico del calentamiento",
    content: [
      "Llevar la unión a la temperatura necesaria para que el metal funda y penetre por capilaridad.",
      "• Se emplea soplete con propano u oxiacetileno.",
      "• Con oxiacetileno, la llama debe ser ligeramente reductora (dardo fino azul).",
      "La temperatura adecuada se nota cuando el fundente se vuelve transparente."
    ],
    imageSeed: "heating-obj"
  },
  28: {
    id: 28,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Técnica correcta de calentamiento",
    content: [
      "• Dirigir la llama a 2 - 2,5 cm del accesorio.",
      "• Movimiento continuo y perpendicular al eje del tubo.",
      "• Abarcar toda la circunferencia.",
      "• Evitar recalentamientos localizados para lograr distribución uniforme."
    ],
    imageSeed: "heating-tech"
  },
  29: {
    id: 29,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Cómo reconocer que la unión está lista",
    content: [
      "La unión está lista cuando el desoxidante presenta aspecto transparente tanto en cañería como en accesorio.",
      "• Mover la llama alternadamente en ambos sentidos.",
      "• Evitar sobrecalentamiento local.",
      "• En diámetros grandes, puede requerirse soplete de varias bocas o soldar por sectores."
    ],
    imageSeed: "ready-heating"
  },
  30: {
    id: 30,
    sectionId: 10,
    sectionTitle: "10. Calentamiento",
    title: "Riesgos por calentamiento incorrecto",
    content: [
      "El calentamiento excesivo puede:",
      "• Quemar el cobre.",
      "• Volverlo frágil o poroso.",
      "• Comprometer la calidad de la unión.",
      "Proteger uniones cercanas (como polietileno) con paños húmedos si es necesario."
    ],
    imageSeed: "overheating"
  },
  31: {
    id: 31,
    sectionId: 11,
    sectionTitle: "11. Aplicación de la Soldadura",
    title: "Principio de aporte por capilaridad",
    content: [
      "Alcanzada la temperatura, el material debe penetrar rápidamente por capilaridad.",
      "• La unión está llena cuando se forma un cordón uniforme alrededor del tubo.",
      "• El operario no 'empuja' la soldadura; la capilaridad hace el trabajo.",
      "El control del calor es lo que guía el flujo del material."
    ],
    imageSeed: "capillarity"
  },
  32: {
    id: 32,
    sectionId: 11,
    sectionTitle: "11. Aplicación de la Soldadura",
    title: "Secuencia correcta de aplicación",
    content: [
      "• Mantener alta la temperatura de la unión.",
      "• Aproximar el hilo al borde del accesorio.",
      "• Apartar la llama del hilo durante la aportación.",
      "Secuencia: 1. Parte inferior, 2. Partes laterales, 3. Parte superior.",
      "Esto asegura un llenado completo en toda la circunferencia."
    ],
    imageSeed: "brazing-sequence"
  },
  33: {
    id: 33,
    sectionId: 11,
    sectionTitle: "11. Aplicación de la Soldadura",
    title: "Precauciones durante la aplicación",
    content: [
      "• En derivaciones hacia abajo, evitar recalentar el tubo para que la aleación no escurra.",
      "• Si ocurre recalentamiento, retirar el calor y dejar solidificar antes de reanudar.",
      "• Interrumpir el aporte al ver el cordón continuo; agregar más no mejora la calidad."
    ],
    imageSeed: "brazing-precautions"
  },
  34: {
    id: 34,
    sectionId: 12,
    sectionTitle: "12. Control de Calidad",
    title: "Criterios básicos de calidad",
    content: [
      "Asegurar mediante control visual que los intersticios estén llenos.",
      "Tres preguntas de control:",
      "• ¿Penetró el material o quedó superficial?",
      "• ¿Se observa cordón uniforme continuo?",
      "• ¿Hay evidencia de calentamiento adecuado?",
      "La inspección visual es parte central del control en terreno."
    ],
    imageSeed: "quality-control"
  },
  35: {
    id: 35,
    sectionId: 12,
    sectionTitle: "12. Control de Calidad",
    title: "Señales de unión mal preparada o calentada",
    content: [
      "• Gotas sobre la superficie: Superficie no desoxidada o temperatura insuficiente.",
      "• Aleación no penetra y escurre: Calentamiento insuficiente de la cañería o sobrecalentamiento del accesorio.",
      "Estos errores deben ser diagnosticados por ejecutante y supervisor."
    ],
    imageSeed: "defects"
  },
  36: {
    id: 36,
    sectionId: 13,
    sectionTitle: "13. Enfriamiento y Cierre",
    title: "Enfriamiento y limpieza final",
    content: [
      "• Enfriar bruscamente con agua fría para ayudar a separar residuos vitrificados.",
      "• Limpiar la zona de restos de decapante una vez fría.",
      "La limpieza final ayuda a dejar visible la calidad de la unión y evita residuos indeseados."
    ],
    imageSeed: "cleaning-final"
  },
  37: {
    id: 37,
    sectionId: 13,
    sectionTitle: "13. Enfriamiento y Cierre",
    title: "Condiciones de cierre seguro del trabajo",
    content: [
      "• Reponer elementos de control de riesgo retirados.",
      "• Verificar que no quede material en ignición.",
      "• Sitio limpio y ordenado.",
      "• Devolver equipo al lugar correspondiente.",
      "El trabajo termina cuando la zona queda segura y sin fuentes de riesgo."
    ],
    imageSeed: "safe-closing"
  },
  38: {
    id: 38,
    sectionId: 14,
    sectionTitle: "14. Calificación del Soldador",
    title: "Exigencias para soldaduras en matriz interior",
    content: [
      "• Calificación conforme a ASME B31.8, apéndice G o ASME BPVC-IX.",
      "• Demostrar actividad en soldadura fuerte en los últimos 6 meses.",
      "• Si no hay actividad reciente, se requiere recalificación.",
      "La habilidad práctica no reemplaza la exigencia formal de calificación."
    ],
    imageSeed: "qualification"
  },
  39: {
    id: 39,
    sectionId: 14,
    sectionTitle: "14. Calificación del Soldador",
    title: "Exigencias para centrales térmicas",
    content: [
      "• Contar con un procedimiento calificado conforme a ASME BPVC-IX.",
      "No basta con calificar al soldador; también se exige validación formal del procedimiento aplicado."
    ],
    imageSeed: "qualification-thermal"
  },
  40: {
    id: 40,
    sectionId: 15,
    sectionTitle: "15. Registros y Trazabilidad",
    title: "Documentación que debe mantenerse",
    content: [
      "• Calificación del soldador.",
      "• Procedimiento calificado (si aplica).",
      "• Checklists mensuales de inspección de equipos.",
      "• La trazabilidad permite demostrar documentalmente la calidad de la ejecución."
    ],
    imageSeed: "records"
  },
  41: {
    id: 41,
    sectionId: 15,
    sectionTitle: "15. Registros y Trazabilidad",
    title: "Uso de los anexos como herramientas",
    content: [
      "Anexo 1: Checklist diario para verificar condiciones mínimas.",
      "Anexo 2: Checklist periódico de inspección de equipos.",
      "Estos registros son parte del control preventivo, no un 'papel adicional'."
    ],
    imageSeed: "annex-use"
  },
  42: {
    id: 42,
    sectionId: 16,
    sectionTitle: "16. Cierre Técnico",
    title: "Mensajes críticos a retener",
    content: [
      "1. La soldadura fuerte es una actividad regulada.",
      "2. Aplica por personal acreditado hasta 1,4 bar.",
      "3. La seguridad comienza antes del encendido.",
      "4. La preparación determina la calidad final.",
      "5. El calentamiento se reconoce, no se improvisa.",
      "6. La calidad se verifica visualmente."
    ],
    imageSeed: "key-messages"
  },
  43: {
    id: 43,
    sectionId: 16,
    sectionTitle: "16. Cierre Técnico",
    title: "Advertencias finales de la versión",
    content: [
      "• Validar consistencia técnica del extintor (norma exige >= 10kg).",
      "• Eliminar comentarios editoriales antes de la versión oficial.",
      "• Definir vigencia del material de apoyo 'Conceptos de soldadura'."
    ],
    imageSeed: "final-warnings"
  }
};
