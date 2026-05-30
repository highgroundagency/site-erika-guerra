import { motion } from 'framer-motion';
import { ClipboardList, BatteryLow, Brain, Moon, Flame, Repeat, type LucideIcon } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { ScrollGears } from './ScrollGears';
import { VslPlayer } from './VslPlayer';
import { WHATSAPP_URL } from '../config/contact';

const dores: { icon: LucideIcon; text: string }[] = [
  { icon: ClipboardList, text: 'Fez exames, ouviu que "está tudo normal" — mas você sente que não está.' },
  { icon: BatteryLow, text: 'Um cansaço que não passa, nem depois de dormir.' },
  { icon: Brain, text: 'Névoa mental, foco disperso, a sensação de não ser mais você.' },
  { icon: Moon, text: 'Noites mal dormidas que sabotam o dia seguinte.' },
  { icon: Flame, text: 'Metabolismo travado, mesmo fazendo tudo "certo".' },
  { icon: Repeat, text: 'Já tentou de tudo — dietas, suplementos, rotinas — e nada se sustentou.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Identificacao() {
  return (
    <section
      id="identificacao"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#F6EADC' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        <SectionLabel>Você se reconhece aqui?</SectionLabel>

        {/* Headline */}
        <motion.h2
          className="font-display font-medium mb-6"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#13251E', maxWidth: '700px' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          E se o problema{' '}
          <em style={{ color: '#175442', fontStyle: 'italic' }}>nunca foi você?</em>
        </motion.h2>

        <motion.p
          className="font-body leading-relaxed mb-14"
          style={{ color: '#13251E', fontSize: '1.1rem', maxWidth: '620px', opacity: 0.82 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Você fez exames, consultou, mudou a rotina — e ouviu que está tudo normal.
          Mas você sente que não está. A medicina tradicional costuma tratar sintomas
          isolados. A <strong style={{ color: '#175442' }}>medicina funcional</strong> faz
          outra pergunta: <em>por que isso está acontecendo?</em>
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Dores ── */}
          <div>
            <motion.ul
              className="flex flex-col gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {dores.map((dor, i) => {
                const Icon = dor.icon;
                return (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-colors"
                    style={{
                      backgroundColor: 'rgba(23,84,66,0.045)',
                      border: '1px solid rgba(23,84,66,0.09)',
                    }}
                  >
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl"
                      style={{ backgroundColor: 'rgba(180,153,100,0.14)', color: '#175442' }}
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <p className="font-body font-medium" style={{ color: '#13251E', lineHeight: 1.45, fontSize: '0.98rem' }}>
                      {dor.text}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.p
              className="mt-8 font-display text-xl italic"
              style={{ color: '#175442', maxWidth: '520px', lineHeight: 1.5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Se você se reconheceu em pelo menos uma dessas situações, existe uma
              explicação — e ela está na causa, não no sintoma.
            </motion.p>
          </div>

          {/* ── Visão funcional + VSL ── */}
          <div className="flex flex-col gap-10">

            {/* Engrenagens — metáfora literal: sistemas interconectados */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="rounded-3xl p-8 text-center"
                style={{ backgroundColor: 'rgba(23,84,66,0.05)', border: '1px solid rgba(23,84,66,0.1)' }}
              >
                <ScrollGears />
                <p
                  className="font-body font-semibold uppercase mb-3"
                  style={{ color: '#B49964', fontSize: '0.7rem', letterSpacing: '0.2em' }}
                >
                  A visão funcional
                </p>
                <p className="font-display text-xl italic" style={{ color: '#175442', lineHeight: 1.45 }}>
                  Seu corpo é uma rede de sistemas que conversam entre si. Quando uma
                  engrenagem sai de sintonia, tudo sente.
                </p>
                <p className="font-body text-sm mt-3" style={{ color: '#13251E', opacity: 0.55 }}>
                  — Dra. Érika Guerra
                </p>
              </div>
            </motion.div>

            {/* VSL */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <VslPlayer />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-body font-semibold text-base w-full justify-center transition-all hover:scale-[1.02]"
                style={{ backgroundColor: '#175442', color: '#F6EADC', boxShadow: '0 8px 32px rgba(23,84,66,0.22)' }}
              >
                Quero descobrir a causa raiz
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Identificacao;
