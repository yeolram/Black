import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeConfig } from '../types';
import { Settings, X, Palette, Image as ImageIcon, Type, Check } from 'lucide-react';

interface AdminPanelProps {
  theme: ThemeConfig;
  updateTheme: (theme: Partial<ThemeConfig>) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const colors = [
  { label: 'White', value: '#ffffff' },
  { label: 'Gold', value: '#d4af37' },
  { label: 'Soft Blue', value: '#8ab4f8' },
  { label: 'Rose', value: '#f48fb1' }
];

export function AdminPanel({ theme, updateTheme, isOpen, setIsOpen }: AdminPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-80 bg-neutral-900 border-l border-neutral-800 shadow-2xl z-50 flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-neutral-800">
            <h2 className="text-sm font-medium tracking-wider uppercase text-white flex items-center gap-2">
              <Settings size={16} /> Theme Settings
            </h2>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
            {/* Font Style */}
            <div className="space-y-3">
              <label className="text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <Type size={14} /> Typography
              </label>
              <div className="flex bg-neutral-950 p-1 rounded-lg">
                <button
                  onClick={() => updateTheme({ fontStyle: 'sans' })}
                  className={`flex-1 py-2 text-sm font-sans rounded-md transition-all ${theme.fontStyle === 'sans' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  Pretendard
                </button>
                <button
                  onClick={() => updateTheme({ fontStyle: 'serif' })}
                  className={`flex-1 py-2 text-sm font-serif rounded-md transition-all ${theme.fontStyle === 'serif' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  Noto Serif
                </button>
              </div>
            </div>

            {/* Accent Color */}
            <div className="space-y-3">
              <label className="text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <Palette size={14} /> Accent Color
              </label>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => updateTheme({ accentColor: c.value })}
                    className="h-10 rounded-full flex items-center justify-center border border-white/10 transition-transform hover:scale-105"
                    style={{ backgroundColor: c.value }}
                    title={c.label}
                  >
                    {theme.accentColor === c.value && (
                      <Check size={16} className={c.value === '#ffffff' ? 'text-black' : 'text-white'} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Image */}
            <div className="space-y-3">
              <label className="text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <ImageIcon size={14} /> Hero Background
              </label>
              <input
                type="text"
                value={theme.heroBgImage}
                onChange={(e) => updateTheme({ heroBgImage: e.target.value })}
                placeholder="Image URL..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 outline-none focus:border-white/50 transition-colors"
              />
              <p className="text-xs text-neutral-500 leading-relaxed">
                Provide an image URL to replace the hero background. Dark or monochrome images work best for contrast.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
