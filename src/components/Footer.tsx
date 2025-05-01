
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base">© {currentYear} All rights reserved © Chetan Chauhan</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
