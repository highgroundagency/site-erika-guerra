import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface VslPlayerProps {
  posterSrc?: string;
  videoSrc?: string;
  youtubeId?: string;
  vimeoId?: string;
}

/**
 * Player de vídeo de vendas (VSL).
 * Se não houver poster, exibe um placeholder premium com identidade da marca.
 */
export function VslPlayer({
  posterSrc,
  youtubeId,
  vimeoId,
  videoSrc,
}: VslPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [posterError, setPosterError] = useState(false);

  const hasVideo = youtubeId || vimeoId || videoSrc;
  const showPoster = posterSrc && !posterError;

  if (playing && hasVideo) {
    if (youtubeId) {
      return (
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Mensagem da Dra. Érika Guerra"
          />
        </div>
      );
    }
    if (vimeoId) {
      return (
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Mensagem da Dra. Érika Guerra"
          />
        </div>
      );
    }
    if (videoSrc) {
      return (
        <video
          className="w-full rounded-2xl"
          src={videoSrc}
          autoPlay
          controls
          title="Mensagem da Dra. Érika Guerra"
        />
      );
    }
  }

  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
      style={{ paddingTop: '56.25%' }}
      onClick={() => hasVideo && setPlaying(true)}
      role="button"
      aria-label="Assistir mensagem da Dra. Érika Guerra"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && hasVideo) {
          e.preventDefault();
          setPlaying(true);
        }
      }}
      whileHover={hasVideo ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {/* ── Background: foto poster OU placeholder de marca ── */}
      <div className="absolute inset-0">

        {showPoster ? (
          <img
            src={posterSrc}
            alt="Prévia do vídeo — Dra. Érika Guerra"
            className="w-full h-full object-cover"
            onError={() => setPosterError(true)}
            loading="lazy"
          />
        ) : (
          /* Placeholder premium — sem imagem ainda */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-6 relative"
            style={{
              background: 'linear-gradient(135deg, #0E3528 0%, #175442 50%, #0E3528 100%)',
            }}
          >
            {/* Grain */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
              }}
            />
            {/* Brand symbol */}
            <svg
              viewBox="0 0 200 200"
              width="64"
              height="64"
              fill="none"
              stroke="rgba(180,153,100,0.35)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10"
              aria-hidden="true"
            >
              <path d="M 30 145 A 72 72 0 0 1 170 145"/>
              <path d="M 100 145 L 100 110"/>
              <path d="M 100 130 L 72 148"/>
              <path d="M 100 130 L 128 148"/>
              <path d="M 100 100 L 60 115"/>
              <path d="M 100 100 L 140 115"/>
              <path d="M 60 115 L 38 108"/>
              <path d="M 140 115 L 162 108"/>
              <circle cx="100" cy="90" r="9"/>
              <path d="M 100 79 L 100 55"/>
              <path d="M 100 62 L 74 50"/>
              <path d="M 100 62 L 126 50"/>
              <path d="M 74 50 L 55 40"/>
              <path d="M 74 50 L 66 35"/>
              <path d="M 126 50 L 145 40"/>
              <path d="M 126 50 L 134 35"/>
              <path d="M 100 55 L 86 40"/>
              <path d="M 100 55 L 114 40"/>
              <path d="M 100 55 L 100 30"/>
            </svg>

            <div className="relative z-10 text-center px-8">
              <p
                className="font-display italic"
                style={{ color: 'rgba(246,234,220,0.5)', fontSize: '0.95rem' }}
              >
                Dra. Érika Guerra
              </p>
              <p
                className="font-body text-xs mt-1"
                style={{ color: 'rgba(180,153,100,0.4)', letterSpacing: '0.08em' }}
              >
                Medicina transformando vidas
              </p>
            </div>
          </div>
        )}

        {/* Overlay gradient escuro para contraste no play button */}
        <div
          className="absolute inset-0"
          style={{
            background: showPoster
              ? 'linear-gradient(to top, rgba(14,53,40,0.85) 0%, rgba(14,53,40,0.2) 60%, transparent 100%)'
              : 'linear-gradient(to top, rgba(9,31,23,0.6) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Play button + legenda ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">

        <motion.div
          className="flex items-center justify-center w-20 h-20 rounded-full border-2"
          style={{
            backgroundColor: hasVideo ? 'rgba(180,153,100,0.92)' : 'rgba(180,153,100,0.25)',
            borderColor: hasVideo ? '#D4B883' : 'rgba(212,184,131,0.35)',
          }}
          whileHover={hasVideo ? { scale: 1.12, backgroundColor: 'rgba(212,184,131,0.95)' } : undefined}
          transition={{ duration: 0.2 }}
        >
          <Play
            className="w-8 h-8 fill-current ml-1"
            style={{ color: hasVideo ? '#0E3528' : 'rgba(246,234,220,0.4)' }}
          />
        </motion.div>

        <p className="font-body font-medium text-sm text-center px-6 leading-snug" style={{ color: '#F6EADC' }}>
          Assista: a mensagem da Dra. Érika para você
        </p>

        {/* Badge "em breve" quando não há vídeo */}
        {!hasVideo && (
          <span
            className="font-body text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(180,153,100,0.15)',
              border: '1px solid rgba(180,153,100,0.3)',
              color: 'rgba(212,184,131,0.7)',
              letterSpacing: '0.06em',
            }}
          >
            vídeo em breve
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default VslPlayer;
