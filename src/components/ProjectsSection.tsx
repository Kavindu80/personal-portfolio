import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  tags: string[];
  gitHubLink: string;
  delay: number;
}

const ProjectCard = ({ title, tech, description, tags, gitHubLink, delay }: ProjectCardProps) => {
  return (
    <motion.a
      href={gitHubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl p-1 h-full">
        <div className="bg-[#0a192f] rounded-2xl p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-[#64ffda]">{title}</h3>
          <div className="text-sm text-gray-400 mb-4">{tech}</div>
          <p className="mb-4 flex-grow">{description}</p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="text-xs bg-[#64ffda]/20 text-[#64ffda] px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <ExternalLink className="h-5 w-5 text-[#64ffda]" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const GitHubMoreCard = ({ delay }: { delay: number }) => {
  return (
    <motion.a
      href="https://github.com/Kavindu80"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl p-1 h-full">
        <div className="bg-[#0a192f] rounded-2xl p-6 h-full flex flex-col justify-center items-center">
          <Github className="h-14 w-14 mb-4 text-[#64ffda]" />
          <h3 className="text-xl font-bold mb-3 text-center text-[#64ffda]">For More Projects</h3>
          <p className="text-center mb-4">Check out my GitHub profile for more projects and contributions</p>
          <span className="text-sm bg-[#64ffda]/20 text-[#64ffda] px-3 py-1 rounded-full">GitHub Profile</span>
        </div>
      </div>
    </motion.a>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Job Portal with Automation (Team Project)",
      tech: "MongoDB, Express.js, React.js, Node.js (MERN)",
      description: "Developed a full-stack job portal with automated job postings, application tracking, and resume filtering using smart algorithms. Integrated email notifications and job-matching automation.",
      tags: ["MERN", "MongoDB", "React.js"],
      gitHubLink: "https://github.com/Kavindu80/Job_Portal_With_Automation-1.0"
    },
    {
      title: "Portfolio Website (Solo Project)",
      tech: "React JS, JavaScript, HTML, CSS",
      description: "A responsive personal portfolio website built with React and modern web technologies.",
      tags: ["React", "JavaScript"],
      gitHubLink: "https://github.com/Kavindu80/react-portfolio-kavindu"
    },
    {
      title: "Currencies exchanger web app (Duo Project)",
      tech: "React JS, Node Js, CSS, Express.js",
      description: "Allows users to convert currencies based on real-time exchange rates.",
      tags: ["React", "Node.js", "Express"],
      gitHubLink: "https://github.com/Kavindu80/currencies-exchanger"
    },
    {
      title: "Healthcare app Backend (Solo Project)",
      tech: "Java",
      description: "Java-based project designed to implement core Object-Oriented Programming (OOP) principles for patient management.",
      tags: ["Java", "OOP"],
      gitHubLink: "https://github.com/Kavindu80/healthcare-app-Backend-Java"
    },
    {
      title: "Bitbucket-dashboard (Team Project)",
      tech: "MERN Stack",
      description: "Led team collaboration through effective utilization of Bitbucket dashboard, monitoring real-time development activities, managing code commits, and streamlining workflow prioritization across multiple repositories.",
      tags: ["MERN", "MongoDB", "React"],
      gitHubLink: "https://bitbucket.org/kavindu_1/workspace/projects/RES"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-[#112240] mountain-bg">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-4xl font-bold mb-16 text-center reveal-element">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-element">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tech={project.tech}
              description={project.description}
              tags={project.tags}
              gitHubLink={project.gitHubLink}
              delay={index}
            />
          ))}
          
          <GitHubMoreCard delay={projects.length} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
