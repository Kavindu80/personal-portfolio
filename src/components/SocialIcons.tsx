import { 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram, 
  Mail
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons = ({ className = "", iconClassName = "text-white hover:text-[#64ffda]" }: SocialIconsProps) => {
  const socialLinks = [
    { 
      icon: <Linkedin className="h-6 w-6" />, 
      href: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: <Github className="h-6 w-6" />, 
      href: "https://github.com", 
      label: "GitHub" 
    },
    { 
      icon: <Facebook className="h-6 w-6" />, 
      href: "https://facebook.com", 
      label: "Facebook" 
    },
    { 
      icon: <Instagram className="h-6 w-6" />, 
      href: "https://instagram.com", 
      label: "Instagram" 
    },
    { 
      icon: <Mail className="h-6 w-6" />, 
      href: "mailto:kavinduraing@gmail.com", 
      label: "Email" 
    },
    { 
      icon: <FaWhatsapp size={24} />, 
      href: "https://wa.me/+94757149138", 
      label: "WhatsApp" 
    }
  ];
  
  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`social-icon transition-all duration-300 hover:scale-110 ${iconClassName}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
