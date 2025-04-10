
import { Stethoscope } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dental-dark text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Stethoscope className="h-8 w-8 text-dental-light mr-3" />
            <span className="font-serif text-xl font-bold">Dr. Tobías Bonomo</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-dental-light transition-colors">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-dental-light transition-colors">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-dental-light transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div className="border-t border-dental/20 pt-8 mt-8 text-center text-sm">
          <p className="text-gray-400 mb-2">
            © {currentYear} Dr. Tobías Bonomo. Todos los derechos reservados.
          </p>
          <p className="text-gray-500">
            Odontólogo especialista en implantes capilares y estética dental.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
