// ============================================================
// PROGRAMAS — Dra. Érika Guerra
// Cards exibidos na seção "Programas" do site.
// Para adicionar um novo programa, basta acrescentar um objeto
// neste array — o componente <Programas /> renderiza sozinho.
// O ícone é um componente lucide-react (importe e referencie).
// ============================================================

import type { LucideIcon } from 'lucide-react';
import { Sprout, Flower2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from './contact';

export interface Programa {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  whatsappMessage: string;
}

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const programas: Programa[] = [
  {
    id: 'emagrecimento',
    icon: Sprout,
    title: 'Programa de Emagrecimento',
    tagline: 'A porta de entrada',
    description:
      'Emagrecimento com leveza, tratando a causa — não a balança. Acompanhamento médico e nutricional, com olhar funcional sobre metabolismo, sono, hormônios e rotina.',
    whatsappMessage:
      'Olá, Dra. Érika! Tenho interesse no Programa de Emagrecimento.',
  },
  {
    id: 'climaterio',
    icon: Flower2,
    title: 'Acompanhamento do Climatério',
    tagline: 'Transição com cuidado',
    description:
      'Cuidado para a fase de transição hormonal — climatério e perimenopausa: energia, sono, humor, metabolismo e qualidade de vida, com olhar funcional e integrativo.',
    whatsappMessage:
      'Olá, Dra. Érika! Tenho interesse no Acompanhamento do Climatério.',
  },
  /* NOVO PROGRAMA: preencher — importe o ícone lucide no topo do arquivo
  {
    id: 'longevidade',
    icon: Sparkles,
    title: 'Programa de Longevidade',
    tagline: 'Viver bem por mais tempo',
    description: '...',
    whatsappMessage: 'Olá, Dra. Érika! Tenho interesse no Programa de Longevidade.',
  },
  */
];

export function programaWhatsAppUrl(p: Programa): string {
  return buildWhatsAppUrl(p.whatsappMessage);
}
