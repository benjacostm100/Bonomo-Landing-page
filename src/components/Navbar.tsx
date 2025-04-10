
import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Biografía', href: '#biografia' },
    { name: 'Tratamientos', href: '#tratamientos' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-dental" />
          <span className="font-serif text-xl font-bold text-dental-dark">Dr. Tobías Bonomo</span>
        </a>
        

        {/* Desktop Navigation */}
     <div className="hidden md:flex items-center space-x-8 ">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-gray-600 hover:text-dental font-medium transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a href="#reservar" className="button-primary">
          Reservar Consulta
        </a>
      </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-dental"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-600 hover:text-dental font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservar" 
                className="button-primary inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                Reservar Consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
