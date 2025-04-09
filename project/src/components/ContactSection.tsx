import { useState } from 'react';
import { SendOptionsModal } from './SendOptionsModalProps';

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = () => {
    const whatsappMessage = `Hola Stella, soy ${name}. Mi correo es ${email}. Quisiera hacer la siguiente consulta: ${message}`;
    window.open(`https://wa.me/5492616830109?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setShowModal(false);
  };

  const handleSendEmail = () => {
    const subject = `Consulta de ${name}`;
    const body = `Hola Stella,\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
    window.location.href = `mailto:fede.cid.96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center font-serif text-3xl mb-16 text-[#D4AF37]">Contacto</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-serif text-2xl mb-6">Información</h4>
            <div className="space-y-4">
               <a
                href="https://maps.app.goo.gl/u4CGKNk2Uep5wnyh8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <span className="text-[#D4AF37] mr-3">📍</span>
                <span >Patricias Mendocinas 1383, M5500 Mendoza</span>
              </a>
              <div className="flex items-center">
                <span className="text-[#D4AF37] mr-3">📞</span>
                <span>+54 9 2616 83-0109</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D4AF37] mr-3">⏰</span>
                <span>Mar-Sáb:10:30 a.m.-12 a.m., 12-6:30 p.m.</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://www.instagram.com/stella_maris_morales/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#C5A028]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}>
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-700 bg-black focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-700 bg-black focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-700 bg-black focus:border-[#D4AF37] focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-[#D4AF37] text-black px-8 py-3 rounded hover:bg-[#C5A028] transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <SendOptionsModal
          onCancel={() => setShowModal(false)}
          onSendWhatsApp={handleSendWhatsApp}
          onSendEmail={handleSendEmail}
        />
      )}
    </section>
  );
}
