import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SectionLabel } from './SectionLabel';
import { programas, programaWhatsAppUrl } from '../config/programas';
import { WHATSAPP_URL } from '../config/contact';

export function Programas() {
  return (
    <section
      id="programas"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#FBF6EE' }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        <SectionLabel>Formas de cuidado</SectionLabel>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-end">
          <motion.h2
            className="font-display font-medium lg:col-span-2"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#13251E',
              maxWidth: '680px',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Programas pensados para{' '}
            <em style={{ color: '#175442', fontStyle: 'italic' }}>cada momento da vida.</em>
          </motion.h2>

          <motion.p
            className="font-body leading-relaxed"
            style={{ color: '#13251E', fontSize: '1rem', opacity: 0.8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Cuidado multidisciplinar, com olhar funcional e integrativo —
            do mapeamento inicial ao acompanhamento contínuo.
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {programas.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.id}
                href={programaWhatsAppUrl(p)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-5 p-8 md:p-10 rounded-3xl transition-all"
                style={{
                  backgroundColor: '#F6EADC',
                  border: '1px solid rgba(23,84,66,0.1)',
                  boxShadow: '0 2px 16px rgba(19,37,30,0.04)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 40px rgba(19,37,30,0.1)',
                  backgroundColor: '#fff',
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-12 h-12 rounded-2xl"
                      style={{
                        backgroundColor: 'rgba(180,153,100,0.15)',
                        border: '1px solid rgba(180,153,100,0.25)',
                        color: '#175442',
                      }}
                    >
                      <Icon size={24} strokeWidth={1.6} />
                    </span>
                    <span
                      className="font-body font-semibold uppercase"
                      style={{ color: '#B49964', fontSize: '0.7rem', letterSpacing: '0.2em' }}
                    >
                      {p.tagline}
                    </span>
                  </div>
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: '#175442' }}
                  />
                </div>

                {/* Title + desc */}
                <div>
                  <h3
                    className="font-display font-medium mb-3"
                    style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.6rem)', color: '#175442', lineHeight: 1.2 }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-body leading-relaxed"
                    style={{ color: '#13251E', opacity: 0.8, fontSize: '0.98rem' }}
                  >
                    {p.description}
                  </p>
                </div>

                {/* CTA inline */}
                <div
                  className="inline-flex items-center gap-2 mt-2 font-body font-semibold text-sm"
                  style={{ color: '#175442' }}
                >
                  <WhatsAppIcon size={16} />
                  Falar sobre este programa
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* ── Equipe multidisciplinar ── */}
        <motion.div
          className="relative p-8 md:p-10 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #175442 0%, #0E3528 100%)',
            border: '1px solid rgba(180,153,100,0.3)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #B49964, transparent)',
              transform: 'translate(30%, -30%)',
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: 'rgba(180,153,100,0.2)' }}
                >
                  <Users size={18} style={{ color: '#B49964' }} />
                </span>
                <span
                  className="font-body font-semibold text-xs uppercase tracking-widest"
                  style={{ color: '#B49964' }}
                >
                  Cuidado multidisciplinar
                </span>
              </div>

              <h3
                className="font-display font-medium mb-3"
                style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)', color: '#F6EADC', lineHeight: 1.25 }}
              >
                Dra. Érika + Luana Moura, trabalhando em conjunto.
              </h3>

              <p
                className="font-body leading-relaxed mb-5"
                style={{ color: '#DCE7DE', fontSize: '1rem', maxWidth: '560px' }}
              >
                Toda transformação real precisa de mais de um olhar. Por isso,
                o cuidado é feito em parceria com a nutricionista Luana Moura — para que o plano
                clínico e o plano alimentar caminhem juntos, conversando entre si.
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="/luana-moura-nutricionista.jpg"
                  alt="Luana Moura, nutricionista"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  style={{ border: '2px solid rgba(180,153,100,0.5)' }}
                />
                <div>
                  <p className="font-body font-semibold text-sm" style={{ color: '#F6EADC' }}>
                    Luana Moura
                  </p>
                  <p className="font-body text-xs" style={{ color: '#B49964' }}>
                    Nutricionista · CRN-PE 32456/P
                  </p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-body font-semibold text-sm transition-all hover:scale-105 w-full md:w-auto"
              style={{
                backgroundColor: '#B49964',
                color: '#0E3528',
                boxShadow: '0 8px 32px rgba(180,153,100,0.25)',
              }}
            >
              <WhatsAppIcon size={18} />
              Quero conhecer os programas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Programas;
