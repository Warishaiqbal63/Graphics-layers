import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "../data/content";

export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-xl"
          >
            <span>Chat with us</span>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setShowTip(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        aria-label="Chat on WhatsApp"
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-shadow duration-300 hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.742 3.046 9.378L1.054 31.29l6.118-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.012-3.168 2.278-.846.18-1.95.324-5.67-1.218-4.762-1.974-7.828-6.8-8.066-7.114-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.644-3.928c.43-.472.94-.59 1.254-.59.314 0 .628.002.902.016.29.014.678-.11 1.06.808.39.94 1.33 3.246 1.448 3.482.118.236.196.51.04.824-.158.314-.236.51-.472.784-.236.274-.496.612-.708.822-.236.236-.482.492-.208.964.274.472 1.218 2.01 2.616 3.258 1.798 1.604 3.314 2.1 3.786 2.336.472.236.748.196 1.022-.118.274-.314 1.176-1.372 1.49-1.844.314-.472.628-.392 1.06-.236.43.158 2.738 1.292 3.208 1.528.472.236.784.354.902.55.118.196.118 1.138-.272 2.238z" />
        </svg>
      </motion.a>
    </div>
  );
}
