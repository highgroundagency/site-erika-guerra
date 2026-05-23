import { BrandSymbol } from './BrandSymbol';
import { WHATSAPP_URL, PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, ADDRESS, CNPJ, CRM } from '../config/contact';

export function Footer() {
  return (
    <footer
      id="rodape"
      style={{ backgroundColor: '#0E3528' }}
    >
      {/* Top golden line */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #B49964, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* ── Brand ── */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <BrandSymbol size={48} color="#B49964" animate={false} />
              <div>
                <p className="font-display font-semibold" style={{ color: '#F6EADC', fontSize: '1.1rem' }}>
                  Dra. Érika Guerra
                </p>
                <p className="font-body font-light" style={{ color: '#B49964', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                  Medicina transformando vidas
                </p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(220,231,222,0.65)' }}>
              Especialista em Nutrologia, Medicina Preventiva e Medicina do Sono.
              Protocolos de precisão médica baseados no mapeamento individual do seu organismo.
            </p>
            <p className="font-body text-xs font-semibold" style={{ color: '#B49964' }}>
              {CRM}
            </p>
          </div>

          {/* ── Contato ── */}
          <div className="flex flex-col gap-4">
            <p className="font-body font-semibold text-xs uppercase tracking-widest" style={{ color: '#B49964' }}>
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-body text-xs" style={{ color: 'rgba(220,231,222,0.5)' }}>WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F6EADC' }}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="font-body text-xs" style={{ color: 'rgba(220,231,222,0.5)' }}>Instagram</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F6EADC' }}
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
              <div>
                <p className="font-body text-xs" style={{ color: 'rgba(220,231,222,0.5)' }}>Endereço</p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(220,231,222,0.8)' }}>
                  Medical Center · Shopping Recife · Sala 06<br />
                  {ADDRESS.street}<br />
                  {ADDRESS.neighborhood}, {ADDRESS.city}-{ADDRESS.state}<br />
                  CEP {ADDRESS.cep}
                </p>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="flex flex-col gap-5 items-start">
            <p className="font-body font-semibold text-xs uppercase tracking-widest" style={{ color: '#B49964' }}>
              Agende sua consulta
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(220,231,222,0.65)' }}>
              Dê o primeiro passo para entender seu organismo de forma individualizada e precisa.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: '#B49964', color: '#0E3528', boxShadow: '0 4px 20px rgba(180,153,100,0.3)' }}
            >
              <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
                <path d="M10 0C4.478 0 0 4.478 0 10c0 1.763.46 3.42 1.264 4.853L0 20l5.294-1.388A9.957 9.957 0 0010 20c5.523 0 10-4.478 10-10S15.523 0 10 0zm0 18.333a8.29 8.29 0 01-4.225-1.154l-.302-.18-3.14.823.837-3.063-.197-.314A8.29 8.29 0 011.667 10C1.667 5.398 5.398 1.667 10 1.667S18.333 5.398 18.333 10 14.602 18.333 10 18.333zm4.544-6.136c-.249-.125-1.473-.727-1.701-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.975-.145.166-.29.187-.54.062-.248-.125-1.051-.387-2.002-1.236-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.016-.383.109-.507.112-.111.249-.29.373-.436.125-.145.166-.249.249-.415.083-.166.041-.312-.02-.436-.063-.124-.56-1.35-.768-1.85-.201-.486-.407-.42-.56-.427l-.477-.008c-.166 0-.436.062-.666.312-.23.249-.873.852-.873 2.077s.893 2.409 1.017 2.575c.125.166 1.756 2.684 4.256 3.764.594.256 1.06.41 1.421.524.597.19 1.14.163 1.57.099.479-.071 1.473-.602 1.681-1.184.207-.581.207-1.08.145-1.184-.062-.104-.228-.166-.476-.29z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col gap-1">
            <p className="font-body text-xs" style={{ color: 'rgba(220,231,222,0.4)' }}>
              {CRM} · CNPJ {CNPJ}
            </p>
            <p className="font-body text-xs" style={{ color: 'rgba(220,231,222,0.4)' }}>
              © {new Date().getFullYear()} Consultório Dra. Érika Guerra. Todos os direitos reservados.
            </p>
          </div>
          <p
            className="font-body text-xs text-right"
            style={{ color: 'rgba(220,231,222,0.4)', maxWidth: '420px' }}
          >
            As informações deste site têm caráter educativo e não substituem a consulta médica.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
