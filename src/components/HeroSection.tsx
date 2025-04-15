import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Letter animation component
const AnimatedLetter = ({ letter, index }: { letter: string, index: number }) => {
  return (
    <motion.span 
      className="inline-block"
      whileHover={{ 
        y: -10, 
        color: '#64ffda',
        scale: 1.2,
        transition: { type: 'spring', stiffness: 300 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4,
        delay: 0.1 * index,
        ease: "easeOut"
      }}
    >
      {letter}
    </motion.span>
  );
};

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const titles = ["Software Engineer", "DevOps Engineer"];
  const firstName = "KAVINDU";
  const lastName = "LIYANAGE";
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    
    if (aboutSection) {
      const aboutPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: aboutPosition - 20,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-10 px-4">
      <motion.div 
        className="container mx-auto z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent">
          {firstName.split('').map((letter, index) => (
            <AnimatedLetter key={`first-${index}`} letter={letter} index={index} />
          ))}
          {' '}
          {lastName.split('').map((letter, index) => (
            <AnimatedLetter key={`last-${index}`} letter={letter} index={index + firstName.length} />
          ))}
        </h1>
        
        <motion.div
          className="h-8 overflow-hidden relative mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {titles.map((title, index) => (
            <motion.p
              key={index}
              className={`text-lg sm:text-xl md:text-2xl text-[#64ffda] absolute w-full left-0 right-0 transition-all duration-500 ease-in-out ${
                index === currentText ? "opacity-100" : "opacity-0"
              }`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: index === currentText ? 0 : 100, opacity: index === currentText ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.p>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SocialIcons className="space-x-4 sm:space-x-6 mb-10" />
        </motion.div>
        
        <motion.div 
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <motion.button
              onClick={scrollToAbout}
              className="inline-block mb-0.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              aria-label="Scroll to About section"
            >
              <ChevronDown className="text-[#64ffda] h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
            <motion.button
              onClick={scrollToAbout}
              className="inline-block mb-0.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
              aria-label="Scroll to About section"
            >
              <ChevronDown className="text-[#64ffda] h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
            <motion.button
              onClick={scrollToAbout}
              className="inline-block mb-0.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
              aria-label="Scroll to About section"
            >
              <ChevronDown className="text-[#64ffda] h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
            <motion.button
              onClick={scrollToAbout}
              className="inline-block"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
              aria-label="Scroll to About section"
            >
              <ChevronDown className="text-[#64ffda] h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;