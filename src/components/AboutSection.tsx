import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import geometricBg from '@/assets/geometric-bg.svg';
import profileImage from '@/assets/profileImage.jpg'; // Replace with the correct path to your image

const AboutSection = () => {
  return (
    <section id="about" className="py-10 relative bg-[#0a192f] overflow-hidden min-h-screen flex items-center">
      {/* Geometric Background at the bottom only - not overlapping with next section */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src={geometricBg} alt="Geometric background" className="w-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Profile Image First with circular glow effect */}
          <motion.div 
            className="relative reveal-element mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-6 rounded-full bg-[#64ffda]/20 blur-md"></div>

            {/* Outer neon circle */}
            <motion.div 
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#64ffda] p-[2px] shadow-[0_0_15px_rgba(100,255,218,0.5)]"
              animate={{ boxShadow: ['0 0 15px rgba(100,255,218,0.3)', '0 0 20px rgba(100,255,218,0.6)', '0 0 15px rgba(100,255,218,0.3)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Profile image */}
            <div className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden border-4 border-[#0a192f] relative z-20">
              <img 
                src={profileImage}
                alt="Kavindu Liyanage" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Title - "Aboutme" */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white reveal-element"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Aboutme
          </motion.h2>

          {/* About Text Centered - No background box */}
          <motion.div 
            className="w-full max-w-2xl text-center mb-10 reveal-element px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
              Dedicated and hardworking engineering undergraduate with a strong foundation in IT and a passion for continuous growth. A self-motivated and fast learner with proven ability to adapt quickly and excel in new challenges. Actively seeking opportunities to apply my skills, expand my knowledge, and gain practical experience in a dynamic and challenging environment.
            </p>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://drive.google.com/file/d/1CAsYNBmxjWr-tnXbtiLem2gZVPaeaqLY/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-white text-[#0a192f] hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
