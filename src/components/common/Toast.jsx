import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const ICONS = { success: CheckCircle, error: AlertCircle, info: Info };

export default function Toast({ toasts = [], removeToast }) {
  return (
    <div className="fixed top-24 right-4 sm:right-6 z-[70] flex flex-col gap-3 max-w-sm w-[calc(100%-2rem)] sm:w-full pointer-events-none select-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = ICONS[toast.type] || Info;
          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto flex items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--color-ink)] text-white shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-white/80 shrink-0" size={18} />
                <span className="text-sm font-medium">{toast.message}</span>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                data-cursor="hover"
                className="text-white/50 hover:text-white p-1 transition-colors"
                aria-label="Dismiss notification"
              >
                <X size={15} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
