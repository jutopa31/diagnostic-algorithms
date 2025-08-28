import { AISuggestion, AIAnalysisResult } from './types';

interface MedicalPattern {
  keywords: string[];
  scaleId: string;
  reason: string;
  baseConfidence: number;
}

// Patrones médicos para detección de escalas relevantes
const MEDICAL_PATTERNS: MedicalPattern[] = [
  // NIHSS - Ictus
  {
    keywords: ['ictus', 'avc', 'stroke', 'hemiparesia', 'hemiplejia', 'disartria', 'disfagia', 'afasia', 'desviacion conjugada', 'negligencia', 'ataxia', 'deficit motor', 'deficit sensitivo', 'campo visual', 'debilidad', 'paralisis'],
    scaleId: 'nihss',
    reason: 'Síntomas compatibles con ictus agudo',
    baseConfidence: 0.85
  },
  
  // Glasgow Coma Scale
  {
    keywords: ['glasgow', 'conciencia', 'coma', 'estupor', 'confuso', 'desorientado', 'respuesta verbal', 'apertura ocular', 'respuesta motora', 'tce', 'traumatismo craneal'],
    scaleId: 'glasgow',
    reason: 'Alteración del nivel de conciencia',
    baseConfidence: 0.8
  },
  
  // UPDRS - Parkinson
  {
    keywords: ['parkinson', 'temblor', 'rigidez', 'bradicinesia', 'bradiciensia', 'bradiquinesia', 'acinesia', 'festinacion', 'micrografia', 'hipomimia', 'freezing', 'discinesias', 'fluctuaciones motoras', 'trastorno movimiento'],
    scaleId: 'updrs1',
    reason: 'Síntomas parkinsonianos detectados',
    baseConfidence: 0.75
  },
  {
    keywords: ['parkinson', 'temblor', 'rigidez', 'bradicinesia', 'bradiciensia', 'bradiquinesia', 'acinesia', 'festinacion', 'micrografia', 'hipomimia', 'freezing', 'discinesias', 'fluctuaciones motoras', 'trastorno movimiento'],
    scaleId: 'updrs2',
    reason: 'Síntomas parkinsonianos detectados',
    baseConfidence: 0.75
  },
  {
    keywords: ['parkinson', 'temblor', 'rigidez', 'bradicinesia', 'bradiciensia', 'bradiquinesia', 'acinesia', 'festinacion', 'micrografia', 'hipomimia', 'freezing', 'discinesias', 'fluctuaciones motoras', 'trastorno movimiento'],
    scaleId: 'updrs3',
    reason: 'Síntomas parkinsonianos detectados',
    baseConfidence: 0.75
  },
  {
    keywords: ['parkinson', 'temblor', 'rigidez', 'bradicinesia', 'bradiciensia', 'bradiquinesia', 'acinesia', 'festinacion', 'micrografia', 'hipomimia', 'freezing', 'discinesias', 'fluctuaciones motoras', 'trastorno movimiento'],
    scaleId: 'updrs4',
    reason: 'Síntomas parkinsonianos detectados',
    baseConfidence: 0.75
  },
  
  // Criterios diagnósticos Parkinson
  {
    keywords: ['parkinson', 'temblor de reposo', 'bradicinesia', 'rigidez', 'asimetría', 'levodopa', 'criterios diagnósticos'],
    scaleId: 'parkinson_diagnosis',
    reason: 'Evaluación diagnóstica de Parkinson',
    baseConfidence: 0.9
  },
  
  // Ashworth - Espasticidad
  {
    keywords: ['espasticidad', 'tono muscular', 'hipertonía', 'rigidez', 'contractura', 'clonus', 'reflejo aumentado', 'ashworth'],
    scaleId: 'ashworth',
    reason: 'Alteración del tono muscular',
    baseConfidence: 0.8
  },
  
  // McDonald - Esclerosis Múltiple
  {
    keywords: ['esclerosis múltiple', 'em', 'desmielinizante', 'lesiones', 'brotes', 'recaídas', 'gadolinio', 'bandas oligoclonales', 'dis', 'dit', 'mcdonald'],
    scaleId: 'mcdonald_2024',
    reason: 'Sospecha de esclerosis múltiple',
    baseConfidence: 0.85
  },
  
  // MIDAS - Migraña
  {
    keywords: ['migraña', 'migrana', 'cefalea', 'dolor cabeza', 'dolor de cabeza', 'discapacidad', 'trabajo perdido', 'productividad', 'actividades perdidas', 'dias perdidos', 'ausentismo'],
    scaleId: 'midas',
    reason: 'Evaluación de discapacidad por migraña',
    baseConfidence: 0.8
  },
  
  // MMSE - Evaluación Cognitiva
  {
    keywords: ['deterioro cognitivo', 'demencia', 'alzheimer', 'memoria', 'orientación', 'cálculo', 'denominación', 'repetición', 'mmse', 'minimental', 'mini mental', 'cognición', 'cognitivo'],
    scaleId: 'mmse',
    reason: 'Evaluación cognitiva necesaria',
    baseConfidence: 0.85
  },
  
  // Hoehn y Yahr - Parkinson
  {
    keywords: ['estadificación', 'estadificar', 'progresión', 'bilateral', 'unilateral', 'equilibrio', 'inestabilidad postural', 'hoehn', 'yahr', 'estadio parkinson'],
    scaleId: 'hoehn_yahr',
    reason: 'Estadificación de Parkinson',
    baseConfidence: 0.8
  },
  
  // EDSS - Esclerosis Múltiple
  {
    keywords: ['discapacidad', 'deambulación', 'caminar', 'sistemas funcionales', 'piramidal', 'cerebelar', 'cerebeloso', 'tronco cerebral', 'sensorial', 'vesical', 'visual', 'cerebral', 'edss'],
    scaleId: 'edss',
    reason: 'Evaluación de discapacidad en esclerosis múltiple',
    baseConfidence: 0.8
  },

  // === ESCALAS PSIQUIÁTRICAS ===
  
  // Trastorno Depresivo Mayor (DSM-5)
  {
    keywords: ['deprimido', 'depresion', 'depresivo', 'tristeza', 'animo bajo', 'estado de animo', 'anhedonia', 'falta de placer', 'desinteres', 'suicida', 'suicidio', 'pensamientos de muerte', 'fatiga', 'cansancio', 'insomnio', 'hipersomnia', 'culpa', 'inutilidad', 'concentracion', 'indecision', 'peso', 'apetito', 'psicomotor', 'agitacion', 'enlentecimiento', 'dsm', 'criterios diagnosticos', 'episodio depresivo mayor'],
    scaleId: 'major_depressive_disorder',
    reason: 'Síntomas compatibles con trastorno depresivo mayor',
    baseConfidence: 0.9
  },
  
  // Beck Depression Inventory (BDI-II)
  {
    keywords: ['deprimido', 'depresion', 'depresivo', 'tristeza', 'pesimismo', 'fracaso', 'culpa', 'autoestima', 'autocritica', 'llanto', 'irritabilidad', 'perdida interes', 'indecision', 'energia', 'sueño', 'fatiga', 'apetito', 'concentracion', 'beck', 'bdi', 'inventario depresion', 'autoevaluacion', 'severidad depresion'],
    scaleId: 'beck_depression_inventory',
    reason: 'Evaluación de severidad de síntomas depresivos',
    baseConfidence: 0.85
  },
  
  // Inventario Neuropsiquiátrico (NPI)
  {
    keywords: ['demencia', 'alzheimer', 'agitacion', 'agresion', 'alucinaciones', 'delirios', 'desinhibicion', 'apatia', 'irritabilidad', 'comportamiento', 'sintomas neuropsiquiatricos', 'cuidador', 'familiar', 'cambios personalidad', 'euforia', 'depresion demencia', 'ansiedad demencia', 'motor aberrante', 'nocturno', 'alimentacion', 'npi', 'neuropsiquiatrico'],
    scaleId: 'neuropsychiatric_inventory',
    reason: 'Síntomas neuropsiquiátricos en demencia',
    baseConfidence: 0.85
  },

  // === ESCALAS CARDIOVASCULARES Y STROKE ===
  
  // Modified Rankin Scale (mRS)
  {
    keywords: ['rankin', 'mrs', 'discapacidad funcional', 'independencia', 'actividades vida diaria', 'avd', 'resultado funcional', 'pronostico stroke', 'pronostico ictus', 'recuperacion', 'autonomia', 'dependencia'],
    scaleId: 'mrs',
    reason: 'Evaluación de resultado funcional post-ictus',
    baseConfidence: 0.8
  },
  
  // ASPECTS
  {
    keywords: ['aspects', 'alberta', 'ct', 'tomografia', 'territory acm', 'territorio cerebral media', 'isquemia temprana', 'trombolisis', 'reperfusion', 'infarto extenso', 'hemorragia sintomatica', 'ganglios basales', 'capsula interna', 'corteza'],
    scaleId: 'aspects',
    reason: 'Evaluación de extensión de isquemia temprana',
    baseConfidence: 0.85
  },
  
  // CHA2DS2-VASc
  {
    keywords: ['cha2ds2vasc', 'fibrilacion auricular', 'fa', 'riesgo embolico', 'anticoagulacion', 'acv embolico', 'tromboembolismo', 'warfarina', 'acenocumarol', 'apixaban', 'rivaroxaban', 'dabigatran', 'stroke cardioembolico'],
    scaleId: 'cha2ds2vasc',
    reason: 'Evaluación de riesgo embólico en fibrilación auricular',
    baseConfidence: 0.9
  },
  
  // HAS-BLED
  {
    keywords: ['hasbled', 'has bled', 'riesgo sangrado', 'riesgo hemorragico', 'anticoagulantes', 'hemorragia mayor', 'hipertension no controlada', 'funcion renal', 'funcion hepatica', 'inr labil', 'alcohol', 'farmacos'],
    scaleId: 'hasbled',
    reason: 'Evaluación de riesgo de sangrado con anticoagulantes',
    baseConfidence: 0.85
  },
  
  // ICH Score
  {
    keywords: ['ich score', 'hemorragia intracerebral', 'hematoma cerebral', 'volumen hematoma', 'intraventricular', 'infratentorial', 'pronostico hemorragia', 'mortalidad', 'resultado funcional hemorragico'],
    scaleId: 'ich_score',
    reason: 'Predicción pronóstica en hemorragia intracerebral',
    baseConfidence: 0.9
  },
  
  // Hunt and Hess
  {
    keywords: ['hunt hess', 'hemorragia subaracnoidea', 'hsa', 'aneurisma', 'cefalea thunderclap', 'rigidez nucal', 'fotofobia', 'hemiparesia', 'cirugia aneurisma', 'clip', 'coil', 'pronostico hsa'],
    scaleId: 'hunt_hess',
    reason: 'Graduación clínica en hemorragia subaracnoidea',
    baseConfidence: 0.85
  },

  // === ESCALAS COGNITIVAS Y DEMENCIA ===
  
  // Montreal Cognitive Assessment (MoCA)
  {
    keywords: ['moca', 'montreal', 'evaluacion cognitiva', 'deterioro cognitivo leve', 'dcl', 'screening cognitivo', 'visuoespacial', 'ejecutivo', 'atencion', 'lenguaje', 'abstraccion', 'memoria diferida', 'orientacion'],
    scaleId: 'moca',
    reason: 'Screening de deterioro cognitivo leve',
    baseConfidence: 0.85
  },
  
  // Clinical Dementia Rating (CDR)
  {
    keywords: ['cdr', 'clinical dementia rating', 'estadificacion demencia', 'severidad demencia', 'memoria', 'orientacion', 'juicio', 'solucion problemas', 'actividades comunitarias', 'hogar', 'cuidado personal'],
    scaleId: 'cdr',
    reason: 'Estadificación de severidad de demencia',
    baseConfidence: 0.8
  },
  
  // Escala de Engel
  {
    keywords: ['engel', 'epilepsia', 'cirugia epilepsia', 'resultado quirurgico', 'libre crisis', 'control epileptico', 'outcome', 'seguimiento postquirurgico', 'reseccion', 'lobectomia temporal'],
    scaleId: 'engel',
    reason: 'Evaluación de resultado en cirugía de epilepsia',
    baseConfidence: 0.9
  },

  // === ESCALAS DE CEFALEA ===
  
  // Headache Impact Test (HIT-6)
  {
    keywords: ['hit6', 'headache impact', 'impacto cefalea', 'discapacidad cefalea', 'trabajo escuela', 'actividades sociales', 'concentracion', 'fatiga cefalea', 'estado animo cefalea', 'calidad vida cefalea'],
    scaleId: 'hit6',
    reason: 'Evaluación del impacto de la cefalea',
    baseConfidence: 0.8
  }
];

