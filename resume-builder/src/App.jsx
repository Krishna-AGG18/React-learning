import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import ResumeForm from './components/ResumeForm';
import ModernTemplate from './components/ModernTemplate';
import ClassicTemplate from './components/ClassicTemplate';
import { Download } from 'lucide-react';

function App() {
  const [step, setStep] = useState('form');
  const [resumeData, setResumeData] = useState(null);
  const [template, setTemplate] = useState('modern');
  const componentRef = useRef(null);

  const handleFormSubmit = (data) => {
    setResumeData(data);
    setStep('preview');
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPNG = async () => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'resume.png';
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {step === 'form' ? (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Resume Builder</h1>
          <ResumeForm onSubmit={handleFormSubmit} />
        </div>
      ) : (
        <div className="container mx-auto py-8">
          <div className="max-w-[800px] mx-auto mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="space-x-4">
                <button
                  onClick={() => setTemplate('modern')}
                  className={`px-4 py-2 rounded ${
                    template === 'modern'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Modern Template
                </button>
                <button
                  onClick={() => setTemplate('classic')}
                  className={`px-4 py-2 rounded ${
                    template === 'classic'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Classic Template
                </button>
              </div>
              <div className="space-x-4">
                <button
                  onClick={handlePrint}
                  className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button
                  onClick={handleDownloadPNG}
                  className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
                <button
                  onClick={() => setStep('form')}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div ref={componentRef}>
            {resumeData && template === 'modern' && <ModernTemplate data={resumeData} />}
            {resumeData && template === 'classic' && <ClassicTemplate data={resumeData} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;