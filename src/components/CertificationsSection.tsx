import { motion } from 'framer-motion';

interface CertificationCardProps {
  title: string;
  provider: string;
  logo: string;
  delay: number;
}

const CertificationCard = ({ title, provider, logo, delay }: CertificationCardProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl p-1 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="bg-[#0a192f] rounded-2xl p-6 h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[#64ffda] pr-2">{title}</h3>
          <div className="w-10 h-10 flex-shrink-0 overflow-hidden">
            {logo === 'aws' && (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M7.186 10.2C7.186 10.7 7.286 11.1 7.486 11.3C7.686 11.5 7.886 11.7 8.086 11.8C8.186 11.9 8.186 11.9 8.186 12C8.186 12.1 8.186 12.1 8.086 12.2C7.786 12.4 7.186 12.9 7.186 13.8C7.186 14.4 7.486 15 7.886 15.3C8.286 15.6 8.886 15.8 9.386 15.8H9.486C10.086 15.8 10.786 15.6 11.086 15.3V13.8H9.986V15C9.786 15.1 9.586 15.1 9.386 15.1C9.086 15.1 8.786 15 8.586 14.8C8.386 14.6 8.286 14.3 8.286 13.9C8.286 13.5 8.386 13.2 8.586 13C8.786 12.8 8.986 12.6 9.186 12.5C9.286 12.4 9.286 12.4 9.286 12.3C9.286 12.2 9.286 12.2 9.186 12.1C8.986 12 8.586 11.6 8.586 10.9C8.586 10.4 8.786 10 9.086 9.7C9.386 9.5 9.786 9.3 10.186 9.3H10.286C10.686 9.3 11.186 9.4 11.486 9.7V11.1H10.586V10C10.486 9.9 10.286 9.9 10.186 9.9C9.986 9.9 9.786 10 9.586 10.2C9.386 10.3 9.386 10.5 9.386 10.7C9.386 11.1 9.586 11.3 9.786 11.5C9.986 11.7 10.186 11.8 10.386 11.9C10.486 12 10.486 12 10.486 12.1C10.486 12.2 10.486 12.2 10.386 12.3C10.186 12.4 9.886 12.9 9.886 13.7V13.9H11.086V13.8C11.086 13.3 11.386 13 11.686 12.7C11.786 12.6 11.786 12.6 11.786 12.5C11.786 12.4 11.786 12.4 11.686 12.3C11.486 12.2 11.386 12.1 11.186 12C11.086 11.9 11.086 11.9 11.086 11.8C11.086 11.7 11.086 11.7 11.186 11.6C11.386 11.4 11.486 11.1 11.486 10.6C11.486 10.1 11.286 9.7 10.986 9.5C10.686 9.3 10.286 9.1 9.886 9.1H9.786C9.186 9.1 8.686 9.3 8.286 9.7L7.186 10.2Z" fill="currentColor"/>
                <path d="M13.486 15.7L13.586 15.5L15.286 9.3H16.486L18.186 15.5L18.286 15.7H17.186L17.086 15.4L16.886 14.7H14.886L14.686 15.4L14.586 15.7H13.486ZM15.086 13.9H16.686L16.086 11.7C16.086 11.6 15.986 11.3 15.986 11.1C15.986 11.3 15.886 11.6 15.886 11.7L15.086 13.9Z" fill="currentColor"/>
                <path d="M19.086 15.7V9.3H20.186V15H22.186V15.7H19.086Z" fill="currentColor"/>
                <path d="M6.686 17.8C5.086 18.9 2.686 19.6 0.686 19.6C-2.414 19.6 -5.114 18.3 -7.014 16.1C -7.214 15.9 -7.014 15.6 -6.814 15.7C -4.714 17 -2.114 17.8 0.586 17.8C2.386 17.8 4.386 17.3 6.186 16.4C6.586 16.2 6.886 16.7 6.686 17.8Z" fill="currentColor"/>
                <path d="M7.586 16.7C7.386 16.4 6.386 16.5 5.886 16.6C5.686 16.6 5.686 16.4 5.786 16.3C6.686 15.7 8.086 15.8 8.286 16.1C8.486 16.4 8.186 18 7.386 18.7C7.186 18.9 7.086 18.8 7.186 18.6C7.386 18.1 7.786 17 7.586 16.7Z" fill="currentColor"/>
              </svg>
            )}
            {logo === 'coursera' && (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M11.695 5.037C8.032 5.037 5.05 8.019 5.05 11.682C5.05 15.345 8.032 18.327 11.695 18.327C13.382 18.327 14.9 17.708 16.055 16.674C16.277 16.481 16.488 16.271 16.681 16.048C16.889 15.811 16.889 15.467 16.674 15.237C16.444 14.992 16.063 14.977 15.825 15.214C15.668 15.372 15.5 15.516 15.325 15.65C14.407 16.364 13.254 16.799 12 16.799C9.184 16.799 6.901 14.516 6.901 11.7C6.901 8.884 9.184 6.601 12 6.601C14.816 6.601 17.099 8.884 17.099 11.7V12.401C17.099 12.962 16.684 13.424 16.103 13.424C15.522 13.424 15.038 12.962 15.038 12.401V11.7C15.038 10.021 13.679 8.662 12 8.662C10.321 8.662 8.962 10.021 8.962 11.7C8.962 13.379 10.321 14.738 12 14.738C12.839 14.738 13.632 14.392 14.175 13.82C14.646 14.366 15.359 14.701 16.103 14.701C17.358 14.701 18.385 13.655 18.385 12.401V11.7C18.385 11.693 18.385 11.686 18.385 11.679C18.38 8.015 15.359 5.037 11.695 5.037ZM12 13.46C11.027 13.46 10.24 12.673 10.24 11.7C10.24 10.727 11.027 9.94 12 9.94C12.973 9.94 13.76 10.727 13.76 11.7C13.76 12.673 12.973 13.46 12 13.46Z" fill="currentColor"/>
              </svg>
            )}
            {logo === 'great-learning' && (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z" fill="currentColor"/>
                <path d="M15.1 7.9L10.9 12.1L8.9 10.1L7.5 11.5L10.9 14.9L16.5 9.3L15.1 7.9Z" fill="currentColor"/>
              </svg>
            )}
          </div>
        </div>
        <p className="text-gray-400">{provider}</p>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Academy Cloud Foundations",
      provider: "Amazon Web Services (AWS)",
      logo: "aws"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      provider: "Coursera",
      logo: "coursera"
    },
    {
      title: "Web Development with HTML, CSS, JavaScript Essentials",
      provider: "Coursera",
      logo: "coursera"
    },
    {
      title: "Web Design for Beginners",
      provider: "University of Moratuwa",
      logo: "great-learning"
    },
    {
      title: "Python for Beginners",
      provider: "University of Moratuwa",
      logo: "great-learning"
    },
    {
      title: "Data Structures and Algorithms in Java for Intermediate Level",
      provider: "Great Learning",
      logo: "great-learning"
    },
    {
      title: "Developing Front-End Apps with React",
      provider: "Coursera",
      logo: "coursera"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center reveal-element">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-element">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              provider={cert.provider}
              logo={cert.logo}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
