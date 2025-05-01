
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with a responsive design, product search, filtering, cart functionality, and secure checkout.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://placehold.co/600x400?text=E-commerce+Project",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for teams to manage tasks, track progress, and collaborate efficiently.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://placehold.co/600x400?text=Task+Management+App",
    },
    {
      id: 3,
      title: "Personal Finance Dashboard",
      description: "An interactive dashboard for tracking expenses, setting budgets, and visualizing spending habits.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://placehold.co/600x400?text=Finance+Dashboard",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" className="flex items-center gap-2" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
