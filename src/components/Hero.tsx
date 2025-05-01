
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute left-20 bottom-1/3 w-80 h-80 bg-purple-100 rounded-full opacity-60 blur-3xl"></div>
      </div>
      <div className="container relative z-10 px-8 md:px-12 flex flex-col gap-6">
        <h2 className="text-lg md:text-xl font-medium text-blue-600">Hello, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          John Doe
          <br />
          <span className="text-blue-600">Creative Developer</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md">
          I build exceptional digital experiences with modern web technologies.
        </p>
        <div className="flex gap-4 mt-4">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
