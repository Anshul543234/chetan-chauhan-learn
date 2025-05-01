
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Award, School, Calendar } from "lucide-react";

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container py-12 px-4 md:px-6 max-w-4xl mx-auto">
          <div className={`space-y-8 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Us</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  Welcome to Chetan Chauhan's Online Learning Platform, where personalized education and skill development come first. 
                  My goal is to help students master core technical subjects with practical, hands-on guidance.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animate">
              <Card className="border-none shadow-md hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mt-0 mb-4">Our Mission</h2>
                      <p className="text-gray-700">
                        Our mission is to provide accessible, affordable, and high-quality online classes tailored to meet each student's needs. 
                        I believe that learning should be engaging, efficient, and adaptable to all skill levels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mt-0 mb-4">About Chetan Chauhan</h2>
                      <p className="text-gray-700">
                        Hello, I'm Chetan Chauhan—a final-year B.Tech student in Information Technology, dedicated to teaching and learning. 
                        With achievements like securing high ranks in coding competitions and more, I'm here to support your journey in fields 
                        like Database Management, Object-Oriented Programming, Machine Learning, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Book className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mt-0 mb-4">Our Classes</h2>
                      <p className="text-gray-700">
                        I offer interactive online classes on a per-hour basis, with nominal fees designed to ensure high-quality instruction 
                        without breaking the bank. Each class is structured to provide you with the best tools and techniques to excel in your chosen subject.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mt-0 mb-4">Get Started</h2>
                      <p className="text-gray-700">
                        Whether you're beginning a new subject or deepening your knowledge, I'm here to help. 
                        Book a session today, and let's take the next step in your learning journey together!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
