import { motion } from 'framer-motion';

interface SectionLabelProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  /** Tom do texto/linhas — claro para fundos escuros, padrão dourado */
  tone?: 'gold' | 'light';
}

/**
 * Eyebrow padrão das seções: linha(s) dourada(s) + rótulo em caixa-alta.
 * Centraliza o padrão antes repetido (com pequenas divergências) em cada seção.
 */
export function SectionLabel({ children, align = 'left', tone = 'gold' }: SectionLabelProps) {
  const lineColor = tone === 'gold' ? '#B49964' : 'rgba(180,153,100,0.9)';
  const textColor = tone === 'gold' ? '#B49964' : '#D4B883';

  return (
    <motion.div
      className={`flex items-center gap-4 mb-7 ${align === 'center' ? 'justify-center' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span
        className={align === 'center' ? 'h-px w-10' : 'h-px w-12'}
        style={{ backgroundColor: lineColor }}
      />
      <span
        className="font-body font-semibold uppercase"
        style={{ color: textColor, fontSize: '0.72rem', letterSpacing: '0.22em' }}
      >
        {children}
      </span>
      {align === 'center' && <span className="h-px w-10" style={{ backgroundColor: lineColor }} />}
    </motion.div>
  );
}

export default SectionLabel;
