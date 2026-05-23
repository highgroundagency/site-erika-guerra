import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../config/contact';

export function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Agendar consulta via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full"
        style={{ animation: 'pulse-ring 2s ease-out infinite', backgroundColor: '#25D366' }}
      />
      {/* WhatsApp icon */}
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
        className="relative z-10"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.467 2.02 7.764L0 32l8.47-2.22A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.26 13.26 0 01-6.76-1.847l-.484-.288-5.024 1.317 1.34-4.9-.316-.502A13.257 13.257 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.817c-.398-.2-2.357-1.163-2.722-1.295-.365-.133-.63-.2-.896.2-.265.398-1.029 1.295-1.262 1.56-.232.265-.465.298-.863.1-.398-.2-1.682-.62-3.203-1.977-1.184-1.056-1.983-2.361-2.215-2.759-.233-.398-.025-.613.174-.812.18-.178.398-.465.597-.698.2-.232.265-.398.398-.664.133-.265.066-.498-.033-.697-.1-.2-.896-2.161-1.228-2.96-.323-.777-.652-.672-.896-.684l-.764-.013c-.265 0-.697.1-.1063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.853 1.627 4.119c.2.265 2.81 4.293 6.81 6.022.952.41 1.695.655 2.274.839.955.304 1.825.26 2.512.158.766-.114 2.357-.963 2.689-1.894.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.763-.465z" />
      </svg>
    </motion.a>
  );
}

export default WhatsAppFab;
