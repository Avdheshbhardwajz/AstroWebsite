// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";

// import Faq from "./Faq";
// import FixedButton from "./FixedButton";
// import PopupForm from "./PopupForm";
// import HeroSection from "./HeroSection";
// import Featured from "./Featured";
// import IntroductionSection from "./IntroSection";
// import HowItWorks from "./HowItWorks";
// import TestimonialsSection from "./TestimonialSection";
// import TrainerProfile from "./TrainerProfile";
// import PrivacyPolicy from "./PrivacyPolicy";
// import Navbar from "./Navbar";
// import Admin from "./Admin";
// import {
//   Sections,
//   HeroSectionData,
//   FeaturedSectionData,
//   HowItWorksSectionData,
//   TestimonialsSectionData,
//   IntroSectionData,
//   TrainerProfileSectionData,
//   FaqSectionData,
// } from "./types";

// interface BaseSectionData {
//   _id: string;
//   sectionName: keyof Sections;
// }

// interface HeroSectionDataWrapper extends BaseSectionData {
//   sectionName: "heroSection";
//   data: HeroSectionData;
// }

// interface FeaturedSectionDataWrapper extends BaseSectionData {
//   sectionName: "featured";
//   data: FeaturedSectionData;
// }

// interface HowItWorksSectionDataWrapper extends BaseSectionData {
//   sectionName: "howItWorks";
//   data: HowItWorksSectionData;
// }

// interface TestimonialsSectionDataWrapper extends BaseSectionData {
//   sectionName: "testimonials";
//   data: TestimonialsSectionData;
// }

// interface IntroSectionDataWrapper extends BaseSectionData {
//   sectionName: "introSection";
//   data: IntroSectionData;
// }

// interface TrainerProfileSectionDataWrapper extends BaseSectionData {
//   sectionName: "trainerProfile";
//   data: TrainerProfileSectionData;
// }

// interface FaqSectionDataWrapper extends BaseSectionData {
//   sectionName: "faq";
//   data: FaqSectionData;
// }

// type SectionData =
//   | HeroSectionDataWrapper
//   | FeaturedSectionDataWrapper
//   | HowItWorksSectionDataWrapper
//   | TestimonialsSectionDataWrapper
//   | IntroSectionDataWrapper
//   | TrainerProfileSectionDataWrapper
//   | FaqSectionDataWrapper;

// interface ApiResponse {
//   success: boolean;
//   data: SectionData[];
// }

// const App: React.FC = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [sections, setSections] = useState<Partial<Sections>>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const openPopup = () => setIsPopupOpen(true);
//   const closePopup = () => setIsPopupOpen(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<ApiResponse>(
//           `${import.meta.env.VITE_API_URL}/fetch-data`
//         );

//         if (response.data.success) {
//           // const sectionsData = response.data.data.reduce((acc, section) => {
//           //   acc[section.sectionName] = section.data;
//           //   return acc;
//           // }, {} as Partial<Sections>);
//           const sectionsData = response.data.data.reduce((acc, section) => {
//             switch (section.sectionName) {
//               case "heroSection":
//                 acc.heroSection = section.data as HeroSectionData;
//                 break;
//               case "featured":
//                 acc.featured = section.data as FeaturedSectionData;
//                 break;
//               case "howItWorks":
//                 acc.howItWorks = section.data as HowItWorksSectionData;
//                 break;
//               case "testimonials":
//                 acc.testimonials = section.data as TestimonialsSectionData;
//                 break;
//               case "introSection":
//                 acc.introSection = section.data as IntroSectionData;
//                 break;
//               case "trainerProfile":
//                 acc.trainerProfile = section.data as TrainerProfileSectionData;
//                 break;
//               case "faq":
//                 acc.faq = section.data as FaqSectionData;
//                 break;
//             }
//             return acc;
//           }, {} as Partial<Sections>);

//           setSections(sectionsData);
//         } else {
//           setError("Failed to fetch data");
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen font-poppins text-3xl bg-[#FF6B2C] text-white font-bold">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <Navbar openPopup={openPopup} />
//               {sections.heroSection && (
//                 <HeroSection
//                   openPopup={openPopup}
//                   data={sections.heroSection}
//                 />
//               )}
//               {sections.featured && (
//                 <Featured openPopup={openPopup} data={sections.featured} />
//               )}
//               {sections.howItWorks && (
//                 <HowItWorks openPopup={openPopup} data={sections.howItWorks} />
//               )}
//               {sections.testimonials && (
//                 <TestimonialsSection
//                   openPopup={openPopup}
//                   data={sections.testimonials}
//                 />
//               )}
//               {sections.introSection && (
//                 <IntroductionSection
//                   openPopup={openPopup}
//                   data={sections.introSection}
//                 />
//               )}
//               {sections.trainerProfile && (
//                 <TrainerProfile data={sections.trainerProfile} />
//               )}
//               {sections.faq && <Faq data={sections.faq} />}
//               <FixedButton openPopup={openPopup} />
//               <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
//               <PrivacyPolicy />
//             </div>
//           }
//         />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Import components
import Faq from "./Faq";
import FixedButton from "./FixedButton";
import PopupForm from "./PopupForm";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import IntroductionSection from "./IntroSection";
import HowItWorks from "./HowItWorks";
import TestimonialsSection from "./TestimonialSection";
import TrainerProfile from "./TrainerProfile";
import PrivacyPolicy from "./PrivacyPolicy";
import Navbar from "./Navbar";
import Admin from "./Admin";
import SkeletonLoader from "./components/SkeletonLoader";

// Import types
import {
  Sections,
  HeroSectionData,
  FeaturedSectionData,
  HowItWorksSectionData,
  TestimonialsSectionData,
  IntroSectionData,
  TrainerProfileSectionData,
  FaqSectionData,
} from "./types";

// Caching Utility Constants
const CACHE_KEY = "site-sections-cache";
const CACHE_EXPIRY = 1000 * 60 * 60; // 1 hour

// Caching Functions
const getCachedData = (): Partial<Sections> | null => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (cachedData) {
    const { timestamp, data } = JSON.parse(cachedData);
    if (Date.now() - timestamp < CACHE_EXPIRY) {
      return data;
    }
  }
  return null;
};

