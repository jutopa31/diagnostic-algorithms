# 🤖 INSTRUCCIONES PARA CLAUDE CODE

## Sistema de Predicción de Escalas Médicas Auto-Actualizable

### 📋 RESUMEN EJECUTIVO

Este proyecto implementa un **sistema inteligente de predicción de escalas médicas** que se actualiza automáticamente cuando se agregan nuevas escalas. El sistema está diseñado para ser mantenido fácilmente por Claude Code sin intervención manual compleja.

### 🔧 CUANDO AGREGAR UNA NUEVA ESCALA MÉDICA

#### ✅ PASO 1: Agregar la Escala
```typescript
// En: src/scales-data.ts
export const medicalScales: Scale[] = [
  // ... escalas existentes
  {
    id: 'nueva_escala',
    name: 'Nombre Completo de la Escala',
    category: 'Categoría Médica',
    description: 'Descripción clara de qué evalúa',
    items: [
      // Ítems de la escala...
    ]
  }
];
```

#### ✅ PASO 2: El Sistema Se Auto-Actualiza
- ✅ **Automáticamente** genera patrones de detección
- ✅ **Automáticamente** extrae keywords relevantes
- ✅ **Automáticamente** calcula confianza base

#### 🔧 PASO 3: Solo SI la Predicción Falla
```typescript
// En: src/enhancedAIAnalyzer.ts - LÍNEA ~50
const MEDICAL_SYNONYMS: { [key: string]: string[] } = {
  // Agregar sinónimos para la nueva escala:
  'nueva_escala': ['sinonimo1', 'sinonimo2', 'termino_alternativo'],
  'keyword_importante': ['variacion1', 'variacion2']
};
```

### 🧪 TESTING DE NUEVA ESCALA

```typescript
// En navegador o console:
import { testAnalysis } from './enhancedAIAnalyzer';

// Probar con texto de ejemplo
testAnalysis(
  'Paciente presenta temblor de reposo y rigidez',
  ['parkinson_diagnosis', 'updrs1'] // Escalas esperadas
);
```

### 📊 ESTRUCTURA DEL SISTEMA

```
src/
├── enhancedAIAnalyzer.ts    🚀 SISTEMA PRINCIPAL
│   ├── MEDICAL_SYNONYMS     🔧 ÁREA EDITABLE
│   ├── Auto-generación      ✅ AUTO-ACTUALIZABLE  
│   ├── Análisis contextual  ✅ AUTO-ACTUALIZABLE
│   └── Funciones de debug   🧪 PARA TESTING
│
├── scales-data.ts           📋 ESCALAS MÉDICAS
├── aiTextAnalyzer.ts        📜 SISTEMA ANTERIOR (mantener)
└── types.ts                 📝 TIPOS
```

### 🎯 CARACTERÍSTICAS AVANZADAS

#### 🔍 Detección de Negaciones
- "**sin** temblor" → Reduce confianza para escalas de Parkinson
- "**ausencia de** dificultad" → Ajusta predicciones

#### 📏 Análisis de Proximidad  
- Keywords **cercanas** = Mayor confianza
- "temblor de reposo bilateral" → Boost para Parkinson

#### ⚡ Análisis de Severidad
- "**severo**", "**agudo**" → Boost de confianza 1.5x
- "**leve**", "**mínimo**" → Reducción 0.9x

#### 🎨 Especialización por Categoría
- **Psiquiátricas**: +30% confianza base
- **Neurológicas**: +20% confianza base  
- **Cognitivas**: +30% confianza base

### 🚨 CASOS ESPECIALES

#### Si una Escala NO se Detecta:
1. Ejecutar `debugPatterns()` para ver keywords generados
2. Agregar sinónimos en `MEDICAL_SYNONYMS`
3. Probar con `testAnalysis()`

#### Si Hay Demasiados Falsos Positivos:
1. Verificar keywords muy genéricos
2. Ajustar `baseConfidence` por categoría
3. Revisar negaciones

### 📈 MONITOREO Y DEBUGGING

```typescript
// Ver todos los patrones generados
debugPatterns();

// Probar análisis específico  
testAnalysis('Texto médico aquí', ['escala_esperada']);

// Ver sugerencias en tiempo real
const resultado = analyzeTextEnhanced('Paciente con depresión severa');
console.log(resultado.suggestions);
```

### 🔄 FLUJO DE TRABAJO RECOMENDADO

1. **Agregar escala nueva** en `scales-data.ts`
2. **Probar inmediatamente** con `testAnalysis()`
3. **Si falla**: Agregar sinónimos específicos
4. **Re-probar** hasta obtener detección correcta
5. **Documentar** casos especiales encontrados

### ⚙️ CONFIGURACIÓN TÉCNICA

#### Umbrales de Confianza:
- **Mínimo**: 0.08 (muy sensible para uso médico)
- **Máximo resultados**: 6 sugerencias
- **Debounce**: 1000ms (1 segundo)

#### Performance:
- **Auto-generación**: ~5ms por análisis
- **Cache**: Patrones se generan una vez por sesión
- **Memoria**: Ligero (~2MB adicional)

### 📚 EJEMPLOS DE USO EXITOSO

```typescript
// Ejemplo 1: Detección de Depresión
testAnalysis(
  'Paciente refiere tristeza persistente, pérdida de interés y pensamientos suicidas desde hace 3 semanas',
  ['major_depressive_disorder', 'beck_depression_inventory']
);
// ✅ RESULTADO: Detección exitosa

// Ejemplo 2: Detección de Parkinson
testAnalysis(
  'Presenta temblor de reposo unilateral y bradiquinesia en mano derecha',
  ['parkinson_diagnosis', 'updrs3']  
);
// ✅ RESULTADO: Detección exitosa

// Ejemplo 3: Detección de Stroke
testAnalysis(
  'Paciente con hemiparesia izquierda súbita y disartria',
  ['nihss', 'mrs']
);
// ✅ RESULTADO: Detección exitosa
```

### 🔮 FUTURAS MEJORAS SUGERIDAS

1. **Machine Learning**: Entrenar modelo con casos reales
2. **Análisis temporal**: "desde hace 2 semanas" → TDM
3. **Análisis de comorbilidades**: Multiple escalas simultáneas
4. **Integración con OpenAI**: Como sistema híbrido opcional

---

## ⚡ COMANDOS RÁPIDOS PARA CLAUDE CODE

```bash
# Testing inmediato de nueva escala
npm run dev
# Abrir browser console
# Ejecutar: testAnalysis('texto de prueba', ['escala_esperada'])

# Ver todos los patrones generados  
# En console: debugPatterns()

# Análisis en tiempo real
# Escribir en el textarea principal y ver sugerencias
```

---

**🎯 OBJETIVO**: Mantener el sistema funcionando con **CERO mantenimiento manual** para el 95% de nuevas escalas agregadas.

**✅ RESULTADO ESPERADO**: Cada vez que agregues una escala, el sistema debe detectarla inmediatamente sin código adicional.

**🔧 INTERVENCIÓN MANUAL**: Solo agregar sinónimos si la detección falla (<5% de los casos).