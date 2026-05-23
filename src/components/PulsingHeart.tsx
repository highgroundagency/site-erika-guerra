import { motion } from 'framer-motion';

interface PulsingHeartProps {
  color?: string;
  size?: number;
  className?: string;
}

/**
 * Coração pulsante com linha de ECG — simula batimento real (sístole/diástole).
 * Animação contínua com curva de batimento cardíaco.
 */
export function PulsingHeart({
  color = '#B49964',
  size = 48,
  className = '',
}: PulsingHeartProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Coração estilizado SVG */}
      <motion.svg
        viewBox="0 0 40 36"
        width={size}
        height={size * 0.9}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          scale: [1, 1.18, 1, 1.09, 1, 1],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.14, 0.28, 0.42, 0.56, 1],
        }}
        aria-label="Coração pulsante"
      >
        <path d="M20 33 C20 33 3 22 3 11 C3 6 7 2 12 2 C15.5 2 18.5 4 20 7 C21.5 4 24.5 2 28 2 C33 2 37 6 37 11 C37 22 20 33 20 33Z" />
      </motion.svg>

      {/* Linha de ECG animada */}
      <svg
        viewBox="0 0 120 40"
        width={size * 2.5}
        height={size * 0.8}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        overflow="visible"
      >
        <motion.path
          d="M0 20 L18 20 L22 20 L26 4 L30 36 L34 20 L38 20 L42 20 L46 20 L50 20 L54 20 L58 20 L62 20 L66 20 L70 4 L74 36 L78 20 L82 20 L86 20 L90 20 L94 20 L98 20 L102 20 L106 20 L110 20 L114 20 L120 20"
          strokeDasharray="200"
          animate={{ strokeDashoffset: [200, -200] }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </svg>
    </div>
  );
}

export default PulsingHeart;
