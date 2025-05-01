
import { toast } from "sonner";

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined";

// Store selected booking in session storage
export const storeBookingSelection = (course: string, date: string, time: string) => {
  if (isBrowser) {
    sessionStorage.setItem("selectedCourse", course);
    sessionStorage.setItem("selectedDate", date);
    sessionStorage.setItem("selectedTime", time);
  }
};

// Get stored booking selection
export const getStoredBookingSelection = () => {
  if (!isBrowser) return { course: null, date: null, time: null };
  
  return {
    course: sessionStorage.getItem("selectedCourse"),
    date: sessionStorage.getItem("selectedDate"),
    time: sessionStorage.getItem("selectedTime")
  };
};

// Clear stored booking selection
export const clearBookingSelection = () => {
  if (isBrowser) {
    sessionStorage.removeItem("selectedCourse");
    sessionStorage.removeItem("selectedDate");
    sessionStorage.removeItem("selectedTime");
  }
};

// Validate booking selection
export const validateBookingSelection = (date: string | null, time: string | null) => {
  if (!date || !time) {
    toast.error("Please select both date and time slot");
    return false;
  }
  return true;
};
