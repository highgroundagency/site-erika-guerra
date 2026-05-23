import { motion } from 'framer-motion';

interface BrandSymbolProps {
  color?: string;      // mantido por compatibilidade, não usado com a imagem PNG
  size?: number;
  animate?: boolean;
  className?: string;
}

const LOGO_SRC = '/logo-simbolo-dourado-removebg-preview.png';

/**
 * Símbolo oficial da Dra. Érika Guerra.
 * Usa o PNG real com fundo transparente (logo-simbolo-dourado-removebg-preview.png).
 */
export function BrandSymbol({
  size = 80,
  animate = true,
  className = '',
}: BrandSymbolProps) {
  return (
    <motion.img
      src={LOGO_SRC}
      alt="Símbolo Dra. Érika Guerra — árvore da vida"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
      initial={animate ? { opacity: 0, scale: 0.7 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : false}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      draggable={false}
    />
  );
}

export default BrandSymbol;
