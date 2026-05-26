import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../config/contact';

const pilares = [
  {
    num: '01',
    icon: '⚖️',
    title: 'Mapeamento da Composição Corporal',
    desc: 'Vai além do peso da balança: avaliamos massa muscular, massa óssea, gordura subcutânea, gordura visceral e equilíbrio hídrico celular. O número na balança conta apenas parte da história.',
  },
  {
    num: '02',
    icon: '🔬',
    title: 'Rastreamento de Digestão e Excreção',
    desc: 'Intolerâncias alimentares, refluxo, constipação crônica e distúrbios de absorção podem travar o metabolismo silenciosamente. Identificamos e tratamos esses bloqueios invisíveis.',
  },
  {
    num: '03',
    icon: '🕐',
    title: 'Análise do Ritmo Metabólico e Cronobiologia',
    desc: 'Cada organismo tem seu próprio ritmo. Ajustamos o protocolo conforme idade biológica, perfil hormonal e necessidade energética diária — respeitando o relógio do seu corpo.',
  },
  {
    num: '04',
    icon: '🧬',
    title: 'Prevenção Ativa e Mapeamento Genético',
    desc: 'Predisposições familiares são sinais, não destino. Identificamos vulnerabilidades antes que a doença se manifeste, agindo preventivamente com base na sua história genética.',
  },
  {
    num: '05',
    icon: '🌙',
    title: 'Medicina do Sono como Regulador Metabólico',
    desc: 'O sono de qualidade é o pilar silencioso do equilíbrio hormonal e da perda de gordura. Sem sono reparador, nenhum plano alimentar ou de exercícios alcança seu potencial máximo.',
  },
];

export function Metodo() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#FBF6EE' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* ── Metáfora "Onde Você Está" ── */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="h-px w-12" style={{ backgroundColor: '#B49964' }} />
            <span className="font-body font-semibold text-xs uppercase tracking-widest" style={{ color: '#B49964' }}>
              O método · medicina funcional na prática
            </span>
            <span className="h-px w-12" style={{ backgroundColor: '#B49964' }} />
          </motion.div>

          <motion.h2
            className="font-display font-medium mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#13251E' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Não dá para traçar uma rota segura sem saber{' '}
            <em style={{ color: '#175442', fontStyle: 'italic' }}>exatamente onde você está hoje.</em>
          </motion.h2>

          <motion.div
            className="relative p-8 md:p-10 rounded-3xl mb-8"
            style={{
              backgroundColor: '#175442',
              border: '1px solid rgba(180,153,100,0.3)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Quote marks */}
            <span
              className="absolute top-4 left-6 font-display text-6xl leading-none opacity-20"
              style={{ color: '#D4B883' }}
              aria-hidden="true"
            >
              "
            </span>
            <p className="font-display text-xl md:text-2xl leading-relaxed" style={{ color: '#F6EADC' }}>
              Não dá para viajar de Recife a São Paulo se você, na verdade, está em Salvador.
              O ponto de partida precisa ser mapeado com exatidão para que o caminho faça sentido.
            </p>
            <p className="font-body font-semibold mt-4 text-sm" style={{ color: '#B49964' }}>
              — Dra. Érika Guerra · Filosofia clínica
            </p>

            {/* Route illustration */}
            <div className="flex items-center justify-center gap-4 mt-6" aria-hidden="true">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="font-body text-sm font-medium" style={{ color: '#DCE7DE' }}>Onde você está</span>
              </div>
              <div className="flex-1 max-w-24 h-px" style={{ background: 'linear-gradient(90deg, #B49964, #D4B883)' }} />
              <span style={{ color: '#D4B883' }}>→</span>
              <div className="flex-1 max-w-24 h-px" style={{ background: 'linear-gradient(90deg, #D4B883, #B49964)' }} />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                <span className="font-body text-sm font-medium" style={{ color: '#DCE7DE' }}>Onde pode chegar</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="font-body leading-relaxed"
            style={{ color: '#13251E', fontSize: '1.05rem', opacity: 0.8 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Esses 5 pilares são a aplicação prática da medicina funcional: enxergar o corpo
            como uma rede de sistemas interconectados e mapear, com profundidade,
            o que está fora de sintonia — para então construir um plano realmente personalizado.
          </motion.p>
        </div>

        {/* ── Os 5 Pilares ── */}
        <div className="relative">
          {/* Timeline vertical line (desktop) */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, #B49964, #B49964, transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {pilares.map((pilar, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6 md:gap-10 items-start group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div
                  className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: '#FBF6EE',
                    borderColor: '#B49964',
                    boxShadow: '0 0 0 4px rgba(180,153,100,0.1)',
                  }}
                >
                  <span className="text-xl">{pilar.icon}</span>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 p-6 md:p-8 rounded-2xl transition-all"
                  style={{
                    backgroundColor: '#F6EADC',
                    border: '1px solid rgba(23,84,66,0.1)',
                    boxShadow: '0 2px 16px rgba(19,37,30,0.04)',
                  }}
                  whileHover={{
                    backgroundColor: '#fff',
                    boxShadow: '0 8px 32px rgba(19,37,30,0.08)',
                    y: -2,
                  }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span
                      className="font-display font-bold text-3xl leading-none"
                      style={{ color: 'rgba(180,153,100,0.4)', minWidth: '3rem' }}
                    >
                      {pilar.num}
                    </span>
                    <h3
                      className="font-display font-medium text-xl leading-tight"
                      style={{ color: '#175442' }}
                    >
                      {pilar.title}
                    </h3>
                  </div>
                  <p className="font-body leading-relaxed ml-16" style={{ color: '#13251E', opacity: 0.8 }}>
                    {pilar.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Texto sobre medicina de precisão ── */}
        <motion.div
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="p-8 rounded-3xl"
            style={{
              backgroundColor: 'rgba(23,84,66,0.05)',
              border: '1px solid rgba(23,84,66,0.12)',
            }}
          >
            <p className="font-body font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: '#B49964' }}>
              Uma abordagem que pergunta "por quê?"
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#13251E', fontSize: '1.05rem' }}>
              A medicina funcional não busca a dieta perfeita nem o suplemento da moda —
              ela investiga <strong style={{ color: '#175442' }}>a raiz</strong> do que está
              fora de sintonia no seu organismo. Genética, ambiente, rotina, hormônios, sono,
              microbiota: tudo conversa entre si. Quando se entende essa conversa, o cuidado
              deixa de ser genérico e passa a fazer sentido para o <em>seu</em> corpo.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-semibold text-base transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#175442', color: '#F6EADC', boxShadow: '0 8px 32px rgba(23,84,66,0.2)' }}
          >
            Iniciar meu mapeamento funcional
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Metodo;
