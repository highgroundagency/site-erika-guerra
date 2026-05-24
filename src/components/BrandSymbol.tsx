import { motion } from 'framer-motion';

interface BrandSymbolProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

const LOGO_SRC = '/logo-simbolo-dourado-removebg-preview.png';

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
      loading="lazy"
      decoding="async"
    />
  );
}

export default BrandSymbol;
