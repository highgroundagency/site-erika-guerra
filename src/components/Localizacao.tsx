import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Shield, Star, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SectionLabel } from './SectionLabel';
import { WHATSAPP_URL, ADDRESS, PHONE_DISPLAY } from '../config/contact';

const vantagens = [
  { icon: <Car size={20} />, label: 'Estacionamento integrado' },
  { icon: <Shield size={20} />, label: 'Segurança 24h' },
  { icon: <Star size={20} />, label: 'Ambiente de alto padrão' },
  { icon: <MapPin size={20} />, label: 'Fácil acesso — Boa Viagem' },
];

export function Localizacao() {
  return (
    <section
      id="localizacao"
      className="relative overflow-hidden grain-overlay"
      style={{ backgroundColor: '#175442' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        <SectionLabel tone="light">Onde encontrar</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Info ── */}
          <div>
            <motion.h2
              className="font-display font-medium mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F6EADC' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Medical Center —{' '}
              <em style={{ color: '#D4B883', fontStyle: 'italic' }}>Shopping Recife</em>
            </motion.h2>

            <motion.p
              className="font-body leading-relaxed mb-8"
              style={{ color: '#DCE7DE', fontSize: '1.05rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Um ambiente acolhedor de alto padrão, no coração de Boa Viagem.
              Estacionamento integrado, segurança, e toda a conveniência do Shopping Recife —
              porque cuidar da saúde também precisa ser uma experiência agradável.
            </motion.p>

            {/* Address info */}
            <motion.div
              className="flex flex-col gap-5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: 'rgba(180,153,100,0.2)' }}
                >
                  <MapPin size={18} style={{ color: '#B49964' }} />
                </div>
                <div>
                  <p className="font-body font-semibold mb-1" style={{ color: '#F6EADC' }}>Endereço</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#DCE7DE' }}>
                    {ADDRESS.street}<br />
                    {ADDRESS.complement}<br />
                    {ADDRESS.neighborhood}, {ADDRESS.city}-{ADDRESS.state}<br />
                    CEP {ADDRESS.cep}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: 'rgba(180,153,100,0.2)' }}
                >
                  <Phone size={18} style={{ color: '#B49964' }} />
                </div>
                <div>
                  <p className="font-body font-semibold mb-1" style={{ color: '#F6EADC' }}>WhatsApp / Agendamento</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-lg font-bold transition-colors hover:opacity-80"
                    style={{ color: '#D4B883' }}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: 'rgba(180,153,100,0.2)' }}
                >
                  <Clock size={18} style={{ color: '#B49964' }} />
                </div>
                <div>
                  <p className="font-body font-semibold mb-1" style={{ color: '#F6EADC' }}>Atendimento</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#DCE7DE' }}>
                    Terça, quarta e quinta<br />
                    <span style={{ color: '#D4B883', fontWeight: 600 }}>14h às 19h</span>
                    <br />
                    <span style={{ opacity: 0.75 }}>Agendamento via WhatsApp</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vantagens */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {vantagens.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(180,153,100,0.2)',
                  }}
                >
                  <span style={{ color: '#B49964' }}>{v.icon}</span>
                  <span className="font-body text-sm font-medium" style={{ color: '#DCE7DE' }}>
                    {v.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-bold text-lg w-full justify-center transition-all"
                style={{
                  background: 'linear-gradient(135deg, #B49964, #D4B883)',
                  color: '#0E3528',
                  boxShadow: '0 8px 32px rgba(180,153,100,0.3)',
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 48px rgba(180,153,100,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon size={22} />
                Agendar minha consulta agora
              </motion.a>
            </motion.div>
          </div>

          {/* ── Right: Mapa ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Google Maps embed */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: '2px solid rgba(180,153,100,0.3)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
              }}
            >
              <iframe
                title="Localização Medical Center Shopping Recife"
                src="https://www.google.com/maps?q=Shopping+Recife+Medical+Center+Rua+Padre+Carapuceiro+777+Boa+Viagem+Recife+PE&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(180,153,100,0.2)',
              }}
            >
              <p className="flex items-center gap-2 font-body font-semibold mb-2" style={{ color: '#B49964' }}>
                <MapPin size={16} strokeWidth={1.8} />
                Medical Center · Shopping Recife · Sala 06
              </p>
              <p className="font-body text-sm" style={{ color: '#DCE7DE' }}>
                {ADDRESS.full}
              </p>
              <a
                href={`https://maps.google.com/?q=Shopping+Recife+Boa+Viagem+Recife+PE`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 mt-3 font-body text-xs font-semibold transition-colors hover:opacity-80"
                style={{ color: '#D4B883' }}
              >
                Abrir no Google Maps
                <ArrowUpRight size={14} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Localizacao;
