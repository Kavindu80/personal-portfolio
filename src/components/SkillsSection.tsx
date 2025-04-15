import { motion } from 'framer-motion';
import { Code, Cloud, Database, Workflow, Network, Pencil, Layout, Server } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillCard = ({ title, skills, icon, delay }: SkillCardProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl p-1 h-full card-transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="bg-[#0a192f] rounded-2xl p-6 h-full">
        <div className="flex items-center mb-4">
          <span className="text-[#64ffda] mr-2">{icon}</span>
          <h3 className="text-xl font-bold text-[#64ffda]">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-[#64ffda]">•</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "JavaScript", "Java"]
    },
    {
      title: "Cloud/DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        "Docker, Kubernetes, Ansible, OpenShift, CI",
        "CD, AWS,Azure,GitHub Actions",
        "Prometheus, Alert Manager, Grafana"
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Software Engineering",
      icon: <Workflow className="h-5 w-5" />,
      skills: [
        "Agile, OOP(Object Oriented Programming)",
        "Shell Script, Scripting, Scrum, Git, Unix",
        "Data Structures and Algorithms"
      ]
    },
    {
      title: "Networking",
      icon: <Network className="h-5 w-5" />,
      skills: ["Networking Fundamentals", "Network Security"]
    },
    {
      title: "Web Development - Front End",
      icon: <Layout className="h-5 w-5" />,
      skills: ["HTML, CSS, JS, React.js, Node.js"]
    },
    {
      title: "Web Development - Back End",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js, Express"]
    },
    {
      title: "Graphic Design",
      icon: <Pencil className="h-5 w-5" />,
      skills: [
        "Adobe Photoshop, Adobe Illustrator",
        "Adobe Premiere Pro"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center reveal-element">Skillset</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-element">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
