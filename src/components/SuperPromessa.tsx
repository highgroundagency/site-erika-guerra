import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from '../config/contact';

const pilares_preview = [
  { icon: '⚡', label: 'Energia real no dia a dia' },
  { icon: '🌙', label: 'Sono que restaura de verdade' },
  { icon: '🌿', label: 'Relação leve com o corpo' },
  { icon: '🧬', label: 'Saúde de dentro para fora' },
];

export function SuperPromessa() {
  return (
    <section
      id="promessa"
      className="relative overflow-hidden grain-overlay"
      style={{
        background: 'linear-gradient(160deg, #0E3528 0%, #091f17 50%, #0E3528 100%)',
      }}
    >
      {/* Decorative golden elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '80vw',
            height: '80vw',
            maxWidth: 700,
            maxHeight: 700,
            background: 'radial-gradient(circle, rgba(180,153,100,0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Golden horizontal rule */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-28 md:py-40 text-center">

        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="h-px w-12" style={{ backgroundColor: '#B49964' }} />
          <span className="font-body font-semibold text-xs uppercase tracking-widest" style={{ color: '#B49964' }}>
            A transformação possível
          </span>
          <span className="h-px w-12" style={{ backgroundColor: '#B49964' }} />
        </motion.div>

        {/* Main copy */}
        <motion.h2
          className="font-display font-medium mb-8"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
            color: '#F6EADC',
            lineHeight: 1.2,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Imagine acordar com energia, dormir um sono que{' '}
          <em style={{ color: '#D4B883', fontStyle: 'italic' }}>de fato restaura</em>,{' '}
          e ter uma relação leve e definitiva com o seu corpo.
        </motion.h2>

        <motion.p
          className="font-body leading-relaxed mb-12 mx-auto"
          style={{ color: '#DCE7DE', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '660px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Não por mais uma dieta — mas porque finalmente alguém entendeu como{' '}
          <strong style={{ color: '#D4B883' }}>o seu</strong> organismo funciona.
          A estética saudável é a <em>consequência</em> de um corpo em equilíbrio,
          não uma meta isolada. Esse é o ponto de partida de um novo capítulo da sua saúde.
        </motion.p>

        {/* Pilares preview */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {pilares_preview.map((p, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-5 py-3 rounded-full"
              style={{
                backgroundColor: 'rgba(180,153,100,0.12)',
                border: '1px solid rgba(180,153,100,0.35)',
              }}
              whileHover={{
                backgroundColor: 'rgba(180,153,100,0.22)',
                scale: 1.04,
              }}
            >
              <span className="text-xl">{p.icon}</span>
              <span className="font-body font-semibold text-sm" style={{ color: '#D4B883' }}>
                {p.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-5 rounded-full font-body font-bold text-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #B49964, #D4B883, #B49964)',
              backgroundSize: '200% 100%',
              color: '#0E3528',
              boxShadow: '0 0 60px rgba(180,153,100,0.3), 0 8px 32px rgba(0,0,0,0.3)',
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: '0 0 80px rgba(180,153,100,0.5), 0 12px 48px rgba(0,0,0,0.4)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <WhatsAppIcon size={22} />
            Quero esse novo capítulo — Agendar Consulta
          </motion.a>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="mt-8 font-body text-xs mx-auto"
          style={{ color: 'rgba(220,231,222,0.45)', maxWidth: '480px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          As informações deste site têm caráter educativo e inspiracional.
          Resultados individuais variam e dependem de múltiplos fatores clínicos.
        </motion.p>
      </div>
    </section>
  );
}

export default SuperPromessa;
