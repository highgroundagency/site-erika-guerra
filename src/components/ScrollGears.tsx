import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SingleGearProps {
  cx: number;
  cy: number;
  r: number;
  teeth: number;
  toothH: number;
  color?: string;
  direction?: 1 | -1;
  scrollProgress: ReturnType<typeof useTransform<number, number>>;
}

function buildGearPath(cx: number, cy: number, r: number, teeth: number, toothH: number): string {
  const inner = r;
  const outer = r + toothH;
  const toothWidth = (2 * Math.PI) / teeth;
  let d = '';

  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * 2 * Math.PI - Math.PI / 2;
    const a1 = a0 + toothWidth * 0.3;
    const a3 = a0 + toothWidth * 0.7;
    const a4 = a0 + toothWidth;

    const p = (angle: number, rr: number) => ({
      x: cx + rr * Math.cos(angle),
      y: cy + rr * Math.sin(angle),
    });

    const pts = [p(a0, inner), p(a1, outer), p(a3, outer), p(a4, inner)];

    if (i === 0) d += `M ${pts[0].x} ${pts[0].y}`;
    else d += ` L ${pts[0].x} ${pts[0].y}`;

    d += ` L ${pts[1].x} ${pts[1].y} L ${pts[2].x} ${pts[2].y} L ${pts[3].x} ${pts[3].y}`;

    // Arc along inner radius to next tooth
    const nextA = a4;
    const nextP = p(nextA, inner);
    d += ` A ${inner} ${inner} 0 0 1 ${nextP.x} ${nextP.y}`;
  }
  return d + ' Z';
}

function SingleGear({ cx, cy, r, teeth, toothH, color = '#B49964', direction = 1, scrollProgress }: SingleGearProps) {
  const rotate = useTransform(scrollProgress, (v) => v * direction * 360);
  const gearPath = buildGearPath(cx, cy, r, teeth, toothH);

  return (
    <motion.g
      style={{ rotate, originX: `${cx}px`, originY: `${cy}px` }}
    >
      <path
        d={gearPath}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity={0.7}
      />
      <circle cx={cx} cy={cy} r={r * 0.28} fill="none" stroke={color} strokeWidth="2" opacity={0.7} />
      <circle cx={cx} cy={cy} r={5} fill={color} opacity={0.7} />
    </motion.g>
  );
}

export function ScrollGears({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={ref} className={`flex justify-center items-center py-4 ${className}`}>
      <svg
        viewBox="0 0 300 160"
        width="300"
        height="160"
        style={{ overflow: 'visible' }}
      >
        <SingleGear cx={75}  cy={80} r={48} teeth={14} toothH={11} color="#B49964" direction={1}  scrollProgress={scrollYProgress} />
        <SingleGear cx={185} cy={80} r={36} teeth={11} toothH={9}  color="#D4B883" direction={-1} scrollProgress={scrollYProgress} />
        <SingleGear cx={255} cy={52} r={22} teeth={8}  toothH={7}  color="#B49964" direction={1}  scrollProgress={scrollYProgress} />
      </svg>
    </div>
  );
}

export default ScrollGears;
