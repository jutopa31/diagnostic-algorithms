import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import DiagnosticAlgorithmsApp from './DiagnosticAlgorithmsApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DiagnosticAlgorithmsApp />
  </StrictMode>
)