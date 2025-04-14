
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://sdmntprwestus.oaiusercontent.com/files/00000000-9c3c-6230-a0ec-baaacf299535/raw?se=2025-04-14T05%3A12%3A35Z&sp=r&sv=2024-08-04&sr=b&scid=b9243eb1-88fd-5f3a-a2f0-c6b0bba7751d&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-13T20%3A39%3A18Z&ske=2025-04-14T20%3A39%3A18Z&sks=b&skv=2024-08-04&sig=pJG9jMbqWs9hBQjUDL4plXGi%2BeG0QqbMOWYEo8m/Xfo%3D")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dental-dark/70 to-dental/50"></div>
      </div>
      
      <div className="section-container relative z-10 text-white flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sonrisas que Transforman Vidas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance">
            Bienvenido al consultorio del Dr. Tobías Bonomo, donde la salud y estética dental se encuentran con la innovación y el cuidado personalizado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#tratamientos" className="button-primary text-center">
              Nuestros Tratamientos
            </a>
            <a href="#reservar" className="bg-white text-dental hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors duration-300 text-center">
              Reservar Consulta
            </a>
          </div>
        </div>
        
        <a 
          href="#biografia" 
          className="absolute bottom-8 animate-bounce hidden md:block"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
