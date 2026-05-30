import { motion } from 'framer-motion';
import { Newspaper, Mic, Award, AtSign, Ear, Search, UserCheck, ShieldCheck, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { WHATSAPP_URL, CRM, INSTAGRAM_HANDLE } from '../config/contact';

const autoridade: { icon: LucideIcon; title: string; subtitle: string }[] = [
  { icon: Newspaper, title: 'Folha de Pernambuco', subtitle: 'Colunista convidada · coluna "Sucesso"' },
  { icon: Mic, title: 'I Simpósio de Nutrologia e Longevidade de PE', subtitle: 'Palestrante · cadeira "Sono" — Empresarial RioMar' },
  { icon: Award, title: 'Summit Êxito de Empreendedorismo', subtitle: 'Painelista · tema "Protagonismo"' },
  { icon: AtSign, title: INSTAGRAM_HANDLE, subtitle: 'Instagram · comunidade engajada e conteúdo educativo' },
];

const principios: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Ear, title: 'Escuta sem pressa', desc: 'Consultas com tempo para entender a sua história por inteiro.' },
  { icon: Search, title: 'Investigação da causa', desc: 'Mapeamento profundo do que está fora de sintonia — não só do sintoma.' },
  { icon: UserCheck, title: 'Plano individualizado', desc: 'Nada de protocolo de prateleira: o cuidado é desenhado para o seu corpo.' },
  { icon: ShieldCheck, title: 'Ética e transparência', desc: 'Sem promessas milagrosas — medicina baseada em método e evidência.' },
];

export function ProvaSocial() {
  return (
    <section
      id="autoridade"
      className="relative overflow-hidden grain-overlay"
      style={{ backgroundColor: '#175442' }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #B49964, transparent)', transform: 'translate(30%, -30%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        <SectionLabel tone="light">Trajetória reconhecida em Pernambuco</SectionLabel>

        <motion.h2
          className="font-display font-medium mb-4"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#F6EADC', maxWidth: '640px' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Mais de 9 anos dedicados à saúde de pacientes em Recife.
        </motion.h2>

        <motion.p
          className="font-body leading-relaxed mb-16"
          style={{ color: '#DCE7DE', fontSize: '1.05rem', maxWidth: '580px', opacity: 0.9 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Consultório próprio ativo desde 2017, com trajetória consolidada — do Empresarial
          RioMar Trade Center ao Medical Center do Shopping Recife, no coração de Boa Viagem.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Foto + credenciais ── */}
          <div className="flex flex-col gap-6">

            <motion.div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: '4/3', border: '1px solid rgba(180,153,100,0.3)' }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/dra-erika-clinica.jpg"
                alt="Dra. Érika Guerra em seu consultório no Medical Center do Shopping Recife"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 18%', transform: 'scale(1.1)', transformOrigin: '50% 15%' }}
                loading="lazy"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = 'none';
                  t.parentElement!.style.background = 'linear-gradient(135deg, #0E3528, #175442)';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-eclipse/40 to-transparent" />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full font-body text-xs font-semibold"
                style={{ backgroundColor: 'rgba(180,153,100,0.92)', color: '#0E3528' }}
              >
                {CRM}
              </div>
            </motion.div>

            {/* Cards autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {autoridade.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex flex-col gap-2.5 p-5 rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(180,153,100,0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ backgroundColor: 'rgba(180,153,100,0.1)', borderColor: 'rgba(180,153,100,0.4)', y: -2 }}
                  >
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-lg"
                      style={{ backgroundColor: 'rgba(180,153,100,0.18)', color: '#D4B883' }}
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <p className="font-body font-bold text-sm leading-tight" style={{ color: '#D4B883' }}>
                      {item.title}
                    </p>
                    <p className="font-body font-medium text-xs leading-snug" style={{ color: '#DCE7DE', opacity: 0.85 }}>
                      {item.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Cobertura na imprensa — Folha de Pernambuco */}
            <a
              href="https://www.folhape.com.br/noticias/jejum-intermitente-low-carb-medica-erika-guerra-fala-sobre-a-dieta-ide/63369/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 rounded-2xl group transition-all hover:scale-[1.01]"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(180,153,100,0.25)' }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center px-4 py-2 rounded-xl"
                style={{ backgroundColor: '#C8102E', minWidth: 80 }}
              >
                <span className="font-display font-bold text-white text-sm leading-tight text-center">
                  Folha<br />PE
                </span>
              </div>
              <div>
                <p className="font-body font-bold text-sm" style={{ color: '#D4B883' }}>
                  Matéria na Folha de Pernambuco
                </p>
                <p className="font-body text-xs leading-snug mt-0.5" style={{ color: '#DCE7DE', opacity: 0.8 }}>
                  Desmistificando mitos alimentares e alertando sobre automedicação e dietas restritivas.
                </p>
              </div>
              <ArrowUpRight size={18} strokeWidth={1.8} className="ml-auto flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'rgba(212,184,131,0.6)' }} />
            </a>
          </div>

          {/* ── Princípios do atendimento (prova social ética) ── */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="p-8 md:p-9 rounded-3xl"
              style={{ backgroundColor: 'rgba(14,53,40,0.55)', border: '1px solid rgba(180,153,100,0.22)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-body font-semibold uppercase mb-7" style={{ color: '#B49964', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                O cuidado que você pode esperar
              </p>

              <ul className="flex flex-col gap-6">
                {principios.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <span
                        className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl"
                        style={{ backgroundColor: 'rgba(180,153,100,0.16)', color: '#D4B883' }}
                      >
                        <Icon size={20} strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="font-display font-medium text-lg" style={{ color: '#F6EADC', lineHeight: 1.3 }}>
                          {p.title}
                        </p>
                        <p className="font-body text-sm leading-relaxed mt-0.5" style={{ color: '#DCE7DE', opacity: 0.82 }}>
                          {p.desc}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-body font-semibold transition-all"
              style={{ backgroundColor: '#B49964', color: '#0E3528' }}
              whileHover={{ scale: 1.03, backgroundColor: '#D4B883' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Quero iniciar meu acompanhamento
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProvaSocial;
