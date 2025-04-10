
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Treatments from '../components/Treatments';
import Location from '../components/Location';
import ContactForm from '../components/ContactForm';
import AppointmentCalendar from '../components/AppointmentCalendar';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Biography />
      <Treatments />
      <Location />
      <ContactForm />
      <AppointmentCalendar />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;
