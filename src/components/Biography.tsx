import { GraduationCap, Briefcase } from 'lucide-react';
import DrBonomo from './images/dr-bonomo.png';

const Biography = () => {
  return (
    <section id="biografia" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Conozca al Dr. Tobías Bonomo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Egresado de la Universidad de Buenos Aires, el Dr. Tobías Bonomo ha dedicado su carrera a transformar sonrisas y mejorar la confianza de sus pacientes. Con especialización en implantes capilares y tratamientos estéticos, ofrece una atención cálida, profesional y actualizada.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-dental/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-dental" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Formación Académica</h3>
                  <p className="text-gray-600">Universidad de Buenos Aires (UBA)</p>
                  <p className="text-gray-600">Especialización en Implantología y Estética Dental</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-dental" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Experiencia Profesional</h3>
                  <p className="text-gray-600">Más de 10 años de experiencia en odontología</p>
                  <p className="text-gray-600">Especialista en implantes capilares y estética</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contacto" className="button-primary">
                Agendar una Consulta
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-dental/10 rounded-xl -z-10 transform rotate-3"></div>
              <img 
                src={DrBonomo}
                alt="Dr. Tobías Bonomo" 
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto h-auto object-cover"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