// Función para normalizar texto (eliminar acentos, minúsculas)
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

// Función para calcular la confianza basada en coincidencias
const calculateConfidence = (
  normalizedText: string, 
  pattern: MedicalPattern
): number => {
  const words = normalizedText.split(' ');
  const matchedKeywords: string[] = [];
  
  console.log(`🔍 Testing pattern ${pattern.scaleId} against text:`, normalizedText.substring(0, 100));
  
  pattern.keywords.forEach(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    console.log(`  🔸 Testing keyword "${keyword}" -> "${normalizedKeyword}"`);
    
    // Buscar keyword completa o como parte de palabra
    if (normalizedText.includes(normalizedKeyword)) {
      matchedKeywords.push(keyword);
      console.log(`    ✅ MATCH found for "${keyword}"`);
    } else {
      console.log(`    ❌ No match for "${keyword}"`);
    }
  });
  
  console.log(`  📊 Pattern ${pattern.scaleId}: ${matchedKeywords.length} matches`);
  
  if (matchedKeywords.length === 0) return 0;
  
  // Calcular confianza basada en:
  // - Número de keywords coincidentes
  // - Longitud del texto (más texto = más contexto)
  // - Confianza base del patrón
  const keywordRatio = matchedKeywords.length / pattern.keywords.length;
  const textLengthFactor = Math.min(words.length / 50, 1); // Normalizar longitud
  const baseConfidence = pattern.baseConfidence;
  
  // Combinar factores - AJUSTADO para ser más sensible
  let confidence = baseConfidence * keywordRatio * (0.5 + 0.5 * textLengthFactor);
  
  // Boost si hay múltiples keywords del mismo patrón
  if (matchedKeywords.length >= 2) {
    confidence *= 1.3;
  }
  
  // Boost extra para keywords psiquiátricas específicas (mayor sensibilidad)
  const psychiatricKeywords = ['deprimido', 'depresion', 'depresivo', 'tristeza', 'suicida', 'demencia'];
  const hasPsychiatricKeyword = matchedKeywords.some(kw => 
    psychiatricKeywords.some(pk => normalizeText(kw).includes(normalizeText(pk)))
  );
  
  if (hasPsychiatricKeyword) {
    confidence *= 1.4; // Boost adicional para keywords psiquiátricas
  }
  
  // Para keywords médicas importantes, dar boost extra
  const importantKeywords = [
    // Neurológicas
    'temblor', 'hemiparesia', 'disartria', 'glasgow', 'ictus', 'debilidad', 'stroke', 'avc',
    // Psiquiátricas - CRÍTICO para detección de depresión
    'deprimido', 'depresion', 'depresivo', 'tristeza', 'suicida', 'suicidio', 'anhedonia',
    'demencia', 'alzheimer', 'agitacion', 'alucinaciones', 'delirios', 'comportamiento',
    // Cardiovasculares
    'fibrilacion auricular', 'anticoagulacion', 'hemorragia', 'sangrado',
    // Cognitivas
    'deterioro cognitivo', 'memoria', 'orientacion'
  ];
  const hasImportantKeyword = matchedKeywords.some(kw => 
    importantKeywords.some(imp => normalizeText(kw).includes(normalizeText(imp)))
  );
  
  if (hasImportantKeyword) {
    confidence *= 1.5; // Boost significativo para keywords médicas importantes
  }
  
  console.log(`  📈 Final confidence for ${pattern.scaleId}: ${confidence.toFixed(3)} (matches: ${matchedKeywords.length}, important: ${hasImportantKeyword})`);
  
  // Limitar entre 0 y 1
  return Math.min(confidence, 1);
};

