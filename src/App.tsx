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

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <HeroSection openPopup={openPopup} />
      <Featured />
      <HowItWorks />
      <TestimonialsSection />
      <IntroductionSection />
      <TrainerProfile />
      {/* <BookingForm /> */}
      <Faq />
      <FixedButton openPopup={openPopup} />
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default App;
