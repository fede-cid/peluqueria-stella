import { TestimonialCard } from './TestimonialCard';
import { GoogleReviewsWidget } from './GoogleReviewsWidget';

export function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-[#D4AF37] text-center">Opiniones de Clientes</h2>

        {/* Opiniones propias (pueden ser reales o ficticias) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <TestimonialCard name="Ana G." text="¡Siempre salgo feliz! Atención excelente." rating={5} />
          <TestimonialCard name="Luis M." text="Muy profesional y amable." rating={5} />
          <TestimonialCard name="Paula R." text="Me encantó el peinado que me hizo." rating={4} />
        </div>

        {/* Opiniones reales desde Elfsight / Google */}
        <GoogleReviewsWidget />
      </div>
    </section>
  );
}
