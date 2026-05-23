import { motion } from 'framer-motion';

interface BrandSymbolProps {
  color?: string;
  size?: number;
  animate?: boolean;
  className?: string;
}

/**
 * Símbolo oficial da Dra. Érika Guerra em SVG inline.
 * Figura estilizada de pessoa com braços abertos saindo de uma forma
 * circular tipo árvore-da-vida, traços finos.
 * Recriado a partir do logo oficial para renderização cristalina em qualquer tamanho.
 */
export function BrandSymbol({
  color = '#B49964',
  size = 80,
  animate = true,
  className = '',
}: BrandSymbolProps) {
  // Use CSS animation for draw-on effect instead of Framer Motion variants to avoid type issues
  const pathStyle = animate
    ? {
        strokeDasharray: 2000,
        strokeDashoffset: 0,
        animation: 'draw 2s ease-in-out forwards',
      }
    : {};

  const circleStyle = animate
    ? {
        strokeDasharray: 200,
        strokeDashoffset: 0,
        animation: 'draw 2s ease-in-out forwards',
      }
    : {};

  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={animate ? { opacity: 0, scale: 0.8 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : false}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-label="Símbolo Dra. Érika Guerra — árvore da vida"
    >
      {/* ── Semicírculo base ── */}
      <path d="M 30 145 A 72 72 0 0 1 170 145" style={pathStyle} />

      {/* ── Raízes / pernas ── */}
      <path d="M 100 145 L 100 110" style={pathStyle} />
      <path d="M 100 130 L 72 148" style={pathStyle} />
      <path d="M 100 130 L 128 148" style={pathStyle} />

      {/* ── Braços ── */}
      <path d="M 100 100 L 60 115" style={pathStyle} />
      <path d="M 100 100 L 140 115" style={pathStyle} />
      <path d="M 60 115 L 38 108" style={pathStyle} />
      <path d="M 140 115 L 162 108" style={pathStyle} />

      {/* ── Cabeça / círculo central ── */}
      <circle cx="100" cy="90" r="9" style={circleStyle} />

      {/* ── Tronco ── */}
      <path d="M 100 79 L 100 68" style={pathStyle} />

      {/* ── Galhos superiores — centro ── */}
      <path d="M 100 68 L 100 45" style={pathStyle} />

      {/* ── Galhos laterais principais ── */}
      <path d="M 100 62 L 74 50" style={pathStyle} />
      <path d="M 100 62 L 126 50" style={pathStyle} />

      {/* ── Sub-galhos esquerdos ── */}
      <path d="M 74 50 L 55 40" style={pathStyle} />
      <path d="M 74 50 L 66 35" style={pathStyle} />
      <path d="M 55 40 L 44 30" style={pathStyle} />
      <path d="M 55 40 L 42 42" style={pathStyle} />

      {/* ── Sub-galhos direitos ── */}
      <path d="M 126 50 L 145 40" style={pathStyle} />
      <path d="M 126 50 L 134 35" style={pathStyle} />
      <path d="M 145 40 L 156 30" style={pathStyle} />
      <path d="M 145 40 L 158 42" style={pathStyle} />

      {/* ── Galho do topo ── */}
      <path d="M 100 45 L 86 32" style={pathStyle} />
      <path d="M 100 45 L 114 32" style={pathStyle} />
      <path d="M 100 45 L 100 28" style={pathStyle} />
    </motion.svg>
  );
}

export default BrandSymbol;
