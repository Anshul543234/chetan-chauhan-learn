
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { storeBookingSelection, validateBookingSelection } from "@/lib/bookingUtils";
import { CalendarIcon, Clock } from "lucide-react";

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const course = searchParams.get("course");
    if (course) {
      setSelectedCourse(course);
    }
    
    // Add a small delay for animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [searchParams]);

  const selectDate = (date: string) => {
    setSelectedDate(date);
  };

  const selectTime = (time: string) => {
    setSelectedTime(time);
  };

  const bookSlot = () => {
    if (!validateBookingSelection(selectedDate, selectedTime)) {
      return;
    }

    // Store the booking selection in session storage
    if (selectedCourse && selectedDate && selectedTime) {
      storeBookingSelection(selectedCourse, selectedDate, selectedTime);
    }

    navigate(`/payment?course=${selectedCourse}&date=${selectedDate}&time=${selectedTime}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container px-4 md:px-6">
          <Card className={`max-w-4xl mx-auto shadow-lg border-blue-100 overflow-hidden ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {selectedCourse}
                  </h2>
                  <p className="text-gray-600 mt-2">Select your preferred date and time slot</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 stagger-animate">
                  <Card 
                    className={`cursor-pointer transition-all duration-300 hover-card border ${
                      selectedDate === "today" ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
                    }`}
                    onClick={() => selectDate("today")}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <CalendarIcon className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Today</h3>
                      </div>
                      <div className="space-y-2">
                        {["08:00 PM", "09:00 PM", "10:00 PM"].map((time) => (
                          <div
                            key={time}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectTime(time);
                            }}
                            className={`p-3 text-center rounded-md cursor-pointer border flex items-center justify-between transition-all duration-200 ${
                              selectedDate === "today" && selectedTime === time
                                ? "bg-blue-100 border-blue-500 text-blue-700"
                                : "hover:bg-gray-100 border-gray-200"
                            }`}
                          >
                            <span>{time}</span>
                            <Clock className="h-4 w-4" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-all duration-300 hover-card border ${
                      selectedDate === "tomorrow" ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
                    }`}
                    onClick={() => selectDate("tomorrow")}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <CalendarIcon className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Tomorrow</h3>
                      </div>
                      <div className="space-y-2">
                        {["08:00 PM", "09:00 PM", "10:00 PM"].map((time) => (
                          <div
                            key={time}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectTime(time);
                            }}
                            className={`p-3 text-center rounded-md cursor-pointer border flex items-center justify-between transition-all duration-200 ${
                              selectedDate === "tomorrow" && selectedTime === time
                                ? "bg-blue-100 border-blue-500 text-blue-700"
                                : "hover:bg-gray-100 border-gray-200"
                            }`}
                          >
                            <span>{time}</span>
                            <Clock className="h-4 w-4" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-all duration-300 hover-card border ${
                      selectedDate === "dayAfter" ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
                    }`}
                    onClick={() => selectDate("dayAfter")}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <CalendarIcon className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Day After Tomorrow</h3>
                      </div>
                      <div className="space-y-2">
                        {["08:00 PM", "09:00 PM", "10:00 PM"].map((time) => (
                          <div
                            key={time}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectTime(time);
                            }}
                            className={`p-3 text-center rounded-md cursor-pointer border flex items-center justify-between transition-all duration-200 ${
                              selectedDate === "dayAfter" && selectedTime === time
                                ? "bg-blue-100 border-blue-500 text-blue-700"
                                : "hover:bg-gray-100 border-gray-200"
                            }`}
                          >
                            <span>{time}</span>
                            <Clock className="h-4 w-4" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    className="px-8 py-6 text-lg font-medium rounded-md animate-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
                    onClick={bookSlot}
                  >
                    Book Your Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
