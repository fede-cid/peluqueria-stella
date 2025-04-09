import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{text}"</p>
      <p className="font-semibold text-gray-800">{name}</p>
    </motion.div>
  );
}
