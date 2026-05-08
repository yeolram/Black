import React from 'react';
import { motion } from 'motion/react';
import { EditableText } from './EditableText';
import { PortfolioContent, ThemeConfig } from '../types';

interface ContactProps {
  content: PortfolioContent['contact'];
  updateContent: (content: Partial<PortfolioContent['contact']>) => void;
  isEditMode: boolean;
  theme: ThemeConfig;
}

export function Contact({ content, updateContent, isEditMode, theme }: ContactProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-sm tracking-[0.2em] uppercase text-neutral-500 mb-8 ${theme.fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}>
            Contact
          </h2>
          <EditableText
            value={content.title}
            onSave={(val) => updateContent({ title: val })}
            isEditMode={isEditMode}
            multiline
            className={`text-4xl sm:text-6xl font-medium leading-tight mb-16 ${theme.fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}
          />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-lg font-light">
            <div className="flex flex-col items-center">
              <span className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">Email</span>
              {isEditMode ? (
                <input
                  type="text"
                  value={content.email}
                  onChange={(e) => updateContent({ email: e.target.value })}
                  className="bg-transparent border-b border-white/30 text-center px-2 py-1 outline-none focus:border-white transition-colors"
                />
              ) : (
                <a href={`mailto:${content.email}`} className="hover:text-white/80 transition-colors">
                  {content.email}
                </a>
              )}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">Instagram</span>
              {isEditMode ? (
                <input
                  type="text"
                  value={content.instagram}
                  onChange={(e) => updateContent({ instagram: e.target.value })}
                  className="bg-transparent border-b border-white/30 text-center px-2 py-1 outline-none focus:border-white transition-colors"
                />
              ) : (
                <a href={content.instagram} target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">
                  @instagram_id
                </a>
              )}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">LinkedIn</span>
              {isEditMode ? (
                <input
                  type="text"
                  value={content.linkedin}
                  onChange={(e) => updateContent({ linkedin: e.target.value })}
                  className="bg-transparent border-b border-white/30 text-center px-2 py-1 outline-none focus:border-white transition-colors"
                />
              ) : (
                <a href={content.linkedin} target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">
                  LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-neutral-600 font-light">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </section>
  );
}
