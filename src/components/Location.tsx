
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Nuestra Ubicación</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5129583066243!2d-58.4001697!3d-34.5982377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzUzLjciUyA1OMKwMjQnMDAuNiJX!5e0!3m2!1ses-419!2sar!4v1649791325124!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio"
              ></iframe>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-dental/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-dental-dark">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-dental mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Dirección</h4>
                  <p className="text-gray-600">Av. Santa Fe 2649, CABA</p>
                  <p className="text-gray-600">Buenos Aires, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-dental mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+54 11 4567-8900</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-dental mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">contacto@tobiasbonomo.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-dental mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Horario de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 19:00</p>
                  <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
