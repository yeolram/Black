import React from 'react';
import { motion } from 'motion/react';
import { EditableText } from './EditableText';
import { PortfolioContent, ThemeConfig } from '../types';
import { Plus, X, Image as ImageIcon } from 'lucide-react';

interface WorksProps {
  content: PortfolioContent['works'];
  updateContent: (content: Partial<PortfolioContent['works']>) => void;
  isEditMode: boolean;
  theme: ThemeConfig;
}

export function Works({ content, updateContent, isEditMode, theme }: WorksProps) {
  const addProject = () => {
    updateContent({
      projects: [
        ...content.projects,
        {
          id: Date.now().toString(),
          title: '새로운 프로젝트',
          description: '프로젝트에 대한 간단한 설명을 입력하세요.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
          link: '#'
        }
      ]
    });
  };

  const removeProject = (id: string) => {
    updateContent({ projects: content.projects.filter(p => p.id !== id) });
  };

  const updateProject = (id: string, updates: Partial<PortfolioContent['works']['projects'][0]>) => {
    updateContent({
      projects: content.projects.map(p => p.id === id ? { ...p, ...updates } : p)
    });
  };

  return (
    <section id="works" className="py-24 sm:py-32 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-sm tracking-[0.2em] uppercase text-neutral-500 mb-4 ${theme.fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}>
              Selected Works
            </h2>
            <EditableText
              value={content.title}
              onSave={(val) => updateContent({ title: val })}
              isEditMode={isEditMode}
              className={`text-3xl sm:text-4xl font-medium leading-tight inline-block ${theme.fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}
            />
          </motion.div>

          {isEditMode && (
            <button onClick={addProject} className="text-sm flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors">
              <Plus size={16} /> 프로젝트 추가
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
          {content.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
              className="group relative"
            >
              {isEditMode && (
                <button
                  onClick={() => removeProject(project.id)}
                  className="absolute -top-4 -right-4 z-20 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X size={16} />
                </button>
              )}
              
              <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-neutral-900 rounded-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-1000 ${!isEditMode && "group-hover:scale-105 group-hover:opacity-80"}`}
                />
                
                {isEditMode && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity p-6">
                    <div className="w-full max-w-md bg-black/80 p-4 rounded border border-white/20 backdrop-blur-md">
                      <label className="text-xs text-neutral-400 mb-2 flex items-center gap-2"><ImageIcon size={14}/> 이미지 URL</label>
                      <input
                        type="text"
                        value={project.image}
                        onChange={(e) => updateProject(project.id, { image: e.target.value })}
                        className="w-full bg-transparent border-b border-white/30 text-sm px-2 py-1 outline-none focus:border-white transition-colors"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <EditableText
                  value={project.title}
                  onSave={(val) => updateProject(project.id, { title: val })}
                  isEditMode={isEditMode}
                  className={`text-xl sm:text-2xl font-medium mb-3 ${theme.fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}
                />
                <EditableText
                  value={project.description}
                  onSave={(val) => updateProject(project.id, { description: val })}
                  isEditMode={isEditMode}
                  multiline
                  className="text-neutral-400 font-light leading-relaxed mb-6"
                />
                
                {isEditMode ? (
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-xs text-neutral-500">Link:</span>
                    <input
                      type="text"
                      value={project.link}
                      onChange={(e) => updateProject(project.id, { link: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-sm outline-none flex-grow focus:border-white transition-colors"
                    />
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium border-b border-white/30 hover:border-white pb-0.5 transition-colors"
                    style={{ color: theme.accentColor !== '#ffffff' ? theme.accentColor : undefined }}
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
