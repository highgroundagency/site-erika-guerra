// App entry point
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Identificacao } from './components/Identificacao';
import { ProvaSocial } from './components/ProvaSocial';
import { SuperPromessa } from './components/SuperPromessa';
import { Metodo } from './components/Metodo';
import { Programas } from './components/Programas';
import { Localizacao } from './components/Localizacao';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';
import { useScrollProgress } from './hooks/useScrollProgress';

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Identificacao />
        <ProvaSocial />
        <SuperPromessa />
        <Metodo />
        <Programas />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default App;

