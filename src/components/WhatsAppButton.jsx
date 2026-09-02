import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { socials } from "../data/portfolioData";

export default function WhatsAppButton() {
  if (!socials.whatsapp) return null;

  const link = `https://wa.me/${socials.whatsapp}?text=${encodeURIComponent(
    "Hi Adhithiyan! I'd like to talk about getting a website/booking system for my business."
  )}`;

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-20 md:right-24 z-[88] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>
    </motion.a>
  );
}