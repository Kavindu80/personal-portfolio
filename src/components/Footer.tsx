import SocialIcons from './SocialIcons';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 md:py-10 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-[#64ffda]/20"
        animate={{ 
          y: [0, 100, 0],
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-10 right-1/3 w-3 h-3 rounded-full bg-[#06b6d4]/20"
        animate={{ 
          y: [0, 80, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-10 left-1/3 w-4 h-4 rounded-full bg-[#0891b2]/20"
        animate={{ 
          y: [0, -60, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Footer content - clean and minimal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SocialIcons className="space-x-4 md:space-x-6 justify-center" iconClassName="text-gray-300 hover:text-[#06b6d4] transition-all duration-300 transform hover:scale-110" />
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="bg-gradient-to-r from-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent text-base md:text-lg font-bold mb-1 md:mb-2">
              Kavindu Liyanage
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">© {currentYear} | All Rights Reserved</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
