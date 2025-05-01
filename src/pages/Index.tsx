
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  
  const showBooking = (course: string) => {
    navigate(`/booking?course=${course}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-12 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            What do you want to <span className="text-blue-600">Learn</span> today?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => showBooking('DBMS')}
            >
              <div className="aspect-video relative">
                <img 
                  src="https://c8.alamy.com/comp/2B9TJPC/vector-black-line-concept-of-internet-technology-dbms-2B9TJPC.jpg" 
                  alt="DBMS"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-center">DBMS</h2>
              </CardContent>
            </Card>

            <Card 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => showBooking('OOPS')}
            >
              <div className="aspect-video relative">
                <img 
                  src="https://media.istockphoto.com/id/147480805/photo/oop-object-oriented-programming.jpg?s=612x612&w=0&k=20&c=r47EPdaimqTUmRu4Pne6jJyi95NPWDJU3IsPW1sAPec=" 
                  alt="OOPS"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-center">OOPS</h2>
              </CardContent>
            </Card>

            <Card 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => showBooking('ML')}
            >
              <div className="aspect-video relative">
                <img 
                  src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg" 
                  alt="ML"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-center">ML</h2>
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
