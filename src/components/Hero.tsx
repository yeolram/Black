import React from 'react';
import { motion } from 'motion/react';
import { EditableText } from './EditableText';
import { PortfolioContent, ThemeConfig } from '../types';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  content: PortfolioContent['hero'];
  updateContent: (content: Partial<PortfolioContent['hero']>) => void;
  isEditMode: boolean;
  theme: ThemeConfig;
}

export function Hero({ content, updateContent, isEditMode, theme }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-8 px-6 lg:px-12">
      {/* Main Center Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center w-full max-w-[80rem] mx-auto pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full"
        >
          <EditableText
            value={content.slogan}
            onSave={(val) => updateContent({ slogan: val })}
            isEditMode={isEditMode}
            multiline
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium uppercase tracking-wide leading-[0.85] text-[#eef3f0] drop-shadow-sm font-display`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="w-full mt-[22px] sm:mt-[24px]"
        >
          <EditableText
            value={content.description}
            onSave={(val) => updateContent({ description: val })}
            isEditMode={isEditMode}
            multiline
            className="text-[10px] sm:text-xs text-neutral-300 font-medium uppercase tracking-[0.2em] leading-relaxed"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a href="#about" className="animate-bounce rounded-full border border-neutral-600/60 p-1.5 text-[#eef3f0] hover:text-white hover:border-white transition-colors cursor-pointer bg-transparent block">
            <ArrowDown strokeWidth={1.5} size={16} />
          </a>
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full flex justify-between items-end"
      >
        <a 
          href="#works" 
          className="rounded-[2rem] border border-neutral-500/50 px-6 py-2.5 text-xs tracking-wide font-medium text-neutral-300 transition-colors hover:border-white hover:text-white bg-transparent"
        >
          Explore work
        </a>
        <a 
          href="#contact" 
          className="rounded-[2rem] border border-neutral-500/50 px-6 py-2.5 text-xs tracking-wide font-medium text-neutral-300 transition-colors hover:border-white hover:text-white bg-transparent"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
