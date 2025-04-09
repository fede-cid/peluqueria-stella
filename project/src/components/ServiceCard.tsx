import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { WhatsAppConsultButton } from './WhatsAppConsultButton';

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
      className="bg-gradient-to-b from-white via-[#f8f7f4] to-[#f1efe9] p-6 rounded-2xl shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow duration-300 flex flex-col justify-between"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-[#f1e9c7] p-3 rounded-full text-[#D4AF37] shadow-md">
          {icon}
        </div>
      </div>

      <h4 className="font-serif text-xl text-center text-[#2c2c2c] mb-2">{title}</h4>
      <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto mb-3" />

      <p className="text-gray-700 text-sm text-center mb-4 min-h-[60px]">{description}</p>

      <div className="text-center text-sm text-gray-500 mb-2 italic">{duration}</div>
      <div className="text-center text-lg font-semibold text-[#D4AF37] mb-4">{price}</div>

      <div className="mt-auto text-center">
        <WhatsAppConsultButton serviceName={title} />
      </div>
    </motion.div>
  );
}
