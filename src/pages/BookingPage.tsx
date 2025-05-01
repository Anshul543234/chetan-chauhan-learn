
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    const course = searchParams.get("course");
    if (course) {
      setSelectedCourse(course);
    }
  }, [searchParams]);

  const selectDate = (date: string) => {
    setSelectedDate(date);
  };

  const selectTime = (time: string) => {
    setSelectedTime(time);
  };

  const bookSlot = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time slot");
      return;
    }

    navigate(`/payment?course=${selectedCourse}&date=${selectedDate}&time=${selectedTime}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-12 px-4 md:px-6">
          <Card className="max-w-4xl mx-auto shadow-lg border-blue-100">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{selectedCourse}</h2>
                  <p className="text-gray-600 mt-2">Select your preferred date and time slot</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card 
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedDate === "today" ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => selectDate("today")}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center mb-3">Today</h3>
                      <div className="space-y-2">
                        {["08:00 PM", "09:00 PM", "10:00 PM"].map((time) => (
                          <div
                            key={time}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectTime(time);
                            }}
                            className={`p-2 text-center rounded-md cursor-pointer border ${
                              selectedDate === "today" && selectedTime === time
                                ? "bg-blue-100 border-blue-500"
                                : "hover:bg-gray-100 border-gray-200"
                            }`}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedDate === "tomorrow" ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => selectDate("tomorrow")}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center mb-3">Tomorrow</h3>
                      <div className="space-y-2">
                        {["08:00 PM", "09:00 PM", "10:00 PM"].map((time) => (
                          <div
                            key={time}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectTime(time);
                            }}
                            className={`p-2 text-center rounded-md cursor-pointer border ${
                              selectedDate === "tomorrow" && selectedTime === time
                                ? "bg-blue-100 border-blue-500"
                                : "hover:bg-gray-100 border-gray-200"
                            }`}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedDate === "dayAfter" ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => selectDate("dayAfter")}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center mb-3">Day After Tomorrow</h3>
                      <div className="space-y-2">
                        {["08:00 PM", "09:00 PM", "10:00 PM"].map((time) => (
                          <div
                            key={time}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectTime(time);
                            }}
                            className={`p-2 text-center rounded-md cursor-pointer border ${
                              selectedDate === "dayAfter" && selectedTime === time
                                ? "bg-blue-100 border-blue-500"
                                : "hover:bg-gray-100 border-gray-200"
                            }`}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 text-center">
                  <Button
                    className="px-6 py-2 rounded-md transition-all hover:scale-105"
                    onClick={bookSlot}
                  >
                    Book Session
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
