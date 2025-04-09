import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { WhatsAppConsultButton } from './WhatsAppConsultButton'; // importá el botón nuevo

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  duration: string;
  price: string;
}

export function ServiceCard({ icon, title, description, duration, price }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
    >
      <div className="flex justify-center mb-4">
        <div className="text-[#D4AF37]">{icon}</div>
      </div>
      <h4 className="font-serif text-xl mb-3 text-center">{title}</h4>
      <p className="text-gray-600 mb-4 text-center min-h-[48px]">{description}</p>
      <p className="text-gray-500 text-sm text-center mb-2">{duration}</p>
      <p className="text-[#D4AF37] font-semibold text-center">{price}</p>
     <WhatsAppConsultButton serviceName={title} />
    </motion.div>
  );
}