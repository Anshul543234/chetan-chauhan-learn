
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { getStoredBookingSelection } from "@/lib/bookingUtils";
import { Calendar, Mail, User, CreditCard } from "lucide-react";

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Get course, date, and time from URL parameters or session storage
  const courseParam = searchParams.get("course");
  const dateParam = searchParams.get("date");
  const timeParam = searchParams.get("time");
  
  // First try from URL, then from session storage
  const storedBooking = getStoredBookingSelection();
  const course = courseParam || storedBooking.course || "Default Course";
  const date = dateParam || storedBooking.date || "Default Date";
  const time = timeParam || storedBooking.time || "Default Time";

  useEffect(() => {
    // Add a small delay for animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const completePayment = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate email sending (in a real app, you would use EmailJS or a similar service)
    setTimeout(() => {
      toast.success("Payment confirmation email has been sent!");
      setIsSubmitting(false);
      navigate("/booking-confirmation");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 py-16">
        <div className={`w-full max-w-md p-8 bg-white rounded-lg shadow-xl border border-blue-200 relative overflow-hidden ${isLoaded ? 'slide-up' : 'opacity-0'}`}>
          <div className="h-1.5 absolute top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
          
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Unlock expert insights for just ₹50!
            </h1>
            <p className="text-gray-600 mt-1">Confirm your booking details and complete payment</p>
          </div>

          {/* Booking Info */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
            <div className="flex items-start gap-3 mb-2">
              <Calendar className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium">Course:</p>
                <p className="text-gray-700">{course}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-600" />
              <p className="text-gray-700">{date} at {time}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Enter your name:
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="border-blue-200 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Enter your email for session link:
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="border-blue-200 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <Button
              className="w-full py-6 mt-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all hover:scale-[1.02] animate-button flex items-center justify-center gap-2"
              onClick={completePayment}
              disabled={isSubmitting}
            >
              <CreditCard className="h-5 w-5" />
              {isSubmitting ? "Processing Payment..." : "Pay ₹50 Now"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
