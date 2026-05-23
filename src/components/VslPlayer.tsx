import { useState } from 'react';
import { Play } from 'lucide-react';

interface VslPlayerProps {
  posterSrc?: string;
  videoSrc?: string;
  youtubeId?: string;
  vimeoId?: string;
}

/**
 * Player de vídeo de vendas (VSL).
 * SUBSTITUIR: adicione youtubeId, vimeoId ou videoSrc com o vídeo real
 */
export function VslPlayer({
  posterSrc = '/photos/vsl-poster.jpg',
  youtubeId,
  vimeoId,
  videoSrc,
}: VslPlayerProps) {
  const [playing, setPlaying] = useState(false);

  const hasVideo = youtubeId || vimeoId || videoSrc;

  if (playing && hasVideo) {
    if (youtubeId) {
      return (
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Vídeo Dra. Érika Guerra"
          />
        </div>
      );
    }
    if (vimeoId) {
      return (
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-2xl"
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vídeo Dra. Érika Guerra"
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
        />
      );
    }
  }

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
      style={{ paddingTop: '56.25%', backgroundColor: '#0E3528' }}
      onClick={() => setPlaying(true)}
      role="button"
      aria-label="Assistir mensagem da Dra. Érika"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
    >
      {/* Poster */}
      {posterSrc && (
        <img
          src={posterSrc}
          alt="Prévia do vídeo — Dra. Érika Guerra"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          loading="lazy"
        />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-verde-eclipse/80 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div
          className="flex items-center justify-center w-20 h-20 rounded-full border-2 group-hover:scale-110 transition-transform"
          style={{ backgroundColor: 'rgba(180,153,100,0.9)', borderColor: '#D4B883' }}
        >
          <Play className="w-8 h-8 fill-current ml-1" style={{ color: '#0E3528' }} />
        </div>
        <p className="text-sm font-body font-medium text-center px-4" style={{ color: '#F6EADC' }}>
          Assista: a mensagem da Dra. Érika para você
        </p>
      </div>

      {/* SUBSTITUIR: adicione youtubeId, vimeoId ou videoSrc */}
      {!hasVideo && (
        <div
          className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded font-mono"
          style={{ backgroundColor: 'rgba(180,153,100,0.3)', color: '#D4B883' }}
        >
          VSL — aguardando vídeo
        </div>
      )}
    </div>
  );
}

export default VslPlayer;
