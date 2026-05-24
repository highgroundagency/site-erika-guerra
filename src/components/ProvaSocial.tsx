import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL, CRM, INSTAGRAM_HANDLE } from '../config/contact';

const autoridade = [
  {
    icon: '📰',
    title: 'Folha de Pernambuco',
    subtitle: 'Coluna "Sucesso"',
    desc: 'Colunista de saúde convidada, desmistificando mitos alimentares e alertando sobre automedicação e dietas restritivas.',
  },
  {
    icon: '🎤',
    title: 'I Simpósio de Nutrologia e Longevidade de PE',
    subtitle: 'Palestrante — Cadeira "Sono"',
    desc: 'Palestrante convidada no maior evento de nutrologia e longevidade de Pernambuco, no Empresarial RioMar.',
  },
  {
    icon: '🏆',
    title: 'Summit Êxito de Empreendedorismo',
    subtitle: 'Painelista — Tema "Protagonismo"',
    desc: 'Reconhecida como referência em protagonismo na saúde e no empreendedorismo médico.',
  },
  {
    icon: '📱',
    title: Instagram_label(),
    subtitle: '"Medicina transformando vidas"',
    desc: 'Comunidade engajada com conteúdo de qualidade sobre saúde, metabolismo, sono e longevidade.',
  },
];

function Instagram_label() {
  return INSTAGRAM_HANDLE;
}

// SUBSTITUIR: adicione os depoimentos reais dos pacientes
const depoimentos = [
  {
    nome: 'M.S.',
    texto: 'A Dra. Érika foi a primeira médica que realmente olhou para mim como um todo. Entendeu meu cansaço, meu sono, minha relação com a comida. Sinto que finalmente tenho energia para viver.',
    destaque: 'Energia de volta',
  },
  {
    nome: 'R.F.',
    texto: 'Depois de anos tentando dietas e não conseguindo dormir direito, o protocolo da Dra. Érika mudou minha vida. Durmo bem, acordo disposta e minha relação com o corpo é outra.',
    destaque: 'Sono restaurador',
  },
  {
    nome: 'C.A.',
    texto: 'O que me surpreendeu foi a profundidade do mapeamento. Ela identificou coisas que nunca foram investigadas antes. Me sinto cuidada de verdade.',
    destaque: 'Cuidado de verdade',
  },
];

