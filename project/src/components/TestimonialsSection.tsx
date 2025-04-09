import { TestimonialCard } from './TestimonialCard';
import { GoogleReviewsWidget } from './GoogleReviewsWidget';

export function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-[#D4AF37] text-center">Opiniones de Clientes</h2>

      
        <GoogleReviewsWidget />
      </div>
    </section>
  );
}
