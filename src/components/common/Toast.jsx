import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toasts = [], removeToast }) {
  return (
    <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none select-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          let bgClass = 'bg-[#0b1020]/90 backdrop-blur-xl';
          let borderClass = 'border-l-4 border-accent-primary';
          let Icon = Info;
          let iconColor = 'text-accent-primary';

          if (toast.type === 'success') {
            borderClass = 'border-l-4 border-emerald-500';
            Icon = CheckCircle;
            iconColor = 'text-emerald-500';
          } else if (toast.type === 'error') {
            borderClass = 'border-l-4 border-rose-500';
            Icon = AlertCircle;
            iconColor = 'text-rose-500';
          }

          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className={`pointer-events-auto flex items-center justify-between p-4 rounded-xl shadow-2xl border border-white/5 ${bgClass} ${borderClass}`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`${iconColor} flex-shrink-0`} size={18} />
                <span className="text-xs font-semibold text-white">
                  {toast.message}
                </span>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-text-secondary hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Dismiss notification"
              >
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
