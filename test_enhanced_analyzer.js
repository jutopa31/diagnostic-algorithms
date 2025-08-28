/**
 * 🧪 SCRIPT DE TESTING PARA EL SISTEMA MEJORADO
 * 
 * Ejecutar en el navegador después de cargar la aplicación:
 * 1. Abrir aplicación en http://localhost:5173
 * 2. Abrir DevTools (F12) 
 * 3. Copiar y pegar este código en la consola
 * 4. Ejecutar: runAllTests()
 */

// Casos de prueba médicos reales
const TEST_CASES = [
  // Neurológicos - NIHSS/Stroke
  {
    text: "Paciente de 65 años presenta hemiparesia izquierda de inicio súbito hace 2 horas, acompañado de disartria y desviación de la mirada hacia la derecha. Glasgow 14/15.",
    expected: ['nihss', 'glasgow', 'mrs'],
    description: "Stroke agudo típico"
  },
  
  // Parkinson
  {
    text: "Hombre de 70 años con temblor de reposo en mano derecha, rigidez en rueda dentada y bradicinesia bilateral. Inicio gradual hace 3 años.",
    expected: ['parkinson_diagnosis', 'updrs3', 'hoehn_yahr'],
    description: "Parkinson clásico"
  },
  
  // Psiquiátrico - Depresión
  {
    text: "Paciente refiere tristeza persistente, pérdida total de interés en actividades, insomnio terminal, fatiga extrema y pensamientos suicidas recurrentes. Síntomas desde hace 6 semanas.",
    expected: ['major_depressive_disorder', 'beck_depression_inventory'],
    description: "Trastorno depresivo mayor severo"
  },
  
  // Cognitivo
  {
    text: "Mujer de 78 años con deterioro progresivo de la memoria episódica, desorientación temporal y espacial, dificultades en actividades instrumentales de la vida diaria.",
    expected: ['mmse', 'moca'],
    description: "Deterioro cognitivo - posible demencia"
  },
  
  // Neuropsiquiátrico en demencia
  {
    text: "Paciente con demencia presenta agitación nocturna, alucinaciones visuales, comportamientos repetitivos y agresión verbal hacia cuidadores.",
    expected: ['neuropsychiatric_inventory'],
    description: "Síntomas neuropsiquiátricos en demencia"
  },
  
  // Cardiovascular
  {
    text: "Paciente con fibrilación auricular, hipertensión no controlada, diabetes tipo 2 y antecedente de ACV isquémico hace 1 año. Requiere evaluación para anticoagulación.",
    expected: ['cha2ds2vasc', 'hasbled'],
    description: "Fibrilación auricular - riesgo embólico"
  },
  
  // Cefalea/Migraña
  {
    text: "Mujer de 35 años con cefaleas recurrentes que interfieren significativamente con el trabajo, perdiendo 8 días laborales el mes pasado por episodios severos.",
    expected: ['midas', 'hit6'],
    description: "Migraña discapacitante"
  },
  
  // Caso con negaciones (debe reducir confianza)
  {
    text: "Paciente niega temblor, sin rigidez muscular, ausencia de bradicinesia. Movimientos normales y simétricos.",
    expected: [], // No debería sugerir Parkinson
    description: "Negaciones - no Parkinson"
  },
  
  // Esclerosis Múltiple
  {
    text: "Paciente joven con brotes neurológicos recurrentes, lesiones desmielinizantes en resonancia magnética, bandas oligoclonales positivas en LCR.",
    expected: ['mcdonald_2024', 'edss'],
    description: "Esclerosis múltiple"
  },
  
  // Hemorragia intracerebral
  {
    text: "Varón de 55 años con cefalea súbita thunderclap, deterioro del nivel de conciencia (Glasgow 8), hematoma cerebeloso de 40ml con extensión intraventricular.",
    expected: ['ich_score', 'glasgow'],
    description: "Hemorragia intracerebral"
  }
];

/**
 * Ejecuta todos los tests automáticamente
 */
