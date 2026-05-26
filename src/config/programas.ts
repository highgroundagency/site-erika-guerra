// ============================================================
// PROGRAMAS — Dra. Érika Guerra
// Cards exibidos na seção "Programas" do site.
// Para adicionar um novo programa, basta acrescentar um objeto
// neste array — o componente <Programas /> renderiza sozinho.
// ============================================================

import { WHATSAPP_NUMBER } from './contact';

export interface Programa {
  id: string;
  icon: string;
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
    icon: '🌱',
    title: 'Programa de Emagrecimento',
    tagline: 'A porta de entrada',
    description:
      'Emagrecimento com leveza, tratando a causa — não a balança. Acompanhamento médico + nutricional, com olhar funcional sobre metabolismo, sono, hormônios e rotina.',
    whatsappMessage:
      'Olá, Dra. Érika! Tenho interesse no Programa de Emagrecimento.',
  },
  {
    id: 'climaterio',
    icon: '🌸',
    title: 'Acompanhamento do Climatério',
    tagline: 'Transição com cuidado',
    description:
      'Cuidado para a fase de transição hormonal — início do climatério e perimenopausa: energia, sono, humor, metabolismo e qualidade de vida com olhar funcional e integrativo.',
    whatsappMessage:
      'Olá, Dra. Érika! Tenho interesse no Acompanhamento do Climatério.',
  },
  /* NOVO PROGRAMA: preencher
  {
    id: 'longevidade',
    icon: '✨',
    title: 'Programa de Longevidade',
    tagline: 'Viver bem por mais tempo',
    description: '...',
    whatsappMessage: 'Olá, Dra. Érika! Tenho interesse no Programa de Longevidade.',
  },
  */
  /* NOVO PROGRAMA: preencher
  {
    id: 'sono',
    icon: '🌙',
    title: 'Programa do Sono',
    tagline: 'Restaurar o descanso',
    description: '...',
    whatsappMessage: 'Olá, Dra. Érika! Tenho interesse no Programa do Sono.',
  },
  */
];

export function programaWhatsAppUrl(p: Programa): string {
  return buildWhatsAppUrl(p.whatsappMessage);
}
