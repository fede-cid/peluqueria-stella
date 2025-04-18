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
      price: "$7900"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Corte de Caballero",
      description: "Corte clásico o moderno con terminaciones de barbería.",
      duration: "30 minutos",
      price: "$7900"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Peinado con Ondas",
      description: "Ondas naturales o definidas para cualquier ocasión.",
      duration: "45 minutos",
      price: "$19000"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Brushing",
      description: "Secado con cepillo para un look suave y voluminoso.",
      duration: "40 minutos",
      price: "10000"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Coloración Completa",
      description: "Aplicación de tinte uniforme en toda la cabeza.",
      duration: "120 - 90 minutos",
      price: "$28000"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Balayage",
      description: "Técnica de aclarado natural con efecto degradado.",
      duration: "3 horas",
      price: "A consultar"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nutrición",
      description: "Tratamiento que hidrata y repara el cabello, devolviendo brillo y suavidad.",
      duration: "1 horas",
      price: "$20000"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Alisado",
      description: "Tratamiento que alisa el cabello, reduciendo el frizz y dejándolo liso por más tiempo.",
      duration: "2 horas",
      price: "$25000"
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
    }
  ],
  maquillaje: [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Maquillaje Social",
      description: "Look profesional para eventos o salidas.",
      duration: "90 - 120 minutos",
      price: "a consultar"
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
      <h4 className="text-2xl font-serif mb-1 text-center">{title}</h4>
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
              src="https://github.com/fede-cid/peluqueria-stella/blob/main/project/src/Image/stellaProfile.png?raw=true" 
              alt="Stella Maris Morales"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-[#D4AF37] font-serif text-3xl mb-6"> ✨Sobre Stella</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
          
Reconocida estilista de Mendoza, no es simplemente una peluquera, sino una artista del cabello con más de 20 años de trayectoria profesional. A lo largo de su carrera, ha desarrollado un estilo único que fusiona la elegancia de las técnicas tradicionales con una mirada contemporánea y de autor.</p>
            <p className="text-gray-300 leading-relaxed">
            Su nombre se ha convertido en sinónimo de distinción y profesionalismo en el mundo de la belleza. Ha trabajado junto a reconocidas celebridades, figuras del ámbito artístico y personalidades influyentes del país, aportando su talento en producciones de moda, eventos de alto nivel y pasarelas nacionales. Entre sus experiencias más destacadas, se encuentra su participación como estilista oficial de las Reinas de la Vendimia, uno de los eventos más emblemáticos de la cultura mendocina y argentina.
            </p>
            <p className="text-gray-300 leading-relaxed">
            En su salón, Stella ofrece un servicio verdaderamente personalizado, en un entorno que prioriza la excelencia, el detalle y el cuidado por la imagen y la identidad de cada cliente. Más que una sesión de belleza, cada visita es una experiencia transformadora, pensada para resaltar la esencia y fortalecer la confianza de quienes eligen ponerse en sus manos.
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
              "https://github.com/fede-cid/peluqueria-stella/blob/main/project/src/Image/guille.jpg?raw=true",
              "https://github.com/fede-cid/peluqueria-stella/blob/main/project/src/Image/cabello%202.jpg?raw=true",
              "https://github.com/fede-cid/peluqueria-stella/blob/main/project/src/Image/cejas.jpg?raw=true",
              "https://github.com/fede-cid/peluqueria-stella/blob/main/project/src/Image/cabello%203.jpg?raw=true",
              "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80",
              "https://github.com/fede-cid/peluqueria-stella/blob/main/project/src/Image/cabello%201.jpg?raw=true"
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
