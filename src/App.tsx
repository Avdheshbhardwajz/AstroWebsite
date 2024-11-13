// import React from "react";

// import Hero from "./Hero";
// import WebinarSecrets from "./WebinarSecrets";
// import Testimonial from "./Testimonial";
// import Knowmore from "./Knowmore";
// import Eligibility from "./Eligibilty";
// import { Factory } from "lucide-react";
// import Faq from "./Faq";

// import FixedButton from "./FixedButton";
// import BookingForm from "./BookingForm";

// const App = () => {
//   return (
//     <div>
//       <Hero />
//       <WebinarSecrets />
//       <Testimonial />
//       <Knowmore />
//       <Eligibility />
//       <BookingForm />
//       <Faq />
//       <FixedButton />
//     </div>
//   );
// };

// export default App;
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

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to be passed to child components
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
      <BookingForm openPopup={openPopup} />
      <Faq openPopup={openPopup} />

      <FixedButton openPopup={openPopup} />

      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default App;
