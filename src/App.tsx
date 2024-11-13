import React, { useState } from "react";

import Faq from "./Faq";
import FixedButton from "./FixedButton";
import BookingForm from "./BookingForm";
import PopupForm from "./PopupForm";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import IntroductionSection from "./IntroSection";
import HowItWorks from "./HowItWorks";
import TestimonialsSection from "./TestimonialSection";
import TrainerProfile from "./TrainerProfile";

// Define interfaces for props
interface PopupProps {
  openPopup: () => void;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <HeroSection />
      <Featured />
      <HowItWorks />
      <TestimonialsSection />
      <IntroductionSection />
      <TrainerProfile />
      <BookingForm />
      <Faq />
      <FixedButton openPopup={openPopup} />
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default App;