function runAllTests() {
  console.log('\n🧪 ===============================');
  console.log('🧪 TESTING SISTEMA MEJORADO DE IA');
  console.log('🧪 ===============================\n');
  
  let totalTests = TEST_CASES.length;
  let passedTests = 0;
  let failedTests = [];
  
  // Importar la función de análisis
  if (typeof analyzeTextEnhanced === 'undefined') {
    console.error('❌ ERROR: analyzeTextEnhanced no está disponible. Asegúrate de que la aplicación esté cargada.');
    return;
  }
  
  TEST_CASES.forEach((testCase, index) => {
    console.log(`\n📝 Test ${index + 1}/${totalTests}: ${testCase.description}`);
    console.log(`📄 Texto: "${testCase.text.substring(0, 100)}..."`);
    console.log(`🎯 Esperado: [${testCase.expected.join(', ')}]`);
    
    // Ejecutar análisis
    const result = analyzeTextEnhanced(testCase.text);
    const foundScales = result.suggestions.map(s => s.scaleId);
    
    console.log(`🔍 Encontrado: [${foundScales.join(', ')}]`);
    
    // Evaluar resultado
    let testPassed = true;
    let details = [];
    
    // Si espera escalas específicas
    if (testCase.expected.length > 0) {
      const missingScales = testCase.expected.filter(scale => !foundScales.includes(scale));
      const extraScales = foundScales.filter(scale => !testCase.expected.includes(scale));
      
      if (missingScales.length > 0) {
        testPassed = false;
        details.push(`Faltan: ${missingScales.join(', ')}`);
      }
      
      // Solo marcar como fallo si hay muchas escalas extra irrelevantes
      if (extraScales.length > 3) {
        details.push(`Extras: ${extraScales.join(', ')}`);
      }
      
      // Evaluar confianza de escalas esperadas
      const confidenceInfo = testCase.expected.map(scale => {
        const suggestion = result.suggestions.find(s => s.scaleId === scale);
        return suggestion ? `${scale}: ${(suggestion.confidence * 100).toFixed(1)}%` : `${scale}: NO DETECTADO`;
      });
      
      console.log(`📊 Confianzas: ${confidenceInfo.join(', ')}`);
      
    } else {
      // Caso de negación - no debería sugerir nada relevante
      if (foundScales.length > 2) {
        testPassed = false;
        details.push(`Demasiadas sugerencias para caso de negación`);
      }
    }
    
    if (testPassed) {
      console.log(`✅ PASÓ`);
      passedTests++;
    } else {
      console.log(`❌ FALLÓ: ${details.join(', ')}`);
      failedTests.push({
        index: index + 1,
        description: testCase.description,
        details: details
      });
    }
  });
  
  // Resumen final
  console.log('\n📈 ===============================');
  console.log(`📈 RESUMEN DE RESULTADOS`);
  console.log('📈 ===============================');
  console.log(`✅ Tests exitosos: ${passedTests}/${totalTests} (${Math.round(passedTests/totalTests * 100)}%)`);
  console.log(`❌ Tests fallidos: ${failedTests.length}/${totalTests}`);
  
  if (failedTests.length > 0) {
    console.log('\n❌ DETALLES DE FALLOS:');
    failedTests.forEach(failure => {
      console.log(`   ${failure.index}. ${failure.description}: ${failure.details.join(', ')}`);
    });
  }
  
  // Evaluación del sistema
  const successRate = passedTests / totalTests;
  if (successRate >= 0.8) {
    console.log('\n🎉 SISTEMA FUNCIONANDO CORRECTAMENTE (≥80% éxito)');
  } else if (successRate >= 0.6) {
    console.log('\n⚠️  SISTEMA NECESITA AJUSTES MENORES (60-80% éxito)');
  } else {
    console.log('\n🚨 SISTEMA NECESITA REVISIÓN MAYOR (<60% éxito)');
  }
  
  return {
    total: totalTests,
    passed: passedTests,
    failed: failedTests.length,
    successRate: successRate,
    details: failedTests
  };
}

/**
 * Test individual para debugging
 */
function testSingle(text, expectedScales = []) {
  console.log('\n🔬 TEST INDIVIDUAL:');
  console.log(`📄 Texto: "${text}"`);
  
  if (typeof analyzeTextEnhanced === 'undefined') {
    console.error('❌ ERROR: analyzeTextEnhanced no está disponible.');
    return;
  }
  
  const result = analyzeTextEnhanced(text);
  console.log(`🔍 Sugerencias encontradas: ${result.suggestions.length}`);
  
  result.suggestions.forEach((suggestion, index) => {
    console.log(`   ${index + 1}. ${suggestion.scaleId}: ${(suggestion.confidence * 100).toFixed(1)}% (${suggestion.reason})`);
    console.log(`      Keywords: ${suggestion.keywords.slice(0, 5).join(', ')}`);
  });
  
  if (expectedScales.length > 0) {
    const found = result.suggestions.map(s => s.scaleId);
    const missing = expectedScales.filter(scale => !found.includes(scale));
    
    if (missing.length === 0) {
      console.log('✅ Todas las escalas esperadas fueron detectadas');
    } else {
      console.log(`❌ Escalas faltantes: ${missing.join(', ')}`);
    }
  }
  
  return result;
}

/**
 * Ver todos los patrones generados automáticamente
 */
function showPatterns() {
  console.log('\n🔍 PATRONES AUTO-GENERADOS:');
  
  if (typeof debugPatterns === 'undefined') {
    console.error('❌ ERROR: debugPatterns no está disponible.');
    return;
  }
  
  return debugPatterns();
}

// Instrucciones de uso
console.log('\n🤖 SISTEMA DE TESTING CARGADO');
console.log('📋 Comandos disponibles:');
console.log('   runAllTests()     - Ejecuta todos los tests');
console.log('   testSingle(text)  - Test individual');
console.log('   showPatterns()    - Ver patrones generados');
console.log('\n💡 Ejemplo: testSingle("Paciente con temblor y rigidez", ["parkinson_diagnosis"])');

// Auto-ejecutar si se desea
// runAllTests(); // Descomenta para ejecutar automáticamente