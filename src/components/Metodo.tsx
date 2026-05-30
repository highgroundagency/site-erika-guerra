import { motion } from 'framer-motion';
import { Gauge, Microscope, Clock, Dna, Moon, MapPin, Flag, type LucideIcon } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { WHATSAPP_URL } from '../config/contact';

const pilares: { num: string; icon: LucideIcon; title: string; desc: string }[] = [
  {
    num: '01',
    icon: Gauge,
    title: 'Mapeamento da composição corporal',
    desc: 'Vai além do peso da balança: avaliamos massa muscular, massa óssea, gordura subcutânea, gordura visceral e equilíbrio hídrico celular. O número na balança conta só parte da história.',
  },
  {
    num: '02',
    icon: Microscope,
    title: 'Rastreamento de digestão e absorção',
    desc: 'Intolerâncias, refluxo, constipação crônica e distúrbios de absorção podem travar o metabolismo silenciosamente. Identificamos e tratamos esses bloqueios invisíveis.',
  },
  {
    num: '03',
    icon: Clock,
    title: 'Ritmo metabólico e cronobiologia',
    desc: 'Cada organismo tem o seu ritmo. Ajustamos o cuidado conforme idade biológica, perfil hormonal e necessidade energética — respeitando o relógio do seu corpo.',
  },
  {
    num: '04',
    icon: Dna,
    title: 'Prevenção ativa e contexto genético',
    desc: 'Predisposições familiares são sinais, não destino. Identificamos vulnerabilidades antes que se manifestem, agindo de forma preventiva e personalizada.',
  },
  {
    num: '05',
    icon: Moon,
    title: 'Sono como regulador metabólico',
    desc: 'O sono de qualidade é o pilar silencioso do equilíbrio hormonal. Sem descanso reparador, nenhum plano alimentar ou de exercícios alcança o seu potencial.',
  },
];

export function Metodo() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#FBF6EE' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* ── Metáfora "Onde Você Está" ── */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <SectionLabel align="center">O método · medicina funcional na prática</SectionLabel>

          <motion.h2
            className="font-display font-medium mb-8"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#13251E' }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Não dá para traçar uma rota segura sem saber{' '}
            <em style={{ color: '#175442', fontStyle: 'italic' }}>exatamente onde você está hoje.</em>
          </motion.h2>

          <motion.div
            className="relative p-8 md:p-10 rounded-3xl mb-8 text-left"
            style={{ backgroundColor: '#175442', border: '1px solid rgba(180,153,100,0.3)' }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="absolute top-3 left-6 font-display leading-none opacity-20"
              style={{ color: '#D4B883', fontSize: '4.5rem' }}
              aria-hidden="true"
            >
              "
            </span>
            <p className="font-display text-xl md:text-2xl leading-relaxed pt-6" style={{ color: '#F6EADC' }}>
              Não dá para viajar de Recife a São Paulo se, na verdade, você está em Salvador.
              O ponto de partida precisa ser mapeado com exatidão para que o caminho faça sentido.
            </p>
            <p className="font-body font-semibold mt-4 text-sm" style={{ color: '#B49964' }}>
              — Dra. Érika Guerra · filosofia clínica
            </p>

            {/* Route illustration */}
            <div className="flex items-center gap-3 mt-7" aria-hidden="true">
              <span className="flex items-center gap-2 font-body text-sm font-medium" style={{ color: '#DCE7DE' }}>
                <MapPin size={16} strokeWidth={1.8} style={{ color: '#D4B883' }} /> Onde você está
              </span>
              <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #B49964, #D4B883)' }} />
              <span className="flex items-center gap-2 font-body text-sm font-medium" style={{ color: '#DCE7DE' }}>
                <Flag size={16} strokeWidth={1.8} style={{ color: '#D4B883' }} /> Onde pode chegar
              </span>
            </div>
          </motion.div>

          <motion.p
            className="font-body leading-relaxed"
            style={{ color: '#13251E', fontSize: '1.05rem', opacity: 0.8 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Os cinco pilares a seguir são a medicina funcional na prática: enxergar o corpo
            como uma rede de sistemas interconectados e mapear, com profundidade, o que está
            fora de sintonia — para então construir um plano realmente personalizado.
          </motion.p>
        </div>

        {/* ── Os 5 Pilares ── */}
        <div className="relative">
          {/* Timeline vertical line (desktop) */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(180,153,100,0.5), rgba(180,153,100,0.5), transparent)' }}
          />

          <div className="flex flex-col gap-6">
            {pilares.map((pilar, i) => {
              const Icon = pilar.icon;
              return (
                <motion.div
                  key={i}
                  className="relative flex gap-6 md:gap-10 items-start group"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full transition-all group-hover:scale-105"
                    style={{
                      backgroundColor: '#FBF6EE',
                      border: '1.5px solid rgba(180,153,100,0.6)',
                      boxShadow: '0 0 0 4px rgba(180,153,100,0.08)',
                      color: '#175442',
                    }}
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 p-6 md:p-7 rounded-2xl transition-all"
                    style={{
                      backgroundColor: '#F6EADC',
                      border: '1px solid rgba(23,84,66,0.09)',
                      boxShadow: '0 2px 16px rgba(19,37,30,0.03)',
                    }}
                    whileHover={{ backgroundColor: '#fff', boxShadow: '0 8px 32px rgba(19,37,30,0.07)', y: -2 }}
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <span
                        className="font-display font-semibold leading-none"
                        style={{ color: 'rgba(180,153,100,0.5)', fontSize: '1.6rem', minWidth: '2.4rem' }}
                      >
                        {pilar.num}
                      </span>
                      <h3 className="font-display font-medium text-xl leading-tight" style={{ color: '#175442' }}>
                        {pilar.title}
                      </h3>
                    </div>
                    <p className="font-body leading-relaxed md:ml-[3.4rem]" style={{ color: '#13251E', opacity: 0.78 }}>
                      {pilar.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Texto de fechamento ── */}
        <motion.div
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="p-8 md:p-10 rounded-3xl"
            style={{ backgroundColor: 'rgba(23,84,66,0.05)', border: '1px solid rgba(23,84,66,0.1)' }}
          >
            <p className="font-body font-semibold uppercase mb-4" style={{ color: '#B49964', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
              Uma abordagem que pergunta "por quê?"
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#13251E', fontSize: '1.05rem' }}>
              A medicina funcional não busca a dieta perfeita nem o suplemento da moda —
              ela investiga <strong style={{ color: '#175442' }}>a raiz</strong> do que está
              fora de sintonia. Genética, ambiente, rotina, hormônios, sono, microbiota:
              tudo conversa entre si. Quando se entende essa conversa, o cuidado deixa de
              ser genérico e passa a fazer sentido para o <em>seu</em> corpo.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-semibold text-base transition-all hover:scale-[1.03] hover:shadow-xl"
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