// Función principal de análisis
export const analyzeText = (text: string): AIAnalysisResult => {
  console.log('🔍 AI Analyzer - Analyzing text:', text.substring(0, 100) + '...');
  
  if (!text || text.trim().length < 10) {
    console.log('❌ AI Analyzer - Text too short, skipping analysis');
    return {
      suggestions: [],
      timestamp: Date.now()
    };
  }
  
  const normalizedText = normalizeText(text);
  const suggestions: AISuggestion[] = [];
  
  MEDICAL_PATTERNS.forEach(pattern => {
    const confidence = calculateConfidence(normalizedText, pattern);
    
    if (confidence >= 0.05) { // Umbral ultra bajo para máxima sensibilidad médica
      const matchedKeywords = pattern.keywords.filter(keyword => 
        normalizedText.includes(normalizeText(keyword))
      );
      
      suggestions.push({
        scaleId: pattern.scaleId,
        confidence,
        keywords: matchedKeywords,
        reason: pattern.reason
      });
    }
  });
  
  // Ordenar por confianza descendente
  suggestions.sort((a, b) => b.confidence - a.confidence);
  
  // Limitar a las 5 mejores sugerencias
  const topSuggestions = suggestions.slice(0, 5);
  
  console.log('✅ AI Analyzer - Found suggestions:', topSuggestions.length);
  console.log('📊 AI Analyzer - Suggestions:', topSuggestions);
  
  return {
    suggestions: topSuggestions,
    timestamp: Date.now()
  };
};

// Hook personalizado para usar el analizador con debouncing
import { useState, useEffect } from 'react';

export const useAITextAnalysis = (text: string, delay: number = 1000) => {
  const [analysis, setAnalysis] = useState<AIAnalysisResult>({
    suggestions: [],
    timestamp: Date.now()
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const result = analyzeText(text);
      setAnalysis(result);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, delay]);
  
  return analysis;
};