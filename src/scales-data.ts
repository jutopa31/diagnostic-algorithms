import { Scale } from './types';

export const medicalScales: Scale[] = [
    {
      id: 'nihss',
      name: 'Escala NIHSS (National Institutes of Health Stroke Scale)',
      category: 'Evaluación Neurológica',
      description: 'Escala de evaluación de accidente cerebrovascular agudo',
      items: [
        { 
          id: 'loc', 
          label: '1. Nivel de consciencia', 
          options: [
            '0 - Alerta, respuestas normales',
            '1 - No alerta, pero responde a mínimos estímulos verbales',
            '2 - No alerta, requiere estímulos repetidos o dolorosos para responder',
            '3 - Responde solo con reflejo motor o respuestas autonómicas, o totalmente irresponsivo'
          ], 
          score: 0 
        },
        { 
          id: 'loc-questions', 
          label: '2. Preguntas del nivel de consciencia', 
          options: [
            '0 - Responde ambas preguntas correctamente (mes y edad)',
            '1 - Responde una pregunta correctamente',
            '2 - No responde ninguna pregunta correctamente'
          ], 
          score: 0 
        },
        { 
          id: 'loc-commands', 
          label: '3. Órdenes del nivel de consciencia', 
          options: [
            '0 - Realiza ambas tareas correctamente (abrir/cerrar ojos, apretar/soltar mano)',
            '1 - Realiza una tarea correctamente',
            '2 - No realiza ninguna tarea correctamente'
          ], 
          score: 0 
        },
        { 
          id: 'gaze', 
          label: '4. Mejor mirada', 
          options: [
            '0 - Normal',
            '1 - Parálisis parcial de la mirada',
            '2 - Desviación forzada o parálisis total de la mirada'
          ], 
          score: 0 
        },
        { 
          id: 'visual', 
          label: '5. Campos visuales', 
          options: [
            '0 - Sin déficits campimétricos',
            '1 - Hemianopsia parcial',
            '2 - Hemianopsia completa',
            '3 - Hemianopsia bilateral (ceguera cortical)'
          ], 
          score: 0 
        },
        { 
          id: 'facial', 
          label: '6. Parálisis facial', 
          options: [
            '0 - Movimientos normales simétricos',
            '1 - Paresia leve (asimetría al sonreír)',
            '2 - Parálisis parcial (parálisis total de la parte inferior de la cara)',
            '3 - Parálisis completa (ausencia de movimientos faciales en la parte superior e inferior)'
          ], 
          score: 0 
        },
        { 
          id: 'motor-left-arm', 
          label: '7a. Motor - Brazo izquierdo', 
          options: [
            '0 - No hay caída, mantiene la posición 10 segundos',
            '1 - Caída parcial antes de 10 segundos, no llega a tocar la cama',
            '2 - Esfuerzo contra gravedad, no puede alcanzar o mantener 10 segundos',
            '3 - No esfuerzo contra gravedad, el miembro cae',
            '4 - No movimiento',
            'UN - Amputación o fusión articular (explicar)'
          ], 
          score: 0 
        },
        { 
          id: 'motor-right-arm', 
          label: '7b. Motor - Brazo derecho', 
          options: [
            '0 - No hay caída, mantiene la posición 10 segundos',
            '1 - Caída parcial antes de 10 segundos, no llega a tocar la cama',
            '2 - Esfuerzo contra gravedad, no puede alcanzar o mantener 10 segundos',
            '3 - No esfuerzo contra gravedad, el miembro cae',
            '4 - No movimiento',
            'UN - Amputación o fusión articular (explicar)'
          ], 
          score: 0 
        },
        { 
          id: 'motor-left-leg', 
          label: '8a. Motor - Pierna izquierda', 
          options: [
            '0 - No hay caída, mantiene la posición 5 segundos',
            '1 - Caída parcial antes de 5 segundos, no llega a tocar la cama',
            '2 - Esfuerzo contra gravedad, cae a la cama en menos de 5 segundos',
            '3 - No esfuerzo contra gravedad, el miembro cae inmediatamente',
            '4 - No movimiento',
            'UN - Amputación o fusión articular (explicar)'
          ], 
          score: 0 
        },
        { 
          id: 'motor-right-leg', 
          label: '8b. Motor - Pierna derecha', 
          options: [
            '0 - No hay caída, mantiene la posición 5 segundos',
            '1 - Caída parcial antes de 5 segundos, no llega a tocar la cama',
            '2 - Esfuerzo contra gravedad, cae a la cama en menos de 5 segundos',
            '3 - No esfuerzo contra gravedad, el miembro cae inmediatamente',
            '4 - No movimiento',
            'UN - Amputación o fusión articular (explicar)'
          ], 
          score: 0 
        },
        { 
          id: 'ataxia', 
          label: '9. Ataxia de miembros', 
          options: [
            '0 - Ausente',
            '1 - Presente en un miembro',
            '2 - Presente en dos miembros',
            'UN - Amputación o fusión articular (explicar)'
          ], 
          score: 0 
        },
        { 
          id: 'sensory', 
          label: '10. Sensibilidad', 
          options: [
            '0 - Normal, sin pérdida sensorial',
            '1 - Pérdida sensorial leve a moderada',
            '2 - Pérdida sensorial severa o total'
          ], 
          score: 0 
        },
        { 
          id: 'language', 
          label: '11. Mejor lenguaje', 
          options: [
            '0 - Sin afasia, normal',
            '1 - Afasia leve a moderada',
            '2 - Afasia severa',
            '3 - Mudo, afasia global'
          ], 
          score: 0 
        },
        { 
          id: 'dysarthria', 
          label: '12. Disartria', 
          options: [
            '0 - Normal',
            '1 - Disartria leve a moderada',
            '2 - Disartria severa, habla ininteligible',
            'UN - Intubado u otra barrera física (explicar)'
          ], 
          score: 0 
        },
        { 
          id: 'neglect', 
          label: '13. Extinción e inatención (negligencia)', 
          options: [
            '0 - Sin anormalidad',
            '1 - Inatención o extinción visual, táctil, auditiva, espacial o personal a la estimulación bilateral simultánea en una de las modalidades sensoriales',
            '2 - Hemi-inatención severa o extinción en más de una modalidad'
          ], 
          score: 0 
        }
      ]
    },
    {
      id: 'major_depressive_disorder',
      name: 'Algoritmo Diagnóstico - Trastorno Depresivo Mayor (DSM-5)',
      category: 'Psiquiatría',
      description: 'Algoritmo diagnóstico para Trastorno Depresivo Mayor según criterios DSM-5',
      items: [
        {
          id: 'depressed_mood',
          label: '1. Estado de ánimo deprimido la mayor parte del día, casi todos los días',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'anhedonia',
          label: '2. Marcada disminución del interés o placer en todas o casi todas las actividades la mayor parte del día, casi todos los días (anhedonia)',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'weight_appetite_change',
          label: '3. Pérdida significativa de peso sin hacer dieta, aumento de peso, o disminución/aumento del apetito casi todos los días',
          options: [
            '0 - No presente',
            '1 - Presente (cambio >5% peso corporal en un mes)'
          ],
          score: 0
        },
        {
          id: 'sleep_disturbance',
          label: '4. Insomnio o hipersomnia casi todos los días',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'psychomotor_changes',
          label: '5. Agitación o enlentecimiento psicomotor casi todos los días (observable por otros, no solo sensación subjetiva)',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'fatigue_energy_loss',
          label: '6. Fatiga o pérdida de energía casi todos los días',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'worthlessness_guilt',
          label: '7. Sentimientos de inutilidad o de culpa excesiva o inapropiada (que puede ser delirante) casi todos los días',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'concentration_difficulty',
          label: '8. Disminución de la capacidad para pensar o concentrarse, o indecisión, casi todos los días',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'death_suicidal_thoughts',
          label: '9. Pensamientos recurrentes de muerte, ideación suicida recurrente sin un plan específico, o una tentativa de suicidio o un plan específico para suicidarse',
          options: [
            '0 - No presente',
            '1 - Presente'
          ],
          score: 0
        },
        {
          id: 'duration_two_weeks',
          label: 'Duración: Los síntomas han estado presentes durante al menos 2 semanas',
          options: [
            '0 - No (menos de 2 semanas)',
            '1 - Sí (2 semanas o más)'
          ],
          score: 0
        },
        {
          id: 'functional_impairment',
          label: 'Los síntomas causan malestar clínicamente significativo o deterioro en lo social, laboral u otras áreas importantes del funcionamiento',
          options: [
            '0 - No hay deterioro significativo',
            '1 - Sí, hay deterioro clínicamente significativo'
          ],
          score: 0
        },
        {
          id: 'not_substance_medical',
          label: 'Los síntomas no son atribuibles a los efectos fisiológicos directos de una sustancia o condición médica general',
          options: [
            '0 - Los síntomas son atribuibles a sustancia/condición médica',
            '1 - Los síntomas NO son atribuibles a sustancia/condición médica'
          ],
          score: 0
        },
        {
          id: 'not_bereavement',
          label: 'El episodio no se explica mejor por trastorno esquizoafectivo, esquizofrenia, trastorno delirante u otro trastorno psicótico',
          options: [
            '0 - Se explica mejor por otro trastorno psicótico',
            '1 - NO se explica mejor por otro trastorno psicótico'
          ],
          score: 0
        },
        {
          id: 'no_previous_manic_hypomanic',
          label: 'Nunca ha habido un episodio maníaco o hipomaníaco',
          options: [
            '0 - Ha habido episodios maníacos/hipomaníacos previos',
            '1 - Nunca ha habido episodios maníacos/hipomaníacos'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'glasgow',
      name: 'Escala de Coma de Glasgow',
      category: 'Evaluación Neurológica',
      description: 'Escala para evaluar el nivel de conciencia',
      items: [
        { 
          id: 'eye_opening', 
          label: 'Apertura ocular', 
          options: ['4 - Espontánea', '3 - Al habla', '2 - Al dolor', '1 - Ninguna'], 
          score: 4 
        },
        { 
          id: 'verbal_response', 
          label: 'Respuesta verbal', 
          options: ['5 - Orientada', '4 - Confusa', '3 - Palabras inapropiadas', '2 - Sonidos incomprensibles', '1 - Ninguna'], 
          score: 5 
        },
        { 
          id: 'motor_response', 
          label: 'Respuesta motora', 
          options: ['6 - Obedece órdenes', '5 - Localiza dolor', '4 - Retirada normal', '3 - Flexión anormal', '2 - Extensión', '1 - Ninguna'], 
          score: 6 
        }
      ]
    },
    {
      id: 'updrs1',
      name: 'UPDRS I - Estado Mental',
      category: 'Parkinson',
      description: 'Evaluación de aspectos no motores y cognitivos en Parkinson',
      items: [
        {
          id: 'intellect',
          label: '1. Alteración del Intelecto',
          options: [
            '0 - Nula',
            '1 - Leve (pérdida de complejidad del pensamiento)',
            '2 - Moderada (requiere ayuda para tareas complejas)',
            '3 - Grave (solo tareas simples, dificultad para entender)',
            '4 - Muy grave (no puede entender)'
          ],
          score: 0
        },
        {
          id: 'thought_disorder',
          label: '2. Trastornos del Pensamiento',
          options: [
            '0 - No hay',
            '1 - Ensueños vívidos',
            '2 - Alucinaciones benignas, manteniendo juicio',
            '3 - Alucinaciones frecuentes o delirios ocasionales sin juicio',
            '4 - Alucinaciones/delirios persistentes o psicosis florida'
          ],
          score: 0
        },
        {
          id: 'depression',
          label: '3. Depresión',
          options: [
            '0 - No hay',
            '1 - Períodos de tristeza o culpa mayores a lo normal',
            '2 - Depresión sostenida (semanas o más)',
            '3 - Depresión sostenida con síntomas vegetativos',
            '4 - Depresión con síntomas vegetativos o ideación suicida'
          ],
          score: 0
        },
        {
          id: 'motivation',
          label: '4. Motivación - Iniciativa',
          options: [
            '0 - Normal',
            '1 - Menos activa de lo habitual, mayor pasividad',
            '2 - Pérdida de iniciativa o desinterés en actividades opcionales',
            '3 - Pérdida de iniciativa o desinterés en actividades rutinarias',
            '4 - Aislado, pérdida completa de motivación'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'updrs2',
      name: 'UPDRS II - Actividades de la Vida Diaria',
      category: 'Parkinson',
      description: 'Evaluación de funciones de la vida diaria en Parkinson',
      items: [
        {
          id: 'speech',
          label: '5. Lenguaje',
          options: [
            '0 - Normal',
            '1 - Ligeramente alterado. No hay dificultad para entender',
            '2 - Moderadamente alterado. A veces piden que repita',
            '3 - Muy alterado. Frecuentemente piden que repita',
            '4 - Ininteligible la mayor parte del tiempo'
          ],
          score: 0
        },
        {
          id: 'salivation',
          label: '6. Salivación',
          options: [
            '0 - Normal',
            '1 - Ligero pero definitivo exceso de saliva, puede babear por la noche',
            '2 - Moderado exceso de saliva, puede babear',
            '3 - Marcado exceso de saliva con algo de babeo',
            '4 - Marcado babeo, requiere pañuelo constantemente'
          ],
          score: 0
        },
        {
          id: 'swallowing',
          label: '7. Deglución',
          options: [
            '0 - Normal',
            '1 - Rara vez se atraganta',
            '2 - Ocasionalmente se atraganta',
            '3 - Requiere comida blanda',
            '4 - Requiere sonda nasogástrica o gastrostomía'
          ],
          score: 0
        },
        {
          id: 'handwriting',
          label: '8. Escritura',
          options: [
            '0 - Normal',
            '1 - Ligeramente lenta o pequeña',
            '2 - Moderadamente lenta o pequeña; todas las palabras son legibles',
            '3 - Severamente afectada; no todas las palabras son legibles',
            '4 - La mayoría no es legible'
          ],
          score: 0
        },
        {
          id: 'cutting_food',
          label: '9. Cortar alimentos y manejar utensilios',
          options: [
            '0 - Normal',
            '1 - Algo lento y torpe, pero no necesita ayuda',
            '2 - Puede cortar la mayoría de comidas, aunque torpe y lento; algo de ayuda',
            '3 - Los alimentos deben ser cortados por otros, pero aún puede alimentarse lentamente',
            '4 - Necesita ser alimentado'
          ],
          score: 0
        },
        {
          id: 'dressing',
          label: '10. Vestido',
          options: [
            '0 - Normal',
            '1 - Algo lento, pero no necesita ayuda',
            '2 - Ayuda ocasional con botones, brazos en mangas',
            '3 - Ayuda considerable requerida, pero puede hacer algunas cosas solo',
            '4 - Incapacitado'
          ],
          score: 0
        },
        {
          id: 'hygiene',
          label: '11. Higiene',
          options: [
            '0 - Normal',
            '1 - Algo lento, pero no necesita ayuda',
            '2 - Necesita ayuda para ducharse o bañarse; o muy lento en cuidado higiénico',
            '3 - Requiere asistencia para lavarse, cepillarse dientes, peinarse, ir al baño',
            '4 - Sonda Foley u otras ayudas mecánicas'
          ],
          score: 0
        },
        {
          id: 'turning_in_bed',
          label: '12. Darse vuelta en la cama y ajustar ropa de cama',
          options: [
            '0 - Normal',
            '1 - Algo lento y torpe, pero no necesita ayuda',
            '2 - Puede voltearse solo o ajustar sábanas, pero con gran dificultad',
            '3 - Puede iniciar, pero no voltearse o ajustar sábanas solo',
            '4 - Incapacitado'
          ],
          score: 0
        },
        {
          id: 'falling',
          label: '13. Caídas (no relacionadas con freezing)',
          options: [
            '0 - Ninguna',
            '1 - Rara vez se cae',
            '2 - Ocasionalmente se cae, menos de una vez al día',
            '3 - Se cae un promedio de una vez al día',
            '4 - Se cae más de una vez al día'
          ],
          score: 0
        },
        {
          id: 'freezing',
          label: '14. Freezing al caminar',
          options: [
            '0 - No hay',
            '1 - Rara vez freeze al caminar; puede tener titubeo al inicio',
            '2 - Ocasionalmente freeze al caminar',
            '3 - Frecuentemente freeze. Ocasionalmente se cae por freezing',
            '4 - Frecuentes caídas por freezing'
          ],
          score: 0
        },
        {
          id: 'walking',
          label: '15. Caminar',
          options: [
            '0 - Normal',
            '1 - Leve dificultad. Puede no balancear brazos o tender a arrastrar pierna',
            '2 - Dificultad moderada, pero requiere poca o ninguna asistencia',
            '3 - Trastorno severo de la marcha, requiere asistencia',
            '4 - No puede caminar, aún con asistencia'
          ],
          score: 0
        },
        {
          id: 'tremor',
          label: '16. Temblor',
          options: [
            '0 - Ausente',
            '1 - Leve e infrecuentemente presente',
            '2 - Moderado; molesto para el paciente',
            '3 - Severo; muchas actividades interferidas',
            '4 - Marcado; la mayoría de actividades abandonadas'
          ],
          score: 0
        },
        {
          id: 'sensory_complaints',
          label: '17. Quejas sensoriales relacionadas con parkinsonismo',
          options: [
            '0 - Ninguna',
            '1 - Ocasionalmente tiene entumecimiento, hormigueo o dolor leve',
            '2 - Frecuentemente tiene entumecimiento, hormigueo o dolor; no es angustiante',
            '3 - Sensaciones dolorosas frecuentes',
            '4 - Dolor extremo'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'updrs3',
      name: 'UPDRS III - Examen Motor',
      category: 'Parkinson',
      description: 'Evaluación de signos motores en Parkinson',
      items: [
        {
          id: 'speech_motor',
          label: '18. Lenguaje',
          options: [
            '0 - Normal',
            '1 - Leve pérdida de expresión, dicción y/o volumen',
            '2 - Monótono, farfullado pero comprensible; moderadamente afectado',
            '3 - Marcadamente afectado, difícil de entender',
            '4 - Ininteligible'
          ],
          score: 0
        },
        {
          id: 'facial_expression',
          label: '19. Expresión facial',
          options: [
            '0 - Normal',
            '1 - Hipomimia mínima, podría ser "cara de póker" normal',
            '2 - Leve pero definitiva reducción en expresión facial',
            '3 - Hipomimia moderada; labios separados algunas veces',
            '4 - Cara de máscara o expresión fija con pérdida severa o completa de expresión facial; labios separados 6mm o más'
          ],
          score: 0
        },
        {
          id: 'rest_tremor_hands',
          label: '20. Temblor de reposo - Manos',
          options: [
            '0 - Ausente',
            '1 - Leve y infrecuentemente presente',
            '2 - Leve en amplitud y persistente. O moderado en amplitud pero presente solo intermitentemente',
            '3 - Moderado en amplitud y presente la mayor parte del tiempo',
            '4 - Marcado en amplitud y presente la mayor parte del tiempo'
          ],
          score: 0
        },
        {
          id: 'rest_tremor_feet',
          label: '21. Temblor de reposo - Pies',
          options: [
            '0 - Ausente',
            '1 - Leve y infrecuentemente presente',
            '2 - Leve en amplitud y persistente. O moderado en amplitud pero presente solo intermitentemente',
            '3 - Moderado en amplitud y presente la mayor parte del tiempo',
            '4 - Marcado en amplitud y presente la mayor parte del tiempo'
          ],
          score: 0
        },
        {
          id: 'action_tremor',
          label: '22. Temblor de acción o postural de manos',
          options: [
            '0 - Ausente',
            '1 - Leve; presente con acción',
            '2 - Moderado en amplitud, presente con acción',
            '3 - Moderado en amplitud con postura mantenida así como con acción',
            '4 - Marcado en amplitud; interfiere con alimentación'
          ],
          score: 0
        },
        {
          id: 'axial_rigidity',
          label: '23. Rigidez - Cuello',
          options: [
            '0 - Ausente',
            '1 - Leve o detectable solo cuando se activa por movimientos espejo o de otra maniobra',
            '2 - Leve a moderada',
            '3 - Marcada, pero rango completo de movimiento fácilmente alcanzado',
            '4 - Severa, rango de movimiento alcanzado con dificultad'
          ],
          score: 0
        },
        {
          id: 'limb_rigidity',
          label: '24. Rigidez - Extremidades',
          options: [
            '0 - Ausente',
            '1 - Leve o detectable solo cuando se activa por movimientos espejo o de otra maniobra',
            '2 - Leve a moderada',
            '3 - Marcada, pero rango completo de movimiento fácilmente alcanzado',
            '4 - Severa, rango de movimiento alcanzado con dificultad'
          ],
          score: 0
        },
        {
          id: 'finger_taps',
          label: '25. Golpeteo de dedos',
          options: [
            '0 - Normal',
            '1 - Leve lentitud y/o reducción en amplitud',
            '2 - Moderadamente afectado. Definitiva y temprana fatiga. Puede tener detenciones ocasionales',
            '3 - Severamente afectado. Dudas frecuentes al iniciar o detenciones durante el movimiento',
            '4 - Apenas puede realizar la tarea'
          ],
          score: 0
        },
        {
          id: 'hand_movements',
          label: '26. Movimientos de manos',
          options: [
            '0 - Normal',
            '1 - Leve lentitud y/o reducción en amplitud',
            '2 - Moderadamente afectado. Definitiva y temprana fatiga. Puede tener detenciones ocasionales',
            '3 - Severamente afectado. Dudas frecuentes al iniciar o detenciones durante el movimiento',
            '4 - Apenas puede realizar la tarea'
          ],
          score: 0
        },
        {
          id: 'rapid_alternating',
          label: '27. Movimientos alternantes rápidos de manos',
          options: [
            '0 - Normal',
            '1 - Leve lentitud y/o reducción en amplitud',
            '2 - Moderadamente afectado. Definitiva y temprana fatiga. Puede tener detenciones ocasionales',
            '3 - Severamente afectado. Dudas frecuentes al iniciar o detenciones durante el movimiento',
            '4 - Apenas puede realizar la tarea'
          ],
          score: 0
        },
        {
          id: 'leg_agility',
          label: '28. Agilidad de piernas',
          options: [
            '0 - Normal',
            '1 - Leve lentitud y/o reducción en amplitud',
            '2 - Moderadamente afectado. Definitiva y temprana fatiga. Puede tener detenciones ocasionales',
            '3 - Severamente afectado. Dudas frecuentes al iniciar o detenciones durante el movimiento',
            '4 - Apenas puede realizar la tarea'
          ],
          score: 0
        },
        {
          id: 'arising_chair',
          label: '29. Levantarse de la silla',
          options: [
            '0 - Normal',
            '1 - Lento; o puede necesitar más de un intento',
            '2 - Se levanta apoyándose en los brazos de la silla',
            '3 - Tiende a caer hacia atrás y puede tener que intentarlo más de una vez, pero puede levantarse sin ayuda',
            '4 - Incapaz de levantarse sin ayuda'
          ],
          score: 0
        },
        {
          id: 'posture',
          label: '30. Postura',
          options: [
            '0 - Normal erecto',
            '1 - No muy erecto, ligeramente encorvado; podría ser normal para persona mayor',
            '2 - Moderadamente encorvado, definitivamente anormal; puede inclinarse ligeramente a un lado',
            '3 - Severamente encorvado con cifosis; puede inclinarse moderadamente a un lado',
            '4 - Flexión marcada con extrema anormalidad postural'
          ],
          score: 0
        },
        {
          id: 'gait',
          label: '31. Marcha',
          options: [
            '0 - Normal',
            '1 - Camina lentamente, puede arrastrar pies con poco o ningún balanceo de brazos',
            '2 - Camina con dificultad, pero requiere poca o ninguna ayuda; puede tener algo de festinación, pasos cortos o propulsión',
            '3 - Trastorno severo de la marcha, requiere asistencia',
            '4 - No puede caminar en absoluto, aún con asistencia'
          ],
          score: 0
        },
        {
          id: 'postural_stability',
          label: '32. Estabilidad postural',
          options: [
            '0 - Normal',
            '1 - Retropulsión, pero se recupera sin ayuda',
            '2 - Ausencia de respuesta postural; se caería si no lo agarrara el examinador',
            '3 - Muy inestable, tiende a perder el equilibrio espontáneamente',
            '4 - Incapaz de mantenerse en pie sin ayuda'
          ],
          score: 0
        },
        {
          id: 'bradykinesia',
          label: '33. Bradiquinesia y hipoquinesia global',
          options: [
            '0 - Ninguna',
            '1 - Lentitud mínima, dando al movimiento un carácter deliberado; podría ser normal para algunas personas',
            '2 - Lentitud leve de movimiento y bradiquinesia que es definitivamente anormal',
            '3 - Lentitud moderada de movimiento y bradiquinesia',
            '4 - Lentitud marcada de movimiento y bradiquinesia'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'updrs4',
      name: 'UPDRS IV - Complicaciones del Tratamiento',
      category: 'Parkinson',
      description: 'Evaluación de complicaciones motoras del tratamiento',
      items: [
        {
          id: 'dyskinesia_duration',
          label: '34. Duración de discinesias',
          options: [
            '0 - Ninguna',
            '1 - 1-25% del día despierte',
            '2 - 26-50% del día despierte',
            '3 - 51-75% del día despierte',
            '4 - 76-100% del día despierte'
          ],
          score: 0
        },
        {
          id: 'dyskinesia_disability',
          label: '35. Incapacidad por discinesias',
          options: [
            '0 - No incapacitantes',
            '1 - Ligeramente incapacitantes',
            '2 - Moderadamente incapacitantes',
            '3 - Severamente incapacitantes',
            '4 - Completamente incapacitantes'
          ],
          score: 0
        },
        {
          id: 'painful_dyskinesia',
          label: '36. Discinesias dolorosas',
          options: [
            '0 - No dolorosas',
            '1 - Ligeramente dolorosas',
            '2 - Moderadamente dolorosas',
            '3 - Severamente dolorosas',
            '4 - Extremadamente dolorosas'
          ],
          score: 0
        },
        {
          id: 'early_morning_dystonia',
          label: '37. Presencia de distonía matutina temprana',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'predictable_off',
          label: '38. ¿Hay períodos OFF predecibles en relación al tiempo de las dosis?',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'unpredictable_off',
          label: '39. ¿Hay períodos OFF impredecibles en relación al tiempo de las dosis?',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'sudden_off',
          label: '40. ¿Los períodos OFF aparecen súbitamente, ej., en pocos segundos?',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'off_proportion',
          label: '41. ¿Qué proporción del día despierte está el paciente OFF en promedio?',
          options: [
            '0 - Ninguna',
            '1 - 1-25% del día',
            '2 - 26-50% del día',
            '3 - 51-75% del día',
            '4 - 76-100% del día'
          ],
          score: 0
        },
        {
          id: 'anorexia_nausea',
          label: '42. ¿Experimenta el paciente anorexia, náuseas o vómitos?',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'sleep_disturbances',
          label: '43. ¿Tiene el paciente trastornos del sueño, como insomnio o hipersomnolencia?',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'symptomatic_orthostasis',
          label: '44. ¿Tiene el paciente ortostatismo sintomático?',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'ashworth',
      name: 'Escala de Ashworth Modificada',
      category: 'Evaluación Neurológica',
      description: 'Evaluación del tono muscular y espasticidad en miembros superiores e inferiores',
      items: [
        {
          id: 'flexores_codo',
          label: 'Flexores de codo',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'extensores_codo',
          label: 'Extensores de codo',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'pronadores',
          label: 'Pronadores de antebrazo',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'flexores_muneca',
          label: 'Flexores de muñeca',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'flexores_cadera',
          label: 'Flexores de cadera',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'aductores_cadera',
          label: 'Aductores de cadera',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'extensores_rodilla',
          label: 'Extensores de rodilla',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'flexores_rodilla',
          label: 'Flexores de rodilla',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        },
        {
          id: 'flexores_plantares',
          label: 'Flexores plantares',
          options: [
            '0 - Sin aumento del tono muscular',
            '1 - Ligero aumento del tono muscular, manifestado por una detención y liberación, o por una resistencia mínima al final del arco de movimiento',
            '1+ - Ligero aumento del tono muscular, manifestado por una detención seguida de una resistencia mínima en menos de la mitad del resto del arco de movimiento',
            '2 - Aumento más pronunciado del tono muscular en la mayor parte del arco de movimiento, pero las partes afectadas se mueven fácilmente',
            '3 - Considerable aumento del tono muscular, el movimiento pasivo es difícil',
            '4 - Las partes afectadas están rígidas en flexión o extensión'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'mcdonald_2024',
      name: 'Criterios de McDonald 2024 - Esclerosis Múltiple',
      category: 'Evaluación Neurológica',
      description: 'Criterios diagnósticos actualizados para Esclerosis Múltiple según McDonald 2024',
      items: [
        {
          id: 'clinical_attacks',
          label: 'Número de ataques clínicos documentados',
          options: [
            '1 - Un ataque clínico',
            '2 - Dos ataques clínicos',
            '3 - Tres o más ataques clínicos'
          ],
          score: 1
        },
        {
          id: 'objective_lesions',
          label: 'Lesiones clínicas objetivas',
          options: [
            '1 - Una lesión clínica objetiva',
            '2 - Dos o más lesiones clínicas objetivas'
          ],
          score: 1
        },
        {
          id: 'dis_periventricular',
          label: 'DIS - Lesiones periventriculares (≥1 lesión T2)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'dis_cortical',
          label: 'DIS - Lesiones corticales/yuxtacorticales (≥1 lesión T2)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'dis_infratentorial',
          label: 'DIS - Lesiones infratentoriales (≥1 lesión T2)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'dis_spinal',
          label: 'DIS - Lesiones de médula espinal (≥1 lesión T2)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'dit_gadolinium',
          label: 'DIT - Presencia simultánea de lesiones captantes y no captantes de gadolinio',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'dit_new_lesions',
          label: 'DIT - Nuevas lesiones T2 o captantes en RMN de seguimiento',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'csf_oligoclonal',
          label: 'Bandas oligoclonales específicas en LCR',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'alternative_diagnosis',
          label: '¿Se ha descartado diagnóstico alternativo que explique mejor el cuadro?',
          options: [
            '0 - No se ha descartado completamente',
            '1 - Sí, se ha descartado diagnóstico alternativo'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'parkinson_diagnosis',
      name: 'Diagnóstico de Parkinson (MDS 2015)',
      category: 'Parkinson',
      description: 'Criterios diagnósticos para enfermedad de Parkinson según MDS 2015',
      items: [
        {
          id: 'bradykinesia',
          label: 'Bradicinesia (movimientos lentos, reducción progresiva en amplitud/velocidad)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'rest_tremor_4_6hz',
          label: 'Temblor en reposo (4-6 Hz)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'muscular_rigidity',
          label: 'Rigidez muscular',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'cerebellar_signs',
          label: 'EXCLUSIÓN: Signos cerebelosos prominentes (ataxia, dismetría)',
          options: [
            '0 - No',
            '1 - Sí (excluye diagnóstico)'
          ],
          score: 0
        },
        {
          id: 'supranuclear_palsy',
          label: 'EXCLUSIÓN: Parálisis supranuclear de la mirada vertical',
          options: [
            '0 - No',
            '1 - Sí (excluye diagnóstico)'
          ],
          score: 0
        },
        {
          id: 'legs_only_parkinsonism',
          label: 'EXCLUSIÓN: Parkinsonismo confinado a piernas >3 años',
          options: [
            '0 - No',
            '1 - Sí (excluye diagnóstico)'
          ],
          score: 0
        },
        {
          id: 'severe_dysautonomia',
          label: 'EXCLUSIÓN: Disautonomía severa en primeros 5 años',
          options: [
            '0 - No',
            '1 - Sí (excluye diagnóstico)'
          ],
          score: 0
        },
        {
          id: 'no_levodopa_response',
          label: 'EXCLUSIÓN: Ausencia de respuesta a levodopa pese a dosis altas',
          options: [
            '0 - No',
            '1 - Sí (excluye diagnóstico)'
          ],
          score: 0
        },
        {
          id: 'prominent_dystonia',
          label: 'EXCLUSIÓN: Movimientos distónicos prominentes en primeros años',
          options: [
            '0 - No',
            '1 - Sí (excluye diagnóstico)'
          ],
          score: 0
        },
        {
          id: 'normal_spect_dat',
          label: 'EXCLUSIÓN: Neuroimagen funcional normal (SPECT-DAT normal)',
          options: [
            '0 - No',
            '1 - Sí (excluye diagnóstico)'
          ],
          score: 0
        },
        {
          id: 'asymmetric_onset',
          label: 'APOYO: Inicio asimétrico de los síntomas',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'rest_tremor_present',
          label: 'APOYO: Temblor en reposo presente',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'marked_levodopa_response',
          label: 'APOYO: Respuesta marcada a levodopa (>70% mejoría)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'levodopa_dyskinesias',
          label: 'APOYO: Discinesias inducidas por levodopa',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'progressive_course',
          label: 'APOYO: Curso progresivo de la enfermedad',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'documented_hyposmia',
          label: 'APOYO: Hiposmia documentada',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'mibg_alteration',
          label: 'APOYO: Alteración en gammagrafía MIBG',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'rapid_progression',
          label: 'BANDERA ROJA: Progresión muy rápida (silla de ruedas en <5 años)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'early_severe_dysautonomia',
          label: 'BANDERA ROJA: Disautonomía severa temprana',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'recurrent_falls',
          label: 'BANDERA ROJA: Caídas recurrentes en primeros 3 años',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'prominent_axial_rigidity',
          label: 'BANDERA ROJA: Rigidez axial prominente desde el inicio',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'cerebellar_ataxia',
          label: 'BANDERA ROJA: Ataxia cerebelosa',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'lack_progression',
          label: 'BANDERA ROJA: Falta de progresión después de 5 años',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'severe_cognitive_decline',
          label: 'BANDERA ROJA: Deterioro cognitivo severo en el primer año',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'mrs',
      name: 'Escala de Rankin Modificada (mRS)',
      category: 'Stroke & Cerebrovascular',
      description: 'Escala para evaluar el grado de discapacidad después de un ACV',
      items: [
        {
          id: 'mrs_score',
          label: 'Grado de discapacidad funcional',
          options: [
            '0 - Sin síntomas',
            '1 - Sin discapacidad significativa: capaz de llevar a cabo todas las actividades y deberes habituales',
            '2 - Discapacidad leve: incapaz de llevar a cabo todas las actividades previas, pero capaz de cuidar sus propios asuntos sin asistencia',
            '3 - Discapacidad moderada: requiere algo de ayuda, pero capaz de caminar sin asistencia',
            '4 - Discapacidad moderadamente severa: incapaz de caminar sin asistencia e incapaz de atender sus necesidades corporales sin asistencia',
            '5 - Discapacidad severa: confinado a la cama, incontinente y requiere cuidado constante y atención de enfermería',
            '6 - Muerte'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'aspects',
      name: 'ASPECTS (Alberta Stroke Program Early CT Score)',
      category: 'Stroke & Cerebrovascular',
      description: 'Sistema de puntuación para evaluar cambios isquémicos tempranos en TC de cerebro',
      items: [
        {
          id: 'aspects_c',
          label: 'Región C (núcleo caudado)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_l',
          label: 'Región L (núcleo lenticular)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_ic',
          label: 'Región IC (cápsula interna)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_i',
          label: 'Región I (ínsula)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_m1',
          label: 'Región M1 (corteza ACM anterior)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_m2',
          label: 'Región M2 (corteza ACM lateral)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_m3',
          label: 'Región M3 (corteza ACM posterior)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_m4',
          label: 'Región M4 (corteza ACM anterior superior)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_m5',
          label: 'Región M5 (corteza ACM lateral superior)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        },
        {
          id: 'aspects_m6',
          label: 'Región M6 (corteza ACM posterior superior)',
          options: [
            '1 - Normal',
            '0 - Alterado'
          ],
          score: 1
        }
      ]
    },
    {
      id: 'cha2ds2vasc',
      name: 'CHA2DS2-VASc Score',
      category: 'Stroke & Cerebrovascular',
      description: 'Escala para evaluar riesgo de ACV en fibrilación auricular',
      items: [
        {
          id: 'chf_heart_failure',
          label: 'Insuficiencia cardíaca congestiva (C)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'hypertension',
          label: 'Hipertensión arterial (H)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'age_75_or_more',
          label: 'Edad ≥75 años (A2)',
          options: [
            '0 - No',
            '2 - Sí'
          ],
          score: 0
        },
        {
          id: 'diabetes',
          label: 'Diabetes mellitus (D)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'stroke_tia_thromboembolism',
          label: 'ACV/AIT/Tromboembolismo previo (S2)',
          options: [
            '0 - No',
            '2 - Sí'
          ],
          score: 0
        },
        {
          id: 'vascular_disease',
          label: 'Enfermedad vascular (V)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'age_65_74',
          label: 'Edad 65-74 años (A)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'sex_female',
          label: 'Sexo femenino (Sc)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'hasbled',
      name: 'HAS-BLED Score',
      category: 'Stroke & Cerebrovascular',
      description: 'Escala para evaluar riesgo de sangrado en anticoagulación',
      items: [
        {
          id: 'hypertension_uncontrolled',
          label: 'Hipertensión no controlada (H)',
          options: [
            '0 - No (PAS <160 mmHg)',
            '1 - Sí (PAS ≥160 mmHg)'
          ],
          score: 0
        },
        {
          id: 'abnormal_renal_liver',
          label: 'Función renal/hepática anormal (A)',
          options: [
            '0 - Normal',
            '1 - Alterada (1 punto cada una)'
          ],
          score: 0
        },
        {
          id: 'stroke_history',
          label: 'Historia de ACV (S)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'bleeding_history',
          label: 'Historia de sangrado (B)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'labile_inr',
          label: 'INR lábil (L)',
          options: [
            '0 - Estable',
            '1 - Inestable'
          ],
          score: 0
        },
        {
          id: 'elderly_age',
          label: 'Edad >65 años (E)',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'drugs_alcohol',
          label: 'Fármacos/Alcohol (D)',
          options: [
            '0 - No',
            '1 - Sí (1 punto cada uno)'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'ich_score',
      name: 'ICH Score (Hemorragia Intracerebral)',
      category: 'Stroke & Cerebrovascular',
      description: 'Escala pronóstica para hemorragia intracerebral',
      items: [
        {
          id: 'glasgow_coma_scale',
          label: 'Escala de Glasgow',
          options: [
            '0 - 13-15',
            '1 - 5-12',
            '2 - 3-4'
          ],
          score: 0
        },
        {
          id: 'ich_volume',
          label: 'Volumen de HIC (cm³)',
          options: [
            '0 - <30',
            '1 - ≥30'
          ],
          score: 0
        },
        {
          id: 'intraventricular_hemorrhage',
          label: 'Hemorragia intraventricular',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'infratentorial_origin',
          label: 'Localización infratentorial',
          options: [
            '0 - No',
            '1 - Sí'
          ],
          score: 0
        },
        {
          id: 'age_ich',
          label: 'Edad',
          options: [
            '0 - <80 años',
            '1 - ≥80 años'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'hunt_hess',
      name: 'Escala de Hunt y Hess',
      category: 'Stroke & Cerebrovascular',
      description: 'Clasificación clínica de hemorragia subaracnoidea',
      items: [
        {
          id: 'clinical_grade',
          label: 'Grado clínico',
          options: [
            '1 - Asintomático o cefalea leve y rigidez nucal leve',
            '2 - Cefalea moderada a severa, rigidez nucal, sin déficit neurológico excepto parálisis de nervios craneales',
            '3 - Somnolencia, confusión o déficit neurológico focal leve',
            '4 - Estupor, hemiparesia moderada a severa, posible rigidez de descerebración temprana y alteraciones vegetativas',
            '5 - Coma profundo, rigidez de descerebración, aspecto moribundo'
          ],
          score: 1
        }
      ]
    },
    {
      id: 'cdr',
      name: 'CDR (Clinical Dementia Rating)',
      category: 'Cognitive & Dementia',
      description: 'Escala para estadificar la severidad de la demencia',
      items: [
        {
          id: 'memory',
          label: 'Memoria',
          options: [
            '0 - Sin pérdida de memoria o pérdida inconstante y leve',
            '0.5 - Olvido leve y constante; recuerdo parcial de eventos; "olvido benigno"',
            '1 - Pérdida moderada de memoria; más marcada para eventos recientes; interfiere con actividades cotidianas',
            '2 - Pérdida severa de memoria; solo retiene material muy aprendido; material nuevo se pierde rápidamente',
            '3 - Pérdida severa de memoria; solo fragmentos permanecen'
          ],
          score: 0
        },
        {
          id: 'orientation',
          label: 'Orientación',
          options: [
            '0 - Completamente orientado',
            '0.5 - Completamente orientado excepto por leve dificultad con relaciones temporales',
            '1 - Dificultad moderada con relaciones temporales; orientado en lugar del examen; puede tener desorientación geográfica',
            '2 - Dificultad severa con relaciones temporales; usualmente desorientado en tiempo, frecuentemente en lugar',
            '3 - Orientado solo a persona'
          ],
          score: 0
        },
        {
          id: 'judgment_problem_solving',
          label: 'Juicio y Resolución de Problemas',
          options: [
            '0 - Resuelve problemas cotidianos y maneja asuntos de negocios y financieros bien; juicio bueno en relación a desempeño pasado',
            '0.5 - Leve alteración en resolución de problemas, similitudes y diferencias',
            '1 - Dificultad moderada para manejar problemas, similitudes y diferencias; juicio social usualmente mantenido',
            '2 - Severamente alterado en manejo de problemas, similitudes y diferencias; juicio social usualmente alterado',
            '3 - Incapaz de hacer juicios o resolver problemas'
          ],
          score: 0
        },
        {
          id: 'community_affairs',
          label: 'Asuntos Comunitarios',
          options: [
            '0 - Función independiente en el nivel usual en trabajo, compras, grupos voluntarios y sociales',
            '0.5 - Leve alteración en estas actividades',
            '1 - Incapaz de funcionar independientemente en estas actividades, aunque puede aún involucrarse en algunas; parece normal a la inspección casual',
            '2 - Sin pretensión de función independiente fuera del hogar; parece bien para ser llevado a funciones fuera del hogar',
            '3 - Sin pretensión de función independiente fuera del hogar; parece muy enfermo para ser llevado a funciones fuera del hogar'
          ],
          score: 0
        },
        {
          id: 'home_hobbies',
          label: 'Hogar y Pasatiempos',
          options: [
            '0 - Vida hogareña, pasatiempos e intereses intelectuales bien mantenidos',
            '0.5 - Vida hogareña, pasatiempos e intereses intelectuales levemente alterados',
            '1 - Vida hogareña, pasatiempos e intereses intelectuales moderadamente alterados; tareas más difíciles abandonadas',
            '2 - Solo tareas simples preservadas; intereses muy restringidos y pobremente sostenidos',
            '3 - Sin función significativa en el hogar'
          ],
          score: 0
        },
        {
          id: 'personal_care',
          label: 'Cuidado Personal',
          options: [
            '0 - Completamente capaz de cuidado propio',
            '1 - Necesita ocasionalmente ser alentado',
            '2 - Requiere asistencia para vestirse, higiene, cuidado de efectos personales',
            '3 - Requiere mucha ayuda para cuidado personal; incontinencia frecuente'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'midas',
      name: 'MIDAS (Migraine Disability Assessment)',
      category: 'Cefalea',
      description: 'Evaluación de discapacidad por migraña en los últimos 3 meses',
      items: [
        {
          id: 'work_missed',
          label: '1. ¿Cuántos días NO pudo trabajar o estudiar debido a sus dolores de cabeza?',
          options: [
            'Número de días: ___'
          ],
          score: 0
        },
        {
          id: 'work_half_productivity',
          label: '2. ¿Cuántos días su productividad en el trabajo o estudios se redujo a la mitad o más debido a sus dolores de cabeza?',
          options: [
            'Número de días: ___'
          ],
          score: 0
        },
        {
          id: 'household_missed',
          label: '3. ¿Cuántos días NO pudo hacer las tareas del hogar debido a sus dolores de cabeza?',
          options: [
            'Número de días: ___'
          ],
          score: 0
        },
        {
          id: 'household_half_productivity',
          label: '4. ¿Cuántos días su productividad en las tareas del hogar se redujo a la mitad o más debido a sus dolores de cabeza?',
          options: [
            'Número de días: ___'
          ],
          score: 0
        },
        {
          id: 'family_social_missed',
          label: '5. ¿Cuántos días perdió actividades familiares, sociales o de ocio debido a sus dolores de cabeza?',
          options: [
            'Número de días: ___'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'mmse',
      name: 'MMSE (Mini-Mental State Examination)',
      category: 'Evaluación Cognitiva',
      description: 'Evaluación cognitiva global para detección de deterioro',
      items: [
        {
          id: 'orientation_time',
          label: 'Orientación Temporal (5 puntos)',
          options: [
            '5 - Todas correctas (año, estación, mes, fecha, día)',
            '4 - 4 correctas',
            '3 - 3 correctas',
            '2 - 2 correctas',
            '1 - 1 correcta',
            '0 - Ninguna correcta'
          ],
          score: 0
        },
        {
          id: 'orientation_place',
          label: 'Orientación Espacial (5 puntos)',
          options: [
            '5 - Todas correctas (país, provincia, ciudad, hospital, piso)',
            '4 - 4 correctas',
            '3 - 3 correctas',
            '2 - 2 correctas',
            '1 - 1 correcta',
            '0 - Ninguna correcta'
          ],
          score: 0
        },
        {
          id: 'registration',
          label: 'Registro de 3 palabras (3 puntos)',
          options: [
            '3 - Las 3 palabras repetidas correctamente',
            '2 - 2 palabras correctas',
            '1 - 1 palabra correcta',
            '0 - Ninguna palabra correcta'
          ],
          score: 0
        },
        {
          id: 'attention_calculation',
          label: 'Atención y Cálculo (5 puntos)',
          options: [
            '5 - Todas las restas correctas (100-7, 93-7, 86-7, 79-7, 72-7)',
            '4 - 4 restas correctas',
            '3 - 3 restas correctas', 
            '2 - 2 restas correctas',
            '1 - 1 resta correcta',
            '0 - Ninguna resta correcta'
          ],
          score: 0
        },
        {
          id: 'recall',
          label: 'Recuerdo de 3 palabras (3 puntos)',
          options: [
            '3 - Las 3 palabras recordadas',
            '2 - 2 palabras recordadas',
            '1 - 1 palabra recordada',
            '0 - Ninguna palabra recordada'
          ],
          score: 0
        },
        {
          id: 'naming',
          label: 'Denominación (2 puntos)',
          options: [
            '2 - Nombra correctamente lápiz y reloj',
            '1 - Nombra 1 objeto correctamente',
            '0 - No nombra ningún objeto'
          ],
          score: 0
        },
        {
          id: 'repetition',
          label: 'Repetición (1 punto)',
          options: [
            '1 - Repite correctamente la frase',
            '0 - No repite correctamente'
          ],
          score: 0
        },
        {
          id: 'comprehension',
          label: 'Comprensión verbal (3 puntos)',
          options: [
            '3 - Ejecuta las 3 órdenes correctamente',
            '2 - Ejecuta 2 órdenes correctamente',
            '1 - Ejecuta 1 orden correctamente',
            '0 - No ejecuta ninguna orden'
          ],
          score: 0
        },
        {
          id: 'reading',
          label: 'Lectura (1 punto)',
          options: [
            '1 - Lee y ejecuta "Cierre los ojos"',
            '0 - No lee o no ejecuta correctamente'
          ],
          score: 0
        },
        {
          id: 'writing',
          label: 'Escritura (1 punto)',
          options: [
            '1 - Escribe una oración completa con sentido',
            '0 - No escribe o la oración no tiene sentido'
          ],
          score: 0
        },
        {
          id: 'copying',
          label: 'Copia de pentágonos (1 punto)',
          options: [
            '1 - Copia correctamente los pentágonos entrelazados',
            '0 - No copia correctamente'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'hoehn_yahr',
      name: 'Escala de Hoehn y Yahr',
      category: 'Parkinson',
      description: 'Estadificación de la progresión de la enfermedad de Parkinson',
      items: [
        {
          id: 'stage',
          label: 'Estadio de Hoehn y Yahr',
          options: [
            '0 - Sin signos de enfermedad',
            '1 - Enfermedad unilateral únicamente',
            '1.5 - Compromiso unilateral y axial',
            '2 - Enfermedad bilateral sin alteración del equilibrio',
            '2.5 - Enfermedad bilateral leve con recuperación en la prueba de retropulsión',
            '3 - Enfermedad bilateral leve a moderada; cierta inestabilidad postural; físicamente independiente',
            '4 - Incapacidad grave; aún capaz de caminar o mantenerse en pie sin ayuda',
            '5 - Confinado a silla de ruedas o cama a menos que reciba ayuda'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'edss',
      name: 'EDSS (Expanded Disability Status Scale)',
      category: 'Esclerosis Múltiple',
      description: 'Evaluación de discapacidad en esclerosis múltiple',
      items: [
        {
          id: 'pyramidal_functions',
          label: 'Funciones Piramidales',
          options: [
            '0 - Normal',
            '1 - Signos anormales sin discapacidad',
            '2 - Discapacidad mínima',
            '3 - Paraparesia o hemiparesia leve a moderada; monoparesia severa',
            '4 - Paraparesia o hemiparesia marcada; cuadriparesia moderada',
            '5 - Paraplejía, hemiplejía o cuadriparesia marcada',
            '6 - Cuadriplejía'
          ],
          score: 0
        },
        {
          id: 'cerebellar_functions',
          label: 'Funciones Cerebelares',
          options: [
            '0 - Normal',
            '1 - Signos anormales sin discapacidad',
            '2 - Ataxia leve en cualquier miembro',
            '3 - Ataxia moderada del tronco o extremidades',
            '4 - Ataxia severa en todos los miembros',
            '5 - Incapaz de realizar movimientos coordinados'
          ],
          score: 0
        },
        {
          id: 'brainstem_functions',
          label: 'Funciones del Tronco Encefálico',
          options: [
            '0 - Normal',
            '1 - Solo signos',
            '2 - Nistagmo moderado u otra discapacidad leve',
            '3 - Nistagmo severo, debilidad extraocular marcada o discapacidad moderada',
            '4 - Disartria severa u otra discapacidad marcada',
            '5 - Incapacidad para tragar o hablar'
          ],
          score: 0
        },
        {
          id: 'sensory_functions',
          label: 'Funciones Sensoriales',
          options: [
            '0 - Normal',
            '1 - Disminución de vibración o grafestesia en 1-2 extremidades',
            '2 - Disminución táctil leve o de dolor o posicional y/o disminución moderada de vibración en 1-2 extremidades',
            '3 - Disminución táctil moderada o de dolor, disminución posicional y/o pérdida de vibración en 1-2 extremidades',
            '4 - Disminución táctil marcada o pérdida de dolor o pérdida posicional y/o pérdida de vibración en 1-2 extremidades',
            '5 - Pérdida sensorial esencialmente en 1-2 extremidades',
            '6 - Pérdida sensorial esencialmente por debajo de la cabeza'
          ],
          score: 0
        },
        {
          id: 'bowel_bladder',
          label: 'Función Vesical e Intestinal',
          options: [
            '0 - Normal',
            '1 - Síntomas urinarios leves sin incontinencia',
            '2 - Urgencia urinaria moderada o incontinencia intestinal rara',
            '3 - Urgencia urinaria frecuente o incontinencia urinaria ocasional',
            '4 - Casi diaria incontinencia urinaria y/o uso regular de catéter',
            '5 - Pérdida de función vesical',
            '6 - Pérdida de función vesical e intestinal'
          ],
          score: 0
        },
        {
          id: 'visual_functions',
          label: 'Funciones Visuales',
          options: [
            '0 - Normal',
            '1 - Escotoma con agudeza visual (AV) mejor que 20/30',
            '2 - Peor ojo con escotoma con AV de 20/30 a 20/59',
            '3 - Peor ojo con escotoma grande o reducción moderada de campos, pero con AV de 20/60 a 20/99',
            '4 - Peor ojo con reducción marcada de campos y AV de 20/100 a 20/200',
            '5 - Peor ojo con AV menor que 20/200',
            '6 - Grado 5 más mejor ojo con AV menor que 20/60'
          ],
          score: 0
        },
        {
          id: 'cerebral_functions',
          label: 'Funciones Cerebrales (Mentales)',
          options: [
            '0 - Normal',
            '1 - Solo cambios del humor (no afecta puntaje de discapacidad)',
            '2 - Disminución leve de la mentalidad',
            '3 - Disminución moderada de la mentalidad',
            '4 - Disminución marcada de la mentalidad',
            '5 - Demencia o síndrome cerebral crónico'
          ],
          score: 0
        },
        {
          id: 'ambulation',
          label: 'Capacidad de Deambulación',
          options: [
            '0 - Camina normalmente, sin limitaciones (EDSS 0-3.5)',
            '1 - Camina sin ayuda 500+ metros (EDSS 4.0)',
            '2 - Camina sin ayuda 300-499 metros (EDSS 4.5)',
            '3 - Camina sin ayuda 200-299 metros (EDSS 5.0)',
            '4 - Camina sin ayuda 100-199 metros (EDSS 5.5)',
            '5 - Camina sin ayuda hasta 100 metros (EDSS 6.0)',
            '6 - Requiere ayuda unilateral constante para caminar 100 metros (EDSS 6.5)',
            '7 - Requiere ayuda bilateral constante para caminar 20 metros (EDSS 7.0)',
            '8 - No puede caminar más de 5 metros aún con ayuda (EDSS 7.5)',
            '9 - Esencialmente restringido a silla de ruedas (EDSS 8.0)',
            '10 - Confinado a cama (EDSS 8.5-9.5)'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'engel',
      name: 'Escala de Engel (Epilepsia)',
      category: 'Epilepsia',
      description: 'Evaluación de resultados post-quirúrgicos en epilepsia',
      items: [
        {
          id: 'seizure_outcome',
          label: 'Resultado post-quirúrgico',
          options: [
            'Clase I - Libre de crisis incapacitantes',
            'Clase II - Crisis incapacitantes raras',
            'Clase III - Mejoría significativa',
            'Clase IV - Sin mejoría significativa'
          ],
          score: 0
        },
        {
          id: 'subclass',
          label: 'Subclasificación (si aplica)',
          options: [
            'A - Completamente libre de crisis',
            'B - Solo auras no incapacitantes',
            'C - Crisis generalizadas solo con suspensión de medicación',
            'D - Crisis generalizadas con enfermedad febril'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'moca',
      name: 'MoCA (Montreal Cognitive Assessment)',
      category: 'Evaluación Cognitiva',
      description: 'Evaluación cognitiva breve para detección de deterioro cognitivo leve',
      items: [
        {
          id: 'visuospatial',
          label: 'Habilidades visuoespaciales/ejecutivas (5 puntos)',
          options: [
            '5 - Todas las tareas correctas (sendero, cubo, reloj)',
            '4 - 4 tareas correctas',
            '3 - 3 tareas correctas',
            '2 - 2 tareas correctas',
            '1 - 1 tarea correcta',
            '0 - Ninguna tarea correcta'
          ],
          score: 0
        },
        {
          id: 'naming',
          label: 'Denominación (3 puntos)',
          options: [
            '3 - León, rinoceronte, camello correctos',
            '2 - 2 animales correctos',
            '1 - 1 animal correcto',
            '0 - Ningún animal correcto'
          ],
          score: 0
        },
        {
          id: 'attention',
          label: 'Atención (6 puntos)',
          options: [
            '6 - Todas las tareas correctas (dígitos, vigilancia, resta)',
            '5 - 5 elementos correctos',
            '4 - 4 elementos correctos',
            '3 - 3 elementos correctos',
            '2 - 2 elementos correctos',
            '1 - 1 elemento correcto',
            '0 - Ningún elemento correcto'
          ],
          score: 0
        },
        {
          id: 'language',
          label: 'Lenguaje (3 puntos)',
          options: [
            '3 - Repetición y fluidez correctas',
            '2 - Una tarea correcta completamente',
            '1 - Parcialmente correcto',
            '0 - Ambas tareas incorrectas'
          ],
          score: 0
        },
        {
          id: 'abstraction',
          label: 'Abstracción (2 puntos)',
          options: [
            '2 - Ambas analogías correctas',
            '1 - Una analogía correcta',
            '0 - Ninguna analogía correcta'
          ],
          score: 0
        },
        {
          id: 'memory',
          label: 'Memoria diferida (5 puntos)',
          options: [
            '5 - Las 5 palabras recordadas',
            '4 - 4 palabras recordadas',
            '3 - 3 palabras recordadas',
            '2 - 2 palabras recordadas',
            '1 - 1 palabra recordada',
            '0 - Ninguna palabra recordada'
          ],
          score: 0
        },
        {
          id: 'orientation',
          label: 'Orientación (6 puntos)',
          options: [
            '6 - Todas correctas (fecha, mes, año, día, lugar, ciudad)',
            '5 - 5 correctas',
            '4 - 4 correctas',
            '3 - 3 correctas',
            '2 - 2 correctas',
            '1 - 1 correcta',
            '0 - Ninguna correcta'
          ],
          score: 0
        }
      ]
    },
    {
      id: 'hit6',
      name: 'HIT-6 (Headache Impact Test)',
      category: 'Cefalea',
      description: 'Evaluación del impacto de la cefalea en la vida diaria',
      items: [
        {
          id: 'work_school_activities',
          label: '¿Con qué frecuencia el dolor de cabeza limitó su capacidad para realizar actividades de trabajo o escolares?',
          options: [
            '6 - Siempre',
            '8 - Muy frecuentemente',
            '10 - Algunas veces',
            '11 - Rara vez',
            '6 - Nunca'
          ],
          score: 0
        },
        {
          id: 'household_activities',
          label: '¿Con qué frecuencia el dolor de cabeza limitó su capacidad para realizar actividades domésticas?',
          options: [
            '6 - Siempre',
            '8 - Muy frecuentemente',
            '10 - Algunas veces',
            '11 - Rara vez',
            '6 - Nunca'
          ],
          score: 0
        },
        {
          id: 'social_activities',
          label: '¿Con qué frecuencia evitó actividades familiares, sociales debido al dolor de cabeza?',
          options: [
            '6 - Siempre',
            '8 - Muy frecuentemente',
            '10 - Algunas veces',
            '11 - Rara vez',
            '6 - Nunca'
          ],
          score: 0
        },
        {
          id: 'concentration',
          label: '¿Con qué frecuencia tuvo dificultad para concentrarse debido al dolor de cabeza?',
          options: [
            '6 - Siempre',
            '8 - Muy frecuentemente',
            '10 - Algunas veces',
            '11 - Rara vez',
            '6 - Nunca'
          ],
          score: 0
        },
        {
          id: 'energy_fatigue',
          label: '¿Con qué frecuencia se sintió muy cansado debido al dolor de cabeza?',
          options: [
            '6 - Siempre',
            '8 - Muy frecuentemente',
            '10 - Algunas veces',
            '11 - Rara vez',
            '6 - Nunca'
          ],
          score: 0
        },
        {
          id: 'mood',
          label: '¿Con qué frecuencia se sintió harto o irritado debido al dolor de cabeza?',
          options: [
            '6 - Siempre',
            '8 - Muy frecuentemente',
            '10 - Algunas veces',
            '11 - Rara vez',
            '6 - Nunca'
          ],
          score: 0
        }
      ]
    }
];
