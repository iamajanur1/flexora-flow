import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/7086484190"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-glow hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all animate-bounce-slow"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
};

export default WhatsAppButton;
