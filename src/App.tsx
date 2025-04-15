import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Set theme colors
    document.documentElement.style.setProperty('--background', '222.2 47.4% 11.2%');
    document.documentElement.style.setProperty('--foreground', '210 40% 98%');
    
    // Add scroll reveal event listener
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-element');
      
      const revealPoint = 150;
      const windowHeight = window.innerHeight;
      
      reveals.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Home />
      <Toaster />
    </>
  );
}

export default App;