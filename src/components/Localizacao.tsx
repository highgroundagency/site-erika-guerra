import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Shield, Star } from 'lucide-react';
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

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="h-px flex-1 max-w-16" style={{ backgroundColor: '#B49964' }} />
          <span className="font-body font-semibold text-xs uppercase tracking-widest" style={{ color: '#B49964' }}>
            Onde encontrar
          </span>
        </motion.div>

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
                  <p className="font-body text-sm" style={{ color: '#DCE7DE' }}>
                    {/* SUBSTITUIR: horários de atendimento */}
                    Consultas mediante agendamento prévio via WhatsApp
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
                <svg viewBox="0 0 20 20" width="22" height="22" fill="currentColor">
                  <path d="M10 0C4.478 0 0 4.478 0 10c0 1.763.46 3.42 1.264 4.853L0 20l5.294-1.388A9.957 9.957 0 0010 20c5.523 0 10-4.478 10-10S15.523 0 10 0zm0 18.333a8.29 8.29 0 01-4.225-1.154l-.302-.18-3.14.823.837-3.063-.197-.314A8.29 8.29 0 011.667 10C1.667 5.398 5.398 1.667 10 1.667S18.333 5.398 18.333 10 14.602 18.333 10 18.333zm4.544-6.136c-.249-.125-1.473-.727-1.701-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.975-.145.166-.29.187-.54.062-.248-.125-1.051-.387-2.002-1.236-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.016-.383.109-.507.112-.111.249-.29.373-.436.125-.145.166-.249.249-.415.083-.166.041-.312-.02-.436-.063-.124-.56-1.35-.768-1.85-.201-.486-.407-.42-.56-.427l-.477-.008c-.166 0-.436.062-.666.312-.23.249-.873.852-.873 2.077s.893 2.409 1.017 2.575c.125.166 1.756 2.684 4.256 3.764.594.256 1.06.41 1.421.524.597.19 1.14.163 1.57.099.479-.071 1.473-.602 1.681-1.184.207-.581.207-1.08.145-1.184-.062-.104-.228-.166-.476-.29z" />
                </svg>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3847!2d-34.9005!3d-8.1208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19b7b3b3b3b3b%3A0x0!2sShopping+Recife%2C+Rua+Padre+Carapuceiro%2C+777+-+Boa+Viagem%2C+Recife+-+PE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
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
              <p className="font-body font-semibold mb-2" style={{ color: '#B49964' }}>
                📍 Medical Center · Shopping Recife · Sala 06
              </p>
              <p className="font-body text-sm" style={{ color: '#DCE7DE' }}>
                {ADDRESS.full}
              </p>
              <a
                href={`https://maps.google.com/?q=Shopping+Recife+Boa+Viagem+Recife+PE`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 font-body text-xs font-semibold transition-colors hover:opacity-80"
                style={{ color: '#D4B883' }}
              >
                Abrir no Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Localizacao;
