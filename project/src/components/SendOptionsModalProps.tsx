import { useState } from 'react';

interface SendOptionsModalProps {
  onCancel: () => void;
  onSendWhatsApp: () => void;
  onSendEmail: () => void;
}

export function SendOptionsModal({ onCancel, onSendWhatsApp, onSendEmail }: SendOptionsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
      <div className="bg-white text-black p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
        <p className="mb-4 text-lg">¿Cómo querés enviar tu mensaje?</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={onSendWhatsApp}
            className="bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#128C7E] transition-colors"
          >
            WhatsApp
          </button>
          <button
            onClick={onSendEmail}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Email
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
