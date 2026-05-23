import { motion, type Variants } from 'framer-motion';
import { BrandSymbol } from './BrandSymbol';
import { PulsingHeart } from './PulsingHeart';
import { WHATSAPP_URL, CRM } from '../config/contact';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
      style={{
        background: 'linear-gradient(135deg, #175442 0%, #0E3528 60%, #091f17 100%)',
      }}
    >
      {/* Botanic leaf decorations */}
      <LeafDecoration />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">

            {/* Logo symbol animado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex items-center gap-4"
            >
              <BrandSymbol size={64} color="#B49964" animate={true} />
              <div>
                <p
                  className="font-display font-semibold"
                  style={{ color: '#F6EADC', fontSize: '1.3rem', lineHeight: 1.2 }}
                >
                  Dra. Érika Guerra
                </p>
                <p
                  className="font-body font-light"
                  style={{ color: '#B49964', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  {CRM} · Medicina Preventiva · Nutrologia · Sono
                </p>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-medium"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', color: '#F6EADC', lineHeight: 1.1 }}
            >
              A sua saúde não pode ser guiada por{' '}
              <em
                className="not-italic"
                style={{ color: '#D4B883', fontStyle: 'italic' }}
              >
                fórmulas genéricas.
              </em>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body font-light leading-relaxed"
              style={{ color: '#DCE7DE', fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '540px' }}
            >
              Descubra a sua rota biológica para um emagrecimento sustentável e uma
              vida com mais energia. Planos de precisão médica baseados no mapeamento
              do seu metabolismo, genética e qualidade do sono — atendimento exclusivo
              no Medical Center do Shopping Recife.
            </motion.p>

            {/* CTA */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-body font-semibold text-base transition-all"
                style={{
                  backgroundColor: '#B49964',
                  color: '#0E3528',
                  boxShadow: '0 0 0 0 rgba(180,153,100,0.5)',
                  animation: 'pulse-ring 2s ease-out infinite',
                }}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: '#D4B883',
                  boxShadow: '0 8px 32px rgba(180,153,100,0.4)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                  <path d="M10 0C4.478 0 0 4.478 0 10c0 1.763.46 3.42 1.264 4.853L0 20l5.294-1.388A9.957 9.957 0 0010 20c5.523 0 10-4.478 10-10S15.523 0 10 0zm0 18.333a8.29 8.29 0 01-4.225-1.154l-.302-.18-3.14.823.837-3.063-.197-.314A8.29 8.29 0 011.667 10C1.667 5.398 5.398 1.667 10 1.667S18.333 5.398 18.333 10 14.602 18.333 10 18.333zm4.544-6.136c-.249-.125-1.473-.727-1.701-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.975-.145.166-.29.187-.54.062-.248-.125-1.051-.387-2.002-1.236-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.016-.383.109-.507.112-.111.249-.29.373-.436.125-.145.166-.249.249-.415.083-.166.041-.312-.02-.436-.063-.124-.56-1.35-.768-1.85-.201-.486-.407-.42-.56-.427l-.477-.008c-.166 0-.436.062-.666.312-.23.249-.873.852-.873 2.077s.893 2.409 1.017 2.575c.125.166 1.756 2.684 4.256 3.764.594.256 1.06.41 1.421.524.597.19 1.14.163 1.57.099.479-.071 1.473-.602 1.681-1.184.207-.581.207-1.08.145-1.184-.062-.104-.228-.166-.476-.29z" />
                </svg>
                Agendar Consulta de Avaliação Clínica
              </motion.a>
            </motion.div>

            {/* Selos */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ borderColor: 'rgba(180,153,100,0.3)', backgroundColor: 'rgba(180,153,100,0.08)' }}
              >
                <span style={{ color: '#D4B883', fontSize: '1.1rem' }}>✦</span>
                <span className="font-body font-medium" style={{ color: '#DCE7DE', fontSize: '0.82rem' }}>
                  +9 anos de medicina em Recife
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ borderColor: 'rgba(180,153,100,0.3)', backgroundColor: 'rgba(180,153,100,0.08)' }}
              >
                <span style={{ color: '#D4B883', fontSize: '1.1rem' }}>✦</span>
                <span className="font-body font-medium" style={{ color: '#DCE7DE', fontSize: '0.82rem' }}>
                  Medical Center · Shopping Recife
                </span>
              </div>
            </motion.div>

            {/* Coração pulsante */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <PulsingHeart color="#B49964" size={36} />
            </motion.div>
          </div>

          {/* ── RIGHT: Foto da Dra. ── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Halo dourado */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-40"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(180,153,100,0.5) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              {/* Moldura elegante */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: 'min(340px, 85vw)',
                  aspectRatio: '3/4',
                  border: '2px solid rgba(180,153,100,0.4)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(180,153,100,0.15) inset',
                }}
              >
                <img
                  src="/dra-erika-hero.jpg"
                  alt="Dra. Érika Guerra, especialista em Nutrologia, Medicina Preventiva e Medicina do Sono, sorrindo em ambiente elegante"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.background = 'linear-gradient(135deg, #175442, #0E3528)';
                    target.parentElement!.innerHTML += `
                      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;padding:24px;">
                        <svg viewBox="0 0 200 200" width="80" height="80" fill="none" stroke="#B49964" stroke-width="6" stroke-linecap="round"><path d="M30 145 A72 72 0 0 1 170 145"/><path d="M100 145 L100 110"/><circle cx="100" cy="90" r="9"/><path d="M100 79 L100 45"/><path d="M100 62 L74 50"/><path d="M100 62 L126 50"/></svg>
                        <p style="color:#F6EADC;font-family:Fraunces,serif;font-size:1.1rem;text-align:center;line-height:1.4;">Dra. Érika Guerra</p>
                        <p style="color:#B49964;font-size:0.78rem;text-align:center;">Foto: dra-erika-hero.jpg</p>
                      </div>`;
                  }}
                />
                {/* Overlay gradient sutil na parte inferior */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(14,53,40,0.6), transparent)' }}
                />
              </div>

              {/* Badge flutuante */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl"
                style={{
                  backgroundColor: '#B49964',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                }}
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
        transition={{ delay: 2 }}
      >
        <span className="font-body text-xs" style={{ color: 'rgba(220,231,222,0.6)', letterSpacing: '0.1em' }}>
          role para descobrir
        </span>
        <motion.div
          className="w-0.5 h-8 rounded-full"
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
        className="absolute -top-12 -right-12 opacity-10"
        width="320"
        height="480"
        fill="#B49964"
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
        className="absolute -bottom-8 -left-8 opacity-8"
        width="180"
        height="270"
        fill="#D4B883"
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ opacity: 0.08 }}
      >
        <path d="M60 170 C60 170 0 100 5 40 C10 -20 60 0 60 0 C60 0 110 -20 115 40 C120 100 60 170 60 170Z" />
      </motion.svg>

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            backgroundColor: '#B49964',
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.15,
          }}
          animate={{ y: [0, -20 - i * 5, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}

export default Hero;
