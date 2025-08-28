# 🧪 GUÍA DE TESTING - Sistema de Predicción IA

## ⚡ TESTING INMEDIATO

### 1. **Abrir la Aplicación**
```bash
npm run dev
# Ir a http://localhost:5173
```

### 2. **Abrir DevTools**
```
Presionar F12 → Ir a tab "Console"
```

### 3. **Probar Detección Básica**

Escribe en el campo de texto de la derecha (uno por uno):

#### ✅ **CASOS QUE DEBEN FUNCIONAR:**

**Test 1: Depresión**
```
deprimido
```
**Esperado:** Debe aparecer grupo "🤖 Sugerencias IA" con escalas de depresión

**Test 2: Parkinson**  
```
temblor
```
**Esperado:** Debe aparecer grupo "🤖 Sugerencias IA" con escalas de Parkinson

**Test 3: Stroke**
```
hemiparesia
```
**Esperado:** Debe aparecer grupo "🤖 Sugerencias IA" con escalas de stroke

**Test 4: Cognitivo**
```
memoria
```
**Esperado:** Debe aparecer grupo "🤖 Sugerencias IA" con escalas cognitivas

### 4. **Verificar en Console**

En DevTools Console deberías ver:
```
🚀 Enhanced AI Analyzer - Analyzing text: deprimido...
🎯 FORCED DETECTION: "deprimido" found in text
✅ SUGERENCIAS DETECTADAS: ['major_depressive_disorder', 'beck_depression_inventory']
```

### 5. **Testing Manual en Console**

Si algo no funciona, probar directamente en console:
```javascript
// Analizar texto directamente
analyzeTextEnhanced('deprimido')

// Ver todos los patrones  
debugPatterns()

// Test específico
testAnalysis('deprimido', ['major_depressive_disorder'])
```

## 🔍 DEBUGGING SI NO FUNCIONA

### **Problema: No aparecen sugerencias**

1. **Verificar Console Errors:**
   - Buscar errores rojos en console
   - Verificar que `analyzeTextEnhanced` está disponible

2. **Verificar Sistema Activo:**
```javascript
// En console del browser
console.log(typeof analyzeTextEnhanced)
// Debe mostrar: "function"
```

3. **Test Manual Forzado:**
```javascript
// Ejecutar en console
const result = analyzeTextEnhanced('deprimido');
console.log('Resultado manual:', result);
```

### **Problema: Funciona en console pero no en UI**

1. **Verificar importación:**
   - Sistema debe usar `useEnhancedAIAnalysis`
   - NO `useAITextAnalysis` (sistema anterior)

2. **Verificar delay:**
   - Esperar 500ms después de escribir
   - Delay configurado: 500ms

## 📊 CASOS COMPLETOS DE PRUEBA

### **Test Completo de Depresión:**
```
Texto: "Paciente deprimido con tristeza persistente"
Esperado: 
- Aparece grupo "🤖 Sugerencias IA"
- Contiene: "Algoritmo Diagnóstico - Trastorno Depresivo Mayor"
- Console muestra: FORCED DETECTION: "deprimido" found
```

### **Test Completo de Parkinson:**
```
Texto: "Presenta temblor de reposo"
Esperado:
- Aparece grupo "🤖 Sugerencias IA" 
- Contiene escalas de Parkinson (UPDRS, etc)
- Console muestra: FORCED DETECTION: "temblor" found
```

## ⚠️ SI NADA FUNCIONA

### Verificación Final:
```javascript
// En console del navegador:
console.log('Sistema cargado:', typeof analyzeTextEnhanced !== 'undefined');
console.log('Función hook:', typeof useEnhancedAIAnalysis !== 'undefined');

// Test directo
analyzeTextEnhanced('deprimido');
```

Si las funciones no están definidas, hay un problema de importación/compilación.

---

**🎯 OBJETIVO:** Al escribir "deprimido" debe aparecer instantáneamente el grupo "🤖 Sugerencias IA" con escalas de depresión.