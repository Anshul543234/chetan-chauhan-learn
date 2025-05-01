
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                I am a passionate full-stack developer with over 5 years of experience building 
                modern web applications. My journey in software development began when I 
                discovered my passion for creating things that live on the internet.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I focus on building responsive, accessible, and performant web applications
                that provide exceptional user experiences. Whether it's a simple landing page or a 
                complex web application, I approach each project with the same level of dedication.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying outdoor activities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
