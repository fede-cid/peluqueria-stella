import React from 'react';
import { Scissors, Clock, Phone, MapPin, Instagram, Nut as Cut, Palette, Sparkles, Heart, Flower2, Mail as Nail, Brush } from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { WhatsAppButton } from './components/WhatsAppButton';
import { TestimonialsSection } from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';


const services = {
  peluqueria: [
    {
      icon: <Cut className="w-8 h-8" />,
      title: "Corte de Dama",
      description: "Corte personalizado según el rostro y estilo de cada clienta.",
      duration: "45 minutos",
      price: "$6000"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Corte de Caballero",
      description: "Corte clásico o moderno con terminaciones de barbería.",
      duration: "30 minutos",
      price: "$4500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Peinado con Ondas",
      description: "Ondas naturales o definidas para cualquier ocasión.",
      duration: "45 minutos",
      price: "$5000"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Brushing",
      description: "Secado con cepillo para un look suave y voluminoso.",
      duration: "40 minutos",
      price: "$4000"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Coloración Completa",
      description: "Aplicación de tinte uniforme en toda la cabeza.",
      duration: "90 minutos",
      price: "$12000"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Balayage",
      description: "Técnica de aclarado natural con efecto degradado.",
      duration: "3 horas",
      price: "$18000"
    }
  ],
  manicura_pedicura: [
    {
      icon: <Nail className="w-8 h-8" />,
      title: "Manicura Clásica",
      description: "Corte, limado, cutículas y esmaltado común.",
      duration: "40 minutos",
      price: "$3500"
    },
    {
      icon: <Nail className="w-8 h-8" />,
      title: "Manicura Semipermanente",
      description: "Esmaltado duradero con brillo por hasta 3 semanas.",
      duration: "60 minutos",
      price: "$5000"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Spa de Manos",
      description: "Exfoliación, hidratación y masaje relajante.",
      duration: "30 minutos",
      price: "$4000"
    },
    {
      icon: <Nail className="w-8 h-8" />,
      title: "Pedicura Completa",
      description: "Limpieza profunda, uñas y esmaltado.",
      duration: "60 minutos",
      price: "$5500"
    }
  ],
  cejas_pestanas: [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Diseño de Cejas",
      description: "Perfilado preciso con cera o pinza.",
      duration: "20 minutos",
      price: "$3000"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tinte de Cejas",
      description: "Coloración con henna o tintura para realzar la mirada.",
      duration: "30 minutos",
      price: "$3500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Lifting de Pestañas",
      description: "Curvado natural que realza las pestañas sin extensiones.",
      duration: "60 minutos",
      price: "$6000"
    }
  ],
  maquillaje: [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Maquillaje Social",
      description: "Look profesional para eventos o salidas.",
      duration: "60 minutos",
      price: "$10000"
    }
  ]
};

const testimonials = [
  {
    name: "María López",
    text: "Stella es una artista del cabello. Siempre salgo del salón sintiéndome renovada y hermosa.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    text: "El mejor lugar para un corte de cabello. Profesionalismo y calidad garantizada.",
    rating: 5
  },
  {
    name: "Laura Martínez",
    text: "Los tratamientos capilares son increíbles. Mi cabello nunca se vio mejor.",
    rating: 5
  }
];

function ServiceSection({ title, services }: { title: string, services: any[] }) {
  return (
    <div className="mb-16">
      <h4 className="text-2xl font-serif mb-8 text-center">{title}</h4>
      <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-10" />
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WhatsAppButton />
      
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-8 max-w-7xl mx-auto">
          <h1 className="text-2xl font-serif tracking-wider">Stella Maris Morales</h1>
          <div className="hidden md:flex space-x-8 font-light">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">Sobre Stella</a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Servicios</a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Galería</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonios</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contacto</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Transformá tu estilo</h2>
          <p className="text-xl md:text-2xl font-light mb-12">con el arte de Stella</p>
          <p className="text-xl md:text-2xl font-light italic mb-12">"Para mí, el cabello es un accesorio. El cabello es joyería"</p>
          <a 
           href={"https://wa.me/5492616830109?text=Hola, me gustaría consultar por un turno"}
            className="bg-[#D4AF37] text-black px-8 py-3 rounded hover:bg-[#C5A028] transition-colors"
          >
            Reservá tu turno
          </a>
        </div>
      </header>


      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80" 
              alt="Stella Maris Morales"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-[#D4AF37] font-serif text-3xl mb-6">Sobre Stella</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Con más de 20 años de experiencia en el arte del cabello, Stella Maris Morales ha desarrollado 
              un estilo único que combina técnicas clásicas con tendencias contemporáneas. Su visión artística 
              y dedicación al detalle la han convertido en una referente en el mundo de la peluquería de autor.
            </p>
            <p className="text-gray-300 leading-relaxed">
              En nuestro salón, cada cliente recibe un trato personalizado y una experiencia premium que 
              transforma no solo su imagen, sino también su confianza.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center font-serif text-3xl mb-16">Nuestros Servicios</h3>
          
          <ServiceSection title="Peluquería" services={services.peluqueria} />
          <ServiceSection title="Manicura y Pedicura" services={services.manicura_pedicura} />
          <ServiceSection title="Cejas y Pestañas" services={services.cejas_pestanas} />
          <ServiceSection title="Maquillaje" services={services.maquillaje} />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center font-serif text-3xl mb-16 text-[#D4AF37]">Galería</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80"
            ].map((url, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={url} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
     
     <TestimonialsSection />
     
      <ContactSection />
     

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-serif text-[#D4AF37]">Stella Maris Morales</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;