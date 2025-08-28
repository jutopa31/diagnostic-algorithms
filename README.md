# Algoritmos Diagnósticos

Una aplicación web moderna para algoritmos diagnósticos y escalas clínicas con inteligencia artificial integrada.

## 🩺 Características

- **30+ Escalas Médicas**: NIHSS, Glasgow, UPDRS, BDI-II, NPI, y muchas más
- **Algoritmos Diagnósticos**: DSM-5, criterios de Parkinson, McDonald 2024
- **IA Integrada**: Sugerencias automáticas de escalas basadas en texto clínico
- **Interfaz Moderna**: Diseño responsivo con React y Tailwind CSS
- **Cálculos Automáticos**: Interpretación automática de resultados
- **Export de Datos**: Copia fácil de resultados al portapapeles

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Build para Producción

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📋 Escalas Disponibles

### Neurología
- **NIHSS**: Evaluación de ictus agudo
- **Glasgow**: Nivel de conciencia
- **mRS**: Resultado funcional post-ictus
- **ASPECTS**: Extensión de isquemia
- **ICH Score**: Pronóstico en hemorragia
- **Hunt-Hess**: Hemorragia subaracnoidea

### Psiquiatría
- **Depresión Mayor DSM-5**: Algoritmo diagnóstico
- **BDI-II**: Inventario de Depresión de Beck
- **NPI**: Inventario Neuropsiquiátrico

### Parkinson
- **UPDRS I-IV**: Evaluación integral
- **Criterios MDS 2015**: Diagnóstico
- **Hoehn & Yahr**: Estadificación
- **Ashworth**: Evaluación de tono

### Cognición
- **MMSE**: Mini-Mental
- **MoCA**: Montreal Cognitive Assessment
- **CDR**: Clinical Dementia Rating

### Cardiología
- **CHA2DS2-VASc**: Riesgo embólico
- **HAS-BLED**: Riesgo de sangrado

### Esclerosis Múltiple
- **McDonald 2024**: Criterios diagnósticos
- **EDSS**: Escala de discapacidad

### Epilepsia
- **Engel**: Resultado quirúrgico

### Cefalea
- **MIDAS**: Discapacidad por migraña
- **HIT-6**: Impacto de cefalea

## 🤖 Sistema de IA

La aplicación incluye un sistema de inteligencia artificial que:

- Analiza texto clínico en tiempo real
- Sugiere escalas relevantes automáticamente
- Detecta keywords médicas específicas
- Proporciona confianza en las sugerencias

### Ejemplos de Detección

- "paciente deprimido" → Escalas de depresión
- "hemiparesia derecha" → NIHSS, mRS
- "fibrilación auricular" → CHA2DS2-VASc, HAS-BLED
- "demencia con agitación" → NPI

## 🛠️ Tecnologías

- **React 18**: Framework principal
- **TypeScript**: Tipado estático
- **Vite**: Build tool moderna
- **Tailwind CSS**: Estilos utilitarios
- **Lucide React**: Iconografía

## 📖 Uso

1. **Escribe notas clínicas** en el área de texto
2. **El sistema IA sugiere** escalas relevantes automáticamente
3. **Selecciona una escala** del panel lateral
4. **Completa la evaluación** en el modal
5. **Los resultados se insertan** automáticamente en las notas

## ⚠️ Disclaimer Médico

Esta aplicación es una herramienta de apoyo clínico. Siempre:

- Consulte las guías clínicas actuales
- Use su juicio médico profesional
- Verifique los resultados independientemente
- Actualice con literatura médica reciente

## 📄 Licencia

MIT License - Ver archivo LICENSE para detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork del proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-escala`)
3. Commit cambios (`git commit -m 'Agregar nueva escala'`)
4. Push a la rama (`git push origin feature/nueva-escala`)
5. Abre un Pull Request

## 📧 Contacto

Para preguntas o sugerencias, por favor abra un issue en GitHub.

---

**Nota**: Esta es una aplicación médica profesional. Requiere conocimientos médicos para su uso apropiado.