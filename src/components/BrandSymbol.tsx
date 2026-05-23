import { motion } from 'framer-motion';

interface BrandSymbolProps {
  color?: string;
  size?: number;
  animate?: boolean;
  className?: string;
}

/**
 * Símbolo oficial da Dra. Érika Guerra recriado em SVG inline.
 * Figura estilizada: pessoa com braços abertos, copa de árvore ramificada
 * acima e semicírculo completo na base. Traços finos dourados.
 */
export function BrandSymbol({
  color = '#B49964',
  size = 80,
  animate = true,
  className = '',
}: BrandSymbolProps) {
  const strokeW = size > 60 ? 5.5 : 6.5;

  return (
    <motion.svg
      viewBox="0 0 200 210"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={animate ? { opacity: 0, scale: 0.7 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : false}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      aria-label="Símbolo Dra. Érika Guerra — árvore da vida"
    >
      {/* ── Semicírculo base completo ── */}
      <path d="M 18 148 A 82 82 0 0 1 182 148" />

      {/* ── Raízes / pernas descendo ao semicírculo ── */}
      <path d="M 100 148 L 100 112" />
      {/* Raiz esquerda */}
      <path d="M 100 135 C 85 138 60 145 40 148" />
      {/* Raiz direita */}
      <path d="M 100 135 C 115 138 140 145 160 148" />

      {/* ── Braços horizontais largos ── */}
      <path d="M 100 105 L 30 112" />
      <path d="M 100 105 L 170 112" />
      {/* Cotovelos / terminações dos braços */}
      <path d="M 30 112 L 15 106" />
      <path d="M 170 112 L 185 106" />

      {/* ── Cabeça (círculo) ── */}
      <circle cx="100" cy="93" r="10" />

      {/* ── Tronco ── */}
      <path d="M 100 83 L 100 58" />

      {/* ── Copa: galhos principais ── */}
      {/* Galho central para o topo */}
      <path d="M 100 58 L 100 32" />
      {/* Galho esquerdo principal */}
      <path d="M 100 58 L 68 44" />
      {/* Galho direito principal */}
      <path d="M 100 58 L 132 44" />

      {/* ── Sub-galhos esquerda ── */}
      <path d="M 68 44 L 44 32" />
      <path d="M 68 44 L 56 28" />
      {/* Sub-sub-galhos esquerda */}
      <path d="M 44 32 L 28 22" />
      <path d="M 44 32 L 36 18" />
      <path d="M 44 32 L 22 36" />

      {/* ── Sub-galhos direita ── */}
      <path d="M 132 44 L 156 32" />
      <path d="M 132 44 L 144 28" />
      {/* Sub-sub-galhos direita */}
      <path d="M 156 32 L 172 22" />
      <path d="M 156 32 L 164 18" />
      <path d="M 156 32 L 178 36" />

      {/* ── Galhos do topo (centro) ── */}
      <path d="M 100 32 L 88 18" />
      <path d="M 100 32 L 112 18" />
      <path d="M 100 32 L 100 15" />
    </motion.svg>
  );
}

export default BrandSymbol;