export function ProvaSocial() {
  const [dep, setDep] = useState(0);

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

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="h-px flex-1 max-w-16" style={{ backgroundColor: '#B49964' }} />
          <span className="font-body font-semibold text-xs uppercase tracking-widest" style={{ color: '#B49964' }}>
            Autoridade reconhecida em Pernambuco
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-display font-medium mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F6EADC', maxWidth: '640px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Mais de 9 anos transformando a saúde de pacientes em Recife.
        </motion.h2>

        <motion.p
          className="font-body leading-relaxed mb-16"
          style={{ color: '#DCE7DE', fontSize: '1.05rem', maxWidth: '560px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Consultório próprio ativo desde 2017, com trajetória consolidada — do Empresarial RioMar Trade Center ao
          Medical Center do Shopping Recife, no coração de Boa Viagem.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Foto + Cards ── */}
          <div className="flex flex-col gap-6">

            {/* Foto da clínica */}
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: '4/3', border: '1px solid rgba(180,153,100,0.3)' }}
              initial={{ opacity: 0, scale: 0.95 }}
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
                  t.parentElement!.innerHTML += `<div style="display:flex;align-items:center;justify-content:center;height:100%;"><p style="color:#B49964;font-size:0.85rem;text-align:center;padding:16px;">📷 Foto do consultório<br/><span style="color:#DCE7DE;font-size:0.75rem;">dra-erika-clinica.jpg</span></p></div>`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-eclipse/40 to-transparent" />

              {/* CRM badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full font-body text-xs font-semibold"
                style={{ backgroundColor: 'rgba(180,153,100,0.9)', color: '#0E3528' }}
              >
                {CRM}
              </div>
            </motion.div>

            {/* Cards autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {autoridade.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-2 p-5 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(180,153,100,0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    backgroundColor: 'rgba(180,153,100,0.1)',
                    borderColor: 'rgba(180,153,100,0.4)',
                    y: -2,
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-body font-bold text-sm leading-tight" style={{ color: '#D4B883' }}>
                    {item.title}
                  </p>
                  <p className="font-body font-medium text-xs" style={{ color: '#DCE7DE' }}>
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Cobertura na imprensa — Folha de Pernambuco */}
            <a
              href="https://www.folhape.com.br/noticias/jejum-intermitente-low-carb-medica-erika-guerra-fala-sobre-a-dieta-ide/63369/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 rounded-2xl group transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(180,153,100,0.25)',
              }}
            >
              {/* Logotipo tipográfico da Folha */}
              <div
                className="flex-shrink-0 flex items-center justify-center px-4 py-2 rounded-xl"
                style={{ backgroundColor: '#C8102E', minWidth: 80 }}
              >
                <span className="font-display font-bold text-white text-sm leading-tight text-center">
                  Folha<br/>PE
                </span>
              </div>
              <div>
                <p className="font-body font-bold text-sm" style={{ color: '#D4B883' }}>
                  Folha de Pernambuco
                </p>
                <p className="font-body text-xs leading-snug mt-0.5" style={{ color: '#DCE7DE', opacity: 0.8 }}>
                  Colunista convidada na coluna <strong style={{ color: '#D4B883' }}>"Sucesso"</strong> —
                  desmistificando mitos alimentares e alertando sobre automedicação e dietas restritivas.
                </p>
              </div>
              <span className="ml-auto text-xs flex-shrink-0" style={{ color: 'rgba(212,184,131,0.5)' }}>→</span>
            </a>
          </div>

          {/* ── Depoimentos ── */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-body font-semibold text-xs uppercase tracking-widest mb-6" style={{ color: '#B49964' }}>
                O que os pacientes dizem
              </p>

              {/* Carrossel */}
              <div className="relative">
                <motion.div
                  key={dep}
                  className="p-8 rounded-3xl flex flex-col gap-6"
                  style={{
                    backgroundColor: 'rgba(14,53,40,0.6)',
                    border: '1px solid rgba(180,153,100,0.2)',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: '#B49964' }}>★</span>
                    ))}
                  </div>

                  <p className="font-display text-lg italic leading-relaxed" style={{ color: '#F6EADC' }}>
                    "{depoimentos[dep].texto}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-body font-semibold" style={{ color: '#D4B883' }}>
                        {depoimentos[dep].nome}
                      </p>
                      <p className="font-body text-xs" style={{ color: '#DCE7DE', opacity: 0.7 }}>
                        Paciente · {depoimentos[dep].destaque}
                      </p>
                    </div>

                    {/* Nav arrows */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setDep((d) => (d - 1 + depoimentos.length) % depoimentos.length)}
                        className="flex items-center justify-center w-9 h-9 rounded-full border transition-colors hover:bg-dourado-champagne/20"
                        style={{ borderColor: 'rgba(180,153,100,0.4)', color: '#B49964' }}
                        aria-label="Depoimento anterior"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => setDep((d) => (d + 1) % depoimentos.length)}
                        className="flex items-center justify-center w-9 h-9 rounded-full border transition-colors hover:bg-dourado-champagne/20"
                        style={{ borderColor: 'rgba(180,153,100,0.4)', color: '#B49964' }}
                        aria-label="Próximo depoimento"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {depoimentos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setDep(i)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{ backgroundColor: i === dep ? '#B49964' : 'rgba(180,153,100,0.3)' }}
                      aria-label={`Depoimento ${i + 1}`}
                    />
                  ))}
                </div>

                <p className="text-center mt-2 font-body text-xs" style={{ color: 'rgba(220,231,222,0.4)' }}>
                  {/* SUBSTITUIR: depoimentos reais — sem antes/depois, sem promessa de resultado */}
                  Depoimentos espontâneos sobre vitalidade, energia e sono
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-body font-semibold mt-4 transition-all"
              style={{ backgroundColor: '#B49964', color: '#0E3528' }}
              whileHover={{ scale: 1.04, backgroundColor: '#D4B883' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Quero iniciar o meu protocolo personalizado
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProvaSocial;
