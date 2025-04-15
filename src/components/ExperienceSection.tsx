import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experienceItems = [
    {
      title: "Trainee Software Engineer",
      company: "SLT Mobitel",
      details: [
        "Worked on Debt Recovery Systems and QA Task Management System – Developed and maintained systems for debt recovery and quality assurance task management, ensuring efficient tracking and automation of processes.",
        "Role-Based Access Control Implementation Designed and managed access levels based on user roles to enhance security and operational efficiency",
        "Bitbucket Dashboard Development – Created a dashboard to track intern progress (daily, weekly, monthly) and provide insights into project contributions using Bitbucket APIs.",
        "API Endpoint testing (Postman, curl) - tested endpoints configured in Apache httpd server after applying security patches.",
        "CI/CD Pipelines – Assisted in setting up continuous integration and deployment pipelines for project workflows.",
        "Shell scripting - wrote shell scripts to automate tasks (backup creation), read and understand complex shell based framework written for filehousekeeping, log rolling, monitoring, create a Linux tool to compare two directories with file permission, ownership and content comparison.",
        "Working in Agile environment with two week sprint time, daily standups (SDLC).",
        "Experience in Git environments, Linux filesystems/tools, networking concepts/diagrams, network hardening methodologies, OS hardening methodologies."
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 relative bg-[#112240]">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-4xl font-bold mb-16 text-center reveal-element">Experience</h2>
        
        <div className="max-w-4xl mx-auto reveal-element">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl p-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-[#0a192f] rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#64ffda]">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.company}</p>
                
                <ul className="space-y-4 mt-6">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex">
                      <span className="text-[#64ffda] mr-3 mt-1 flex-shrink-0">▹</span>
                      <p className="text-sm md:text-base">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
