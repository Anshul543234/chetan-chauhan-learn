
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Calendar } from "lucide-react";
import { clearBookingSelection } from "@/lib/bookingUtils";
import { motion } from "framer-motion";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  // Clear booking data from session storage when confirmation page is loaded
  useEffect(() => {
    clearBookingSelection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={64} className="text-green-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600">
            Booking Confirmed!
          </h1>
          
          <div className="bg-green-50 p-4 rounded-md border border-green-100 mb-6">
            <p className="text-gray-700">
              Thank you for your booking. We've sent all the details to your email.
              You'll receive a link to join the session before your scheduled time.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              onClick={() => navigate("/")}
              className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all animate-button flex items-center justify-center gap-2"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
            
            <Button 
              onClick={() => navigate("/booking")}
              variant="outline" 
              className="w-full py-6 transition-all border-blue-200 hover:border-blue-400 flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book Another Session
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
