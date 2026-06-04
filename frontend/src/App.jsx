import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <EventInfo />
      <Gallery />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
