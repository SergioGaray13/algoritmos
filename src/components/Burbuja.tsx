import { motion } from 'framer-motion';

export function Burbuja({ texto }: { texto: string }) {
  return (
    <motion.div
      className="flex items-center justify-center w-auto h-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {texto}
    </motion.div>
  );
}