const setCachedData = (data: Partial<Sections>) => {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      timestamp: Date.now(),
      data,
    })
  );
};

// API Response Interfaces
interface BaseSectionData {
  _id: string;
  sectionName: keyof Sections;
}

interface HeroSectionDataWrapper extends BaseSectionData {
  sectionName: "heroSection";
  data: HeroSectionData;
}

interface FeaturedSectionDataWrapper extends BaseSectionData {
  sectionName: "featured";
  data: FeaturedSectionData;
}

interface HowItWorksSectionDataWrapper extends BaseSectionData {
  sectionName: "howItWorks";
  data: HowItWorksSectionData;
}

interface TestimonialsSectionDataWrapper extends BaseSectionData {
  sectionName: "testimonials";
  data: TestimonialsSectionData;
}

interface IntroSectionDataWrapper extends BaseSectionData {
  sectionName: "introSection";
  data: IntroSectionData;
}

interface TrainerProfileSectionDataWrapper extends BaseSectionData {
  sectionName: "trainerProfile";
  data: TrainerProfileSectionData;
}

interface FaqSectionDataWrapper extends BaseSectionData {
  sectionName: "faq";
  data: FaqSectionData;
}

type SectionData =
  | HeroSectionDataWrapper
  | FeaturedSectionDataWrapper
  | HowItWorksSectionDataWrapper
  | TestimonialsSectionDataWrapper
  | IntroSectionDataWrapper
  | TrainerProfileSectionDataWrapper
  | FaqSectionDataWrapper;

interface ApiResponse {
  success: boolean;
  data: SectionData[];
}

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sections, setSections] = useState<Partial<Sections>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First, check for cached data
        const cachedSections = getCachedData();
        if (cachedSections) {
          setSections(cachedSections);
          setLoading(false);
          return;
        }

        // Add a minimum loading time to prevent content flash
        const minLoadingTime = new Promise((resolve) =>
          setTimeout(resolve, 500)
        );

        // Fetch data with minimum loading time
        const [response] = await Promise.all([
          axios.get<ApiResponse>(`${import.meta.env.VITE_API_URL}/fetch-data`),
          minLoadingTime,
        ]);

        if (response.data.success) {
          // Process fetched data
          const sectionsData = response.data.data.reduce((acc, section) => {
            switch (section.sectionName) {
              case "heroSection":
                acc.heroSection = section.data as HeroSectionData;
                break;
              case "featured":
                acc.featured = section.data as FeaturedSectionData;
                break;
              case "howItWorks":
                acc.howItWorks = section.data as HowItWorksSectionData;
                break;
              case "testimonials":
                acc.testimonials = section.data as TestimonialsSectionData;
                break;
              case "introSection":
                acc.introSection = section.data as IntroSectionData;
                break;
              case "trainerProfile":
                acc.trainerProfile = section.data as TrainerProfileSectionData;
                break;
              case "faq":
                acc.faq = section.data as FaqSectionData;
                break;
            }
            return acc;
          }, {} as Partial<Sections>);

          // Set sections and cache the data
          setSections(sectionsData);
          setCachedData(sectionsData);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading State with Skeleton Loader
  if (loading) {
    return <SkeletonLoader />;
  }

  // Error State
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  // Render Main Application
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar openPopup={openPopup} />
              {sections.heroSection && (
                <HeroSection
                  openPopup={openPopup}
                  data={sections.heroSection}
                />
              )}
              {sections.featured && (
                <Featured openPopup={openPopup} data={sections.featured} />
              )}
              {sections.howItWorks && (
                <HowItWorks openPopup={openPopup} data={sections.howItWorks} />
              )}
              {sections.testimonials && (
                <TestimonialsSection
                  openPopup={openPopup}
                  data={sections.testimonials}
                />
              )}
              {sections.introSection && (
                <IntroductionSection
                  openPopup={openPopup}
                  data={sections.introSection}
                />
              )}
              {sections.trainerProfile && (
                <TrainerProfile data={sections.trainerProfile} />
              )}
              {sections.faq && <Faq data={sections.faq} />}
              <FixedButton openPopup={openPopup} />
              <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
              <PrivacyPolicy />
            </div>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
