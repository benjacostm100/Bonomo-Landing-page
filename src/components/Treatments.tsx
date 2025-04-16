
import { Stethoscope, Star, Sparkles, Calendar, HeartPulse } from 'lucide-react';

const treatments = [
  {
    id: 1,
    title: "Implantes Dentales",
    description: "Recupera la confianza con implantes naturales de alta calidad y durabilidad.",
    icon: <Stethoscope className="h-12 w-12 text-dental mb-4" />,
  },
  {
    id: 2,
    title: "Blanqueamiento Dental",
    description: "Devuelve el brillo natural a tu sonrisa con nuestros tratamientos de blanqueamiento dental.",
    icon: <Star className="h-12 w-12 text-dental mb-4" />,
  },
  {
    id: 3,
    title: "Ortodoncia Invisible",
    description: "Alinea tus dientes de forma discreta y cómoda con nuestros sistemas de ortodoncia invisible.",
    icon: <Sparkles className="h-12 w-12 text-dental mb-4" />,
  },
  {
    id: 4,
    title: "Limpiezas y Controles",
    description: "Cuida la salud de tu boca con nuestros servicios de limpieza profesional y controles periódicos.",
    icon: <Calendar className="h-12 w-12 text-dental mb-4" />,
  },
  {
    id: 5,
    title: "Estética Dental",
    description: "Transforma tu sonrisa con nuestros tratamientos personalizados de estética dental.",
    icon: <HeartPulse className="h-12 w-12 text-dental mb-4" />,
  },
];

const Treatments = () => {
  return (
    <section id="tratamientos" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Nuestros Tratamientos</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Ofrecemos una amplia gama de tratamientos odontológicos utilizando las técnicas más avanzadas y materiales de alta calidad para garantizar resultados excepcionales.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="card-treatment">
              {treatment.icon}
              <h3 className="text-xl font-bold mb-2 text-dental-dark">{treatment.title}</h3>
              <p className="text-gray-600">{treatment.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contacto" className="button-outline">
            Consultar por Tratamientos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
