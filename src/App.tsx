import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Works } from './components/Works';
import { Contact } from './components/Contact';
import { PortfolioContent, ThemeConfig } from './types';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const initialContent: PortfolioContent = {
  hero: {
    slogan: 'BEYOND THE PAGE\nAND INTO THE WORLD',
    description: 'I TAKE STORIES FURTHER\nHERE\'S MY STORY.',
  },
  about: {
    title: '경계를 허무는\n시각적 여정',
    details: '지난 10년간 다양한 글로벌 브랜드와 협업하며 디지털 프로덕트와 브랜드 정체성을 구축해왔습니다. 사용자 중심의 사고와 심미적 완성도를 타협하지 않는 것이 제 작업의 핵심입니다.',
    skills: ['UI/UX Design', 'Brand Identity', 'Framer Motion', '3D Interaction', 'Typography'],
    values: '"좋은 디자인은 가장 적은 디자인이다"라는 디터 람스의 철학을 바탕으로, 불필요한 요소를 덜어내고 본질에 집중합니다.'
  },
  works: {
    title: 'Featured Works',
    projects: [
      {
        id: '1',
        title: 'Maison de Noir e-Commerce',
        description: '하이엔드 패션 브랜드의 디지털 스토어 경험 설계. 다크 모드 기반의 미니멀 인터페이스로 제품의 텍스처를 돋보이게 했습니다.',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop',
        link: 'https://example.com/project1'
      },
      {
        id: '2',
        title: 'Lumina Smart Home App',
        description: '스마트홈 제어를 위한 직관적인 모바일 애플리케이션. 복잡한 데이터를 단순한 시각적 위젯으로 변환했습니다.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop',
        link: 'https://example.com/project2'
      }
    ]
  },
  contact: {
    title: '새로운 프로젝트를\n함께 시작해볼까요?',
    email: 'hello@gildong.com',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/'
  }
};

const initialTheme: ThemeConfig = {
  accentColor: '#ffffff',
  fontStyle: 'sans',
  heroBgImage: 'none'
};

const StarryBackground = () => (
  <motion.div 
    className="fixed inset-0 pointer-events-none w-full"
    style={{ height: 'calc(100vh + 200px)' }}
    animate={{ y: [0, -200] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
  >
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="stars" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle fill="#fff" cx="20" cy="20" r="1.5" opacity="0.8"/>
          <circle fill="#fff" cx="150" cy="50" r="2" opacity="0.6"/>
          <circle fill="#fff" cx="80" cy="120" r="1.2" opacity="0.4"/>
          <circle fill="#fff" cx="180" cy="180" r="1" opacity="0.7"/>
          <circle fill="#fff" cx="40" cy="160" r="2.5" opacity="0.5"/>
          <circle fill="#fff" cx="110" cy="80" r="0.8" opacity="0.9"/>
          <circle fill="#fff" cx="10" cy="190" r="1.5" opacity="0.3"/>
          <circle fill="#fff" cx="180" cy="10" r="1.2" opacity="0.5"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#stars)" opacity="0.8" />
    </svg>
  </motion.div>
);

export default function App() {
  const [content, setContent] = useState<PortfolioContent>(initialContent);
  const [theme, setTheme] = useState<ThemeConfig>(initialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateContent = (section: keyof PortfolioContent, updates: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...updates }
    }));
  };

  return (
    <div 
      className={`relative min-h-screen bg-[#161817] text-white selection:bg-white/20 ${theme.fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}
      style={{ '--accent': theme.accentColor } as React.CSSProperties}
    >
      {/* Global Background */}
      {theme.heroBgImage && theme.heroBgImage !== 'none' ? (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img 
            src={theme.heroBgImage} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#161817]/80 to-[#161817]"></div>
        </div>
      ) : (
        <div className="fixed inset-0 z-0 overflow-hidden mix-blend-screen pointer-events-none">
          <StarryBackground />
        </div>
      )}

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#161817] flex flex-col pt-24 px-12 sm:px-24 md:px-48"
          >
            <header className="absolute top-0 left-0 right-0 px-6 lg:px-12 flex items-center justify-between h-24">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="font-semibold text-lg tracking-tight">Hyo-jeong</a>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
              >
                MENU <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded-full text-xs">X</span>
              </button>
            </header>

            <nav className="flex-1 flex flex-col justify-center max-w-xl mx-auto md:mx-0">
              <ul className="space-y-6 sm:space-y-8">
                {[
                  { name: 'HOME', href: '#', color: 'bg-red-500' },
                  { name: 'ABOUT ME', href: '#about', color: 'bg-yellow-500' },
                  { name: 'WORK', href: '#works', color: 'bg-pink-400' },
                  { name: 'CONTACT ME', href: '#contact', color: 'bg-indigo-500' }
                ].map((item, i) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-center w-fit"
                  >
                    <div className={`w-2 h-2 rounded-full mr-6 sm:mr-8 ${item.color} shrink-0`} />
                    <a 
                      href={item.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="group relative block"
                    >
                      <span className="text-4xl sm:text-5xl md:text-6xl font-thin tracking-wide uppercase relative z-10 transition-colors duration-300 group-hover:text-[#f4c453] font-display">
                        {item.name}
                      </span>
                      {/* Underline wrapper to constrain its width exactly to the text width */}
                      <div className="absolute left-0 right-0 -bottom-1 h-0.5" style={{ paddingBottom: '0.1em' }}>
                         <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4c453] transition-all duration-300 group-hover:w-full"></span>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full">
        {/* Header / Nav */}
        <header className="absolute top-0 left-0 right-0 z-40 px-6 lg:px-12 flex items-center justify-between h-24 mix-blend-difference pointer-events-none">
        <a href="#" className="font-semibold text-lg tracking-tight pointer-events-auto">Hyo-jeong</a>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity pointer-events-auto"
        >
          MENU <Menu size={20} strokeWidth={1.5} />
        </button>
      </header>

      {/* Main Content */}
      <main>
        <Hero 
          content={content.hero} 
          updateContent={(updates) => updateContent('hero', updates)} 
          isEditMode={false}
          theme={theme}
        />
        <About 
          content={content.about} 
          updateContent={(updates) => updateContent('about', updates)} 
          isEditMode={false}
          theme={theme}
        />
        <Works 
          content={content.works} 
          updateContent={(updates) => updateContent('works', updates)} 
          isEditMode={false}
          theme={theme}
        />
        <Contact 
          content={content.contact} 
          updateContent={(updates) => updateContent('contact', updates)} 
          isEditMode={false}
          theme={theme}
        />
      </main>
      </div>
    </div>
  );
}
