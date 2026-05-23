import { motion } from 'framer-motion';
import { BrandSymbol } from './BrandSymbol';
import { useScrollY } from '../hooks/useScrollProgress';
import { WHATSAPP_URL, CRM } from '../config/contact';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Médica', href: '#autoridade' },
  { label: 'O Método', href: '#metodo' },
  { label: 'Localização', href: '#localizacao' },
];

export function Navbar() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 60;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className="max-w-7xl mx-auto mt-3 rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-400"
        style={{
          backgroundColor: scrolled ? 'rgba(14,53,40,0.95)' : 'rgba(14,53,40,0.3)',
          backdropFilter: 'blur(12px)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.25)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(180,153,100,0.2)' : 'none',
        }}
      >
        {/* Logo + nome */}
        <a href="#inicio" className="flex items-center gap-3 group" aria-label="Início">
          <BrandSymbol size={36} color="#B49964" animate={false} />
          <div className="hidden sm:block">
            <p
              className="font-display font-semibold leading-none tracking-wide"
              style={{ color: '#F6EADC', fontSize: '0.95rem' }}
            >
              Dra. Érika Guerra
            </p>
            <p
              className="font-body font-light leading-none mt-0.5"
              style={{ color: '#B49964', fontSize: '0.68rem', letterSpacing: '0.08em' }}
            >
              {CRM}
            </p>
          </div>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-medium text-sm transition-colors duration-200 hover:opacity-80"
              style={{ color: '#DCE7DE', fontSize: '0.875rem' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: '#B49964',
            color: '#0E3528',
            boxShadow: '0 0 0 0 rgba(180,153,100,0.5)',
          }}
        >
          <span className="hidden sm:inline">Agendar Consulta</span>
          <span className="sm:hidden">WhatsApp</span>
          <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
            <path d="M10 0C4.478 0 0 4.478 0 10c0 1.763.46 3.42 1.264 4.853L0 20l5.294-1.388A9.957 9.957 0 0010 20c5.523 0 10-4.478 10-10S15.523 0 10 0zm0 18.333a8.29 8.29 0 01-4.225-1.154l-.302-.18-3.14.823.837-3.063-.197-.314A8.29 8.29 0 011.667 10C1.667 5.398 5.398 1.667 10 1.667S18.333 5.398 18.333 10 14.602 18.333 10 18.333zm4.544-6.136c-.249-.125-1.473-.727-1.701-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.975-.145.166-.29.187-.54.062-.248-.125-1.051-.387-2.002-1.236-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.016-.383.109-.507.112-.111.249-.29.373-.436.125-.145.166-.249.249-.415.083-.166.041-.312-.02-.436-.063-.124-.56-1.35-.768-1.85-.201-.486-.407-.42-.56-.427l-.477-.008c-.166 0-.436.062-.666.312-.23.249-.873.852-.873 2.077s.893 2.409 1.017 2.575c.125.166 1.756 2.684 4.256 3.764.594.256 1.06.41 1.421.524.597.19 1.14.163 1.57.099.479-.071 1.473-.602 1.681-1.184.207-.581.207-1.08.145-1.184-.062-.104-.228-.166-.476-.29z" />
          </svg>
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
