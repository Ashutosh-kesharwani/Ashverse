import { motion } from "framer-motion";

const MobileTechCard = ({ technology }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#1d1836] to-[#0b0a15] shadow-lg backdrop-blur-lg"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Floating Icon */}
      <motion.img
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        src={technology.icon}
        alt={technology.name}
        className="relative h-14 w-14 object-contain"
      />

      <p className="relative mt-3 text-center text-sm font-medium text-white">
        {technology.name}
      </p>
    </motion.div>
  );
};

export default MobileTechCard;
