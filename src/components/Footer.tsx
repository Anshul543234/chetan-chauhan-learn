
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container text-center">
        <p>© {currentYear} All rights reserved © Chetan Chauhan</p>
      </div>
    </footer>
  );
};

export default Footer;
