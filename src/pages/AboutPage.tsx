
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container py-12 px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to Chetan Chauhan's Online Learning Platform, where personalized education and skill development come first. 
              My goal is to help students master core technical subjects with practical, hands-on guidance.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              Our mission is to provide accessible, affordable, and high-quality online classes tailored to meet each student's needs. 
              I believe that learning should be engaging, efficient, and adaptable to all skill levels.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">About Chetan Chauhan</h2>
            <p className="text-lg mb-6">
              Hello, I'm Chetan Chauhan—a final-year B.Tech student in Information Technology, dedicated to teaching and learning. 
              With achievements like securing high ranks in coding competitions and more, I'm here to support your journey in fields 
              like Database Management, Object-Oriented Programming, Machine Learning, and more.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Classes</h2>
            <p className="text-lg mb-6">
              I offer interactive online classes on a per-hour basis, with nominal fees designed to ensure high-quality instruction 
              without breaking the bank. Each class is structured to provide you with the best tools and techniques to excel in your chosen subject.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Get Started</h2>
            <p className="text-lg mb-6">
              Whether you're beginning a new subject or deepening your knowledge, I'm here to help. 
              Book a session today, and let's take the next step in your learning journey together!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
