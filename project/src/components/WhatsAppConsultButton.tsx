import { useState } from 'react';
import { createPortal } from 'react-dom';

interface WhatsAppConsultButtonProps {
  serviceName: string;
}

export function WhatsAppConsultButton({ serviceName }: WhatsAppConsultButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const phoneNumber = "5492616830109";
  const message = `Hola Stella, me gustaría agendar un turno para ${serviceName}`;

  const handleConfirm = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setShowConfirm(false);
  };

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="mt-4 bg-[#6c5f32] text-white px-4 py-2 rounded hover:bg-[#128C7E] transition-colors text-sm font-medium shadow-md"
      >
        Consultar
      </button>

      {showConfirm &&
  createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
      <div className="bg-white text-black p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
        <p className="mb-4 text-lg">
          ¿Querés consultar por el servicio <strong>{serviceName}</strong>?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirm}
            className="bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#128C7E] transition-colors"
          >
            Sí
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.body
  )}
    </>
  );
}
