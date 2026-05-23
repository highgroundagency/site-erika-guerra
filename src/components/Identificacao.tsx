import { motion } from 'framer-motion';
import { ScrollGears } from './ScrollGears';
import { VslPlayer } from './VslPlayer';
import { WHATSAPP_URL } from '../config/contact';

const dores = [
  { emoji: '😴', text: 'Cansaço crônico que não passa nem dormindo' },
  { emoji: '🔄', text: 'Efeito sanfona — perde e recupera o mesmo peso' },
  { emoji: '🧠', text: 'Névoa mental, foco disperso, sem energia' },
  { emoji: '🌙', text: 'Noites mal dormidas que sabotam o seu dia' },
  { emoji: '⚡', text: 'Metabolismo travado mesmo fazendo tudo "certo"' },
  { emoji: '😤', text: 'Frustração com dietas da moda que não funcionam' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
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
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="h-px flex-1 max-w-16"
            style={{ backgroundColor: '#B49964' }}
          />
          <span
            className="font-body font-semibold text-xs uppercase tracking-widest"
            style={{ color: '#B49964' }}
          >
            Você se reconhece aqui?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-display font-medium mb-6"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#13251E',
            maxWidth: '700px',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Você já tentou de tudo —{' '}
          <em style={{ color: '#175442', fontStyle: 'italic' }}>e o corpo travou.</em>
        </motion.h2>

        <motion.p
          className="font-body leading-relaxed mb-12"
          style={{ color: '#13251E', fontSize: '1.1rem', maxWidth: '620px', opacity: 0.85 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Cortou carboidrato, fez jejum, seguiu a dieta da moda — e o resultado não veio.
          A culpa <strong>não é sua</strong>: é a falta de individualização. Seu metabolismo
          não cabe numa fórmula genérica. O jejum intermitente mal indicado, por exemplo,
          pode até favorecer a perda de massa óssea, comprometendo sua saúde a longo prazo.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Dores checklist ── */}
          <div>
            <motion.ul
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {dores.map((dor, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(23,84,66,0.06)',
                    border: '1px solid rgba(23,84,66,0.1)',
                  }}
                >
                  <span className="text-2xl flex-shrink-0">{dor.emoji}</span>
                  <p className="font-body font-medium" style={{ color: '#13251E', lineHeight: 1.5 }}>
                    {dor.text}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="mt-8 font-display text-xl italic"
              style={{ color: '#175442' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              "Se você se reconheceu em pelo menos uma dessas situações, existe uma explicação
              — e ela começa com um mapeamento preciso do seu organismo."
            </motion.p>
          </div>

          {/* ── VSL + Engrenagens ── */}
          <div className="flex flex-col gap-10">

            {/* Engrenagens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="rounded-3xl p-8 text-center"
                style={{ backgroundColor: 'rgba(23,84,66,0.06)', border: '1px solid rgba(23,84,66,0.12)' }}
              >
                <ScrollGears />
                <p
                  className="font-display text-xl italic mt-2"
                  style={{ color: '#175442' }}
                >
                  "Eu cuido para que as engrenagens do seu corpo<br />
                  voltem a funcionar em sintonia."
                </p>
                <p className="font-body text-sm mt-2" style={{ color: '#13251E', opacity: 0.6 }}>
                  — Dra. Érika Guerra · {/* CRM-PE 14461 */}
                </p>
              </div>
            </motion.div>

            {/* VSL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* SUBSTITUIR: adicione youtubeId, vimeoId ou videoSrc ao VslPlayer */}
              <VslPlayer />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-body font-semibold text-base w-full justify-center transition-all hover:scale-105"
                style={{ backgroundColor: '#175442', color: '#F6EADC', boxShadow: '0 8px 32px rgba(23,84,66,0.25)' }}
              >
                Quero entender o que está travando o meu metabolismo
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Identificacao;
