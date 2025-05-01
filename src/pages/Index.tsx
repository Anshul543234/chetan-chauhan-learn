
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const showBooking = (course: string) => {
    navigate(`/booking?course=${course}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-16 px-4 md:px-6">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 ${isLoaded ? 'slide-up' : 'opacity-0'}`}>
            What do you want to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Learn</span> today?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
            <Card 
              className="overflow-hidden transition-all duration-300 hover-card border-none shadow-md"
              onClick={() => showBooking('DBMS')}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://c8.alamy.com/comp/2B9TJPC/vector-black-line-concept-of-internet-technology-dbms-2B9TJPC.jpg" 
                  alt="DBMS"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Database Management Systems</h2>
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
                <p className="mt-2 text-gray-600">Learn the fundamentals of database design and SQL</p>
              </CardContent>
            </Card>

            <Card 
              className="overflow-hidden transition-all duration-300 hover-card border-none shadow-md"
              onClick={() => showBooking('OOPS')}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://media.istockphoto.com/id/147480805/photo/oop-object-oriented-programming.jpg?s=612x612&w=0&k=20&c=r47EPdaimqTUmRu4Pne6jJyi95NPWDJU3IsPW1sAPec=" 
                  alt="OOPS"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Object-Oriented Programming</h2>
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
                <p className="mt-2 text-gray-600">Master OOP concepts and design patterns</p>
              </CardContent>
            </Card>

            <Card 
              className="overflow-hidden transition-all duration-300 hover-card border-none shadow-md"
              onClick={() => showBooking('ML')}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg" 
                  alt="ML"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Machine Learning</h2>
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
                <p className="mt-2 text-gray-600">Explore AI algorithms and data science</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
