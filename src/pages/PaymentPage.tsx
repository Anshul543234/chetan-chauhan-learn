
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { getStoredBookingSelection } from "@/lib/bookingUtils";

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get course, date, and time from URL parameters or session storage
  const courseParam = searchParams.get("course");
  const dateParam = searchParams.get("date");
  const timeParam = searchParams.get("time");
  
  // First try from URL, then from session storage
  const storedBooking = getStoredBookingSelection();
  const course = courseParam || storedBooking.course || "Default Course";
  const date = dateParam || storedBooking.date || "Default Date";
  const time = timeParam || storedBooking.time || "Default Time";

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border border-blue-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 animate-gradient"></div>
          
          <h1 className="text-2xl font-bold text-center mb-2">Unlock expert insights for just ₹50!</h1>
          <p className="text-gray-600 text-center mb-6">Confirm your booking now.</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Enter your name:</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Enter your email correctly, as you will receive the link there:
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <Button
              className="w-full bg-green-600 hover:bg-green-700 transition-all hover:scale-[1.02]"
              onClick={completePayment}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Pay ₹50 Now"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
