import { BrandSymbol } from './BrandSymbol';
import { WhatsAppIcon } from './WhatsAppIcon';
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
              <BrandSymbol size={48} animate={false} />
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
              Médica com atuação em medicina funcional e integrativa.
              Foco em metabolismo, sono, hormônios, climatério e emagrecimento sustentável —
              tratando a causa raiz, não apenas o sintoma.
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
              <WhatsAppIcon size={18} />
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
