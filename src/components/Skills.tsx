
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const frontendSkills = [
    "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", 
    "Redux", "Next.js", "Responsive Design"
  ];
  
  const backendSkills = [
    "Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs", 
    "GraphQL", "AWS", "Firebase"
  ];
  
  const otherSkills = [
    "Git", "CI/CD", "Jest", "Agile/Scrum", "UI/UX Design", 
    "Performance Optimization", "Accessibility"
  ];

  return (
    <section id="skills" className="py-24 bg-blue-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills & Expertise</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 text-center">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 text-center">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 text-center">Tools & Methods</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
