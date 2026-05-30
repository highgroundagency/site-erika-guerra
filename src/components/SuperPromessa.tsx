import { motion } from 'framer-motion';
import { Zap, Moon, Leaf, HeartPulse, type LucideIcon } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SectionLabel } from './SectionLabel';
import { WHATSAPP_URL } from '../config/contact';

const pilaresPreview: { icon: LucideIcon; label: string }[] = [
  { icon: Zap, label: 'Energia real no dia a dia' },
  { icon: Moon, label: 'Sono que restaura de verdade' },
  { icon: Leaf, label: 'Relação leve com o corpo' },
  { icon: HeartPulse, label: 'Saúde de dentro para fora' },
];

export function SuperPromessa() {
  return (
    <section
      id="promessa"
      className="relative overflow-hidden grain-overlay"
      style={{ background: 'linear-gradient(160deg, #0E3528 0%, #091f17 50%, #0E3528 100%)' }}
    >
      {/* Decorative golden glow + rules */}
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
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-28 md:py-40 text-center">

        <SectionLabel align="center" tone="light">Quando o corpo volta a funcionar</SectionLabel>

        <motion.h2
          className="font-display font-medium mb-8"
          style={{ fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', color: '#F6EADC', lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Imagine acordar com energia, dormir um sono que{' '}
          <em style={{ color: '#D4B883', fontStyle: 'italic' }}>de fato restaura</em>{' '}
          e sentir o corpo trabalhando a seu favor de novo.
        </motion.h2>

        <motion.p
          className="font-body leading-relaxed mb-12 mx-auto"
          style={{ color: '#DCE7DE', fontSize: 'clamp(1rem, 2vw, 1.18rem)', maxWidth: '640px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          O emagrecimento costuma ser o primeiro passo — e, quando se trata a{' '}
          <strong style={{ color: '#D4B883' }}>causa</strong>, ele vem de forma mais leve
          e mais duradoura. Mas é só o começo: o que se constrói é um cuidado com o seu
          funcionamento como um todo.
        </motion.p>

        {/* Pilares preview */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {pilaresPreview.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full"
                style={{ backgroundColor: 'rgba(180,153,100,0.1)', border: '1px solid rgba(180,153,100,0.3)' }}
                whileHover={{ backgroundColor: 'rgba(180,153,100,0.2)', scale: 1.04 }}
              >
                <Icon size={17} strokeWidth={1.8} style={{ color: '#D4B883' }} />
                <span className="font-body font-semibold text-sm" style={{ color: '#D4B883' }}>
                  {p.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
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
            whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(180,153,100,0.5), 0 12px 48px rgba(0,0,0,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <WhatsAppIcon size={22} />
            Quero esse novo capítulo
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
          As informações deste site têm caráter educativo. Resultados individuais variam
          e dependem de múltiplos fatores clínicos.
        </motion.p>
      </div>
    </section>
  );
}

export default SuperPromessa;
