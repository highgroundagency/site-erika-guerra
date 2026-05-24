import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useScrolledPast } from '../hooks/useScrollProgress';
import { WHATSAPP_URL, CRM } from '../config/contact';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Médica', href: '#autoridade' },
  { label: 'O Método', href: '#metodo' },
  { label: 'Localização', href: '#localizacao' },
];

export function Navbar() {
  const scrolled = useScrolledPast(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          backgroundColor: scrolled || menuOpen ? 'rgba(14,53,40,0.95)' : 'rgba(14,53,40,0.3)',
          backdropFilter: 'blur(12px)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.25)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(180,153,100,0.2)' : 'none',
        }}
      >
        <a href="#inicio" className="flex items-center gap-3 group" aria-label="Início" onClick={closeMenu}>
          <BrandSymbol size={36} animate={false} />
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

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#B49964', color: '#0E3528' }}
          >
            <span className="hidden sm:inline">Agendar Consulta</span>
            <span className="sm:hidden">WhatsApp</span>
            <WhatsAppIcon size={16} />
          </a>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors"
            style={{
              backgroundColor: menuOpen ? 'rgba(180,153,100,0.2)' : 'transparent',
              color: '#F6EADC',
            }}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl overflow-hidden"
            style={{
              backgroundColor: 'rgba(14,53,40,0.97)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(180,153,100,0.2)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
            }}
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-6 py-3 font-body font-medium text-sm transition-colors"
                    style={{ color: '#DCE7DE' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
