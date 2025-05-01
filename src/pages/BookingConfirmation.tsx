
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { clearBookingSelection } from "@/lib/bookingUtils";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  // Clear booking data from session storage when confirmation page is loaded
  useEffect(() => {
    clearBookingSelection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="mb-6 text-green-500 flex justify-center">
            <CheckCircle size={64} />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for your booking. We've sent all the details to your email.
            You'll receive a link to join the session.
          </p>
          
          <Button 
            onClick={() => navigate("/")}
            className="w-full"
          >
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
