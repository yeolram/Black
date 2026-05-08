import React from 'react';
import { motion } from 'motion/react';
import { EditableText } from './EditableText';
import { PortfolioContent, ThemeConfig } from '../types';
import { Plus, X } from 'lucide-react';

interface AboutProps {
  content: PortfolioContent['about'];
  updateContent: (content: Partial<PortfolioContent['about']>) => void;
  isEditMode: boolean;
  theme: ThemeConfig;
}

export function About({ content, updateContent, isEditMode, theme }: AboutProps) {
  const addSkill = () => {
    updateContent({ skills: [...content.skills, '새로운 스킬'] });
  };

  const removeSkill = (index: number) => {
    updateContent({ skills: content.skills.filter((_, i) => i !== index) });
  };

  const updateSkill = (index: number, val: string) => {
    const newSkills = [...content.skills];
    newSkills[index] = val;
    updateContent({ skills: newSkills });
  };

  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center py-24 px-6 lg:px-12 overflow-hidden gap-12 md:gap-0">
      {/* Left Text */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:absolute left-6 md:left-12 lg:left-24 md:top-32 lg:top-40 z-10 w-full md:w-auto text-center md:text-left"
      >
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium uppercase tracking-wide leading-[0.85] text-[#eef3f0] drop-shadow-sm font-display mb-6">
          WHO AM I
        </h2>
        <div className="text-sm md:border-l-2 md:border-[#7ed8c2]/50 md:pl-3 font-light text-neutral-300 leading-relaxed font-sans max-w-xs mx-auto md:mx-0">
          <p>My name is ezen</p>
          <p>I keep thinking and learning</p>
          <p>about user and design.</p>
        </div>
      </motion.div>

      {/* Center Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] landscape:max-w-[20rem] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-0 bg-[#a1a1a1]"
      >
        <img 
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
          alt="Profile" 
          className="w-full h-full object-cover mix-blend-multiply opacity-80"
        />
        {/* Triangle Overlay on Face */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mt-[-10%]">
          <svg className="w-[45%] h-[45%] drop-shadow-2xl" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <polygon points="10,20 90,20 50,85" fill="#a89a8c" />
          </svg>
        </div>
      </motion.div>

      {/* Right/Bottom Text and Button */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="md:absolute right-6 md:right-12 lg:right-24 md:bottom-16 lg:bottom-24 z-10 flex flex-col md:items-end items-center text-center md:text-right w-full md:w-auto"
      >
        <a 
          href="#about"
          className="rounded-[2rem] border border-[#7ed8c2] px-8 py-2.5 text-xs font-medium text-[#7ed8c2] transition-colors hover:bg-[#7ed8c2]/10 bg-transparent mb-6 inline-block"
        >
          About me
        </a>
        <div className="text-xs sm:text-sm font-light text-neutral-300 leading-loose break-keep max-w-[22rem]">
          더 많은 생각과 깊은 고민이 좋은 디자인을 만들어낸다고 믿습니다.<br className="hidden sm:block" />
          사람들의 생각과 감정을 더 깊이 이해하기 위해 철학과 심리를 배웠습니다.<br className="hidden sm:block" />
          디자인을 통한 사용자의 진정한 편안함과 만족을 추구합니다.
        </div>
      </motion.div>
    </section>
  );
}
