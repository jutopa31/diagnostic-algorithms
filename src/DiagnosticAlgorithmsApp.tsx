import React, { useState, useCallback } from 'react';
import { Brain, Calculator, FileText, Stethoscope } from 'lucide-react';
import DiagnosticAlgorithmContent from './DiagnosticAlgorithmContent';
import { Scale, ScaleResult } from './types';
import ScaleModal from './ScaleModal';
import { medicalScales } from './scales-data';

const DiagnosticAlgorithmsApp = () => {
  const [selectedScale, setSelectedScale] = useState<Scale | null>(null);
  const [notes, setNotes] = useState(`Datos del paciente:

Antecedentes:

Motivo de consulta:
`);


  const copyNotes = useCallback(() => {
    navigator.clipboard.writeText(notes).then(() => {
      // Podrías agregar un toast notification aquí
      console.log('Notas copiadas al portapapeles');
    });
  }, [notes]);

  const openScaleModal = useCallback((scaleId: string) => {
    const scale = medicalScales.find(s => s.id === scaleId);
    if (scale) {
      setSelectedScale(scale);
    }
  }, [medicalScales]);

  const handleScaleResult = useCallback((result: ScaleResult) => {
    const resultText = `
${result.scaleName}
Puntaje: ${result.totalScore}
${result.interpretation}

${result.details}

`;
    setNotes(prevNotes => prevNotes + resultText);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Algoritmos Diagnósticos
                  </h1>
                  <p className="text-sm text-gray-500">
                    Escalas y herramientas de evaluación médica
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calculator className="h-4 w-4" />
                <span>{medicalScales.length} escalas disponibles</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Stethoscope className="h-4 w-4" />
                <span>Sistema AI integrado</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DiagnosticAlgorithmContent
          notes={notes}
          setNotes={setNotes}
          copyNotes={copyNotes}
          openScaleModal={openScaleModal}
          medicalScales={medicalScales}
        />
      </main>

      {/* Scale Modal */}
      {selectedScale && (
        <ScaleModal
          scale={selectedScale}
          onClose={() => setSelectedScale(null)}
          onSubmit={handleScaleResult}
        />
      )}

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <FileText className="h-4 w-4" />
              <span>Algoritmos Diagnósticos v1.0</span>
            </div>
            <p>
              Herramientas de evaluación médica con inteligencia artificial integrada
            </p>
            <p className="mt-2 text-xs">
              Para uso profesional médico únicamente. Siempre consulte las guías clínicas actuales.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DiagnosticAlgorithmsApp;