import { motion, type Variants } from 'framer-motion';
import { CalendarClock, MapPin } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL, CRM } from '../config/contact';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: 'easeOut' as const },
  }),
};

const selos = [
  { icon: CalendarClock, label: '+9 anos de medicina em Recife' },
  { icon: MapPin, label: 'Medical Center · Shopping Recife' },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
      style={{ background: 'linear-gradient(135deg, #175442 0%, #0E3528 60%, #091f17 100%)' }}
    >
      <LeafDecoration />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex items-center gap-4"
            >
              <BrandSymbol size={60} animate={true} />
              <div>
                <p className="font-display font-semibold" style={{ color: '#F6EADC', fontSize: '1.3rem', lineHeight: 1.2 }}>
                  Dra. Érika Guerra
                </p>
                <p
                  className="font-body font-light"
                  style={{ color: '#B49964', fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}
                >
                  {CRM} · Medicina Funcional e Integrativa
                </p>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-medium"
              style={{ fontSize: 'clamp(2.1rem, 5vw, 3.7rem)', color: '#F6EADC', lineHeight: 1.08 }}
            >
              Tratar a causa,{' '}
              <em style={{ color: '#D4B883', fontStyle: 'italic' }}>não apenas o sintoma.</em>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body font-light leading-relaxed"
              style={{ color: '#DCE7DE', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '520px' }}
            >
              Medicina funcional e integrativa em Recife. Um cuidado que investiga a raiz
              do que interfere na sua energia, no seu sono e na sua qualidade de vida —
              para tratar o porquê, não só o sintoma.
            </motion.p>

            {/* CTA */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-body font-semibold text-base"
                style={{ backgroundColor: '#B49964', color: '#0E3528' }}
                whileHover={{ scale: 1.04, backgroundColor: '#D4B883', boxShadow: '0 8px 32px rgba(180,153,100,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon size={20} />
                Agendar consulta de avaliação
              </motion.a>
            </motion.div>

            {/* Selos */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3"
            >
              {selos.map((selo, i) => {
                const Icon = selo.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full border"
                    style={{ borderColor: 'rgba(180,153,100,0.3)', backgroundColor: 'rgba(180,153,100,0.07)' }}
                  >
                    <Icon size={15} strokeWidth={1.8} style={{ color: '#D4B883' }} />
                    <span className="font-body font-medium" style={{ color: '#DCE7DE', fontSize: '0.82rem' }}>
                      {selo.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── RIGHT: Foto da Dra. ── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Halo dourado */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-40"
                style={{ background: 'radial-gradient(ellipse at center, rgba(180,153,100,0.5) 0%, transparent 70%)', filter: 'blur(20px)' }}
              />
              {/* Moldura */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: 'min(400px, 88vw)',
                  aspectRatio: '3/4',
                  border: '1px solid rgba(180,153,100,0.4)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(180,153,100,0.15) inset',
                }}
              >
                <img
                  src="/dra-erika-hero.jpg"
                  alt="Dra. Érika Guerra, médica com atuação em medicina funcional e integrativa, em ambiente elegante"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 15%', transform: 'scale(1.35)', transformOrigin: '50% 20%' }}
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.background = 'linear-gradient(135deg, #175442, #0E3528)';
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(14,53,40,0.6), transparent)' }}
                />
              </div>

              {/* Badge flutuante */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl"
                style={{ backgroundColor: '#B49964', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="font-body font-bold text-xs" style={{ color: '#0E3528' }}>
                  Medicina transformando vidas
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="font-body text-xs" style={{ color: 'rgba(220,231,222,0.55)', letterSpacing: '0.1em' }}>
          role para descobrir
        </span>
        <motion.div
          className="w-px h-8 rounded-full"
          style={{ backgroundColor: '#B49964' }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

function LeafDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large leaf top-right */}
      <motion.svg
        viewBox="0 0 200 300"
        className="absolute -top-12 -right-12"
        width="320"
        height="480"
        fill="#B49964"
        style={{ opacity: 0.08 }}
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M100 280 C100 280 0 180 10 80 C20 -20 100 0 100 0 C100 0 180 -20 190 80 C200 180 100 280 100 280Z" />
        <line x1="100" y1="280" x2="100" y2="0" stroke="#B49964" strokeWidth="3" />
        <line x1="100" y1="200" x2="40" y2="140" stroke="#B49964" strokeWidth="1.5" />
        <line x1="100" y1="160" x2="160" y2="100" stroke="#B49964" strokeWidth="1.5" />
        <line x1="100" y1="130" x2="50" y2="80" stroke="#B49964" strokeWidth="1.5" />
        <line x1="100" y1="100" x2="150" y2="60" stroke="#B49964" strokeWidth="1.5" />
      </motion.svg>

      {/* Small leaf bottom-left */}
      <motion.svg
        viewBox="0 0 120 180"
        className="absolute -bottom-8 -left-8"
        width="180"
        height="270"
        fill="#D4B883"
        style={{ opacity: 0.07 }}
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <path d="M60 170 C60 170 0 100 5 40 C10 -20 60 0 60 0 C60 0 110 -20 115 40 C120 100 60 170 60 170Z" />
      </motion.svg>
    </div>
  );
}

export default Hero;
