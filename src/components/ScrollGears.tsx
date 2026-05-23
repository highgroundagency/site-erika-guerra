import { motion, useScroll, useTransform } from 'framer-motion';

interface GearProps {
  cx: number;
  cy: number;
  r: number;
  teeth: number;
  toothH: number;
  color?: string;
  direction?: 1 | -1;
  rotationMultiplier?: number;
}

function Gear({ cx, cy, r, teeth, toothH, color = '#B49964', direction = 1, rotationMultiplier = 1 }: GearProps) {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, direction * 360 * rotationMultiplier]);

  const points: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * 2 * Math.PI;
    const angleNext = ((i + 0.5) / teeth) * 2 * Math.PI;
    const angleEnd = ((i + 1) / teeth) * 2 * Math.PI;

    const ox = cx + r * Math.cos(angle);
    const oy = cy + r * Math.sin(angle);
    const tx = cx + (r + toothH) * Math.cos(angleNext - 0.15);
    const ty = cy + (r + toothH) * Math.sin(angleNext - 0.15);
    const tx2 = cx + (r + toothH) * Math.cos(angleNext + 0.15);
    const ty2 = cy + (r + toothH) * Math.sin(angleNext + 0.15);
    const ex = cx + r * Math.cos(angleEnd);
    const ey = cy + r * Math.sin(angleEnd);

    points.push(`${ox},${oy} ${tx},${ty} ${tx2},${ty2} ${ex},${ey}`);
  }

  const gearPath = `M ${points.join(' L ')} Z`;

  return (
    <motion.g style={{ rotate, originX: cx, originY: cy }}>
      <motion.path
        d={gearPath}
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity={0.6}
        style={{ transformOrigin: `${cx}px ${cy}px`, rotate }}
      />
      <circle cx={cx} cy={cy} r={r * 0.35} fill="none" stroke={color} strokeWidth="2" opacity={0.6} />
      <circle cx={cx} cy={cy} r={4} fill={color} opacity={0.6} />
    </motion.g>
  );
}

export function ScrollGears({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center py-8 ${className}`}>
      <svg viewBox="0 0 280 160" width="280" height="160" className="overflow-visible">
        <Gear cx={80} cy={80} r={45} teeth={12} toothH={10} direction={1} rotationMultiplier={1.5} />
        <Gear cx={180} cy={80} r={35} teeth={10} toothH={8} color="#D4B883" direction={-1} rotationMultiplier={2} />
        <Gear cx={245} cy={55} r={22} teeth={8} toothH={6} direction={1} rotationMultiplier={2.5} />
      </svg>
    </div>
  );
}

export default ScrollGears;
