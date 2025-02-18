// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
// import { HeroSection } from "./components/Admin/Hero-Section";
// import { FeaturedSection } from "./components/Admin/Featured-Section";
// import { HowItWorksSection } from "./components/Admin/HowItWorks";
// import { TestimonialsSection } from "./components/Admin/Testimonial-Section";
// import { IntroSection } from "./components/Admin/Intro-Section";
// import { TrainerProfileSection } from "./components/Admin/Trainer-Profile";
// import { FaqSection } from "./components/Admin/FAQ-Section";
// import { toast } from "sonner"; // Assuming you're using a toast library for notifications

// // Define a generic type for section data
// type SectionData = Record<string, any>;

// export default function AdminPage() {
//   const [data, setData] = useState<Record<string, SectionData>>({});
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch all section data on component mount
//   useEffect(() => {
//     const fetchAllSectionData = async () => {
//       try {
//         const sections = [
//           "heroSection",
//           "featured",
//           "howItWorks",
//           "testimonials",
//           "introSection",
//           "trainerProfile",
//           "faq",
//         ];

//         const sectionPromises = sections.map((section) =>
//           axios.get(
//             `${
//               import.meta.env.VITE_API_URL
//             }/fetch-section?sectionName=${section}`
//           )
//         );

//         const results = await Promise.all(sectionPromises);

//         const fetchedData = results.reduce((acc, response, index) => {
//           acc[sections[index]] = response.data.data.data;
//           return acc;
//         }, {});

//         setData(fetchedData);
//         setIsLoading(false);
//       } catch (error) {
//         toast.error("Failed to load section data");
//         setIsLoading(false);
//       }
//     };

//     fetchAllSectionData();
//   }, []);

//   // Generic update function for section data
//   const updateSectionData = async (
//     sectionName: string,
//     newData: SectionData
//   ) => {
//     try {
//       const response = await axios.put(
//         `${import.meta.env.VITE_API_URL}/edit-section`,
//         {
//           sectionName,
//           data: newData,
//         }
//       );

//       // Update local state after successful API call
//       setData((prev) => ({
//         ...prev,
//         [sectionName]: newData,
//       }));

//       toast.success("Section updated successfully");
//     } catch (error) {
//       toast.error(`Failed to update ${sectionName}`);
//     }
//   };

//   if (isLoading) {
//     return <div className="text-center p-8">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 font-poppins">
//       <h1 className="text-4xl font-bold mb-8 text-center text-primary">
//         Astrology Workshop Admin Panel
//       </h1>
//       <Tabs defaultValue="hero" className="w-full">
//         <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
//           <TabsTrigger value="hero">Hero</TabsTrigger>
//           <TabsTrigger value="featured">Featured</TabsTrigger>
//           <TabsTrigger value="howItWorks">How It Works</TabsTrigger>
//           <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
//           <TabsTrigger value="intro">Intro</TabsTrigger>
//           <TabsTrigger value="trainer">Trainer</TabsTrigger>
//           <TabsTrigger value="faq">FAQ</TabsTrigger>
//         </TabsList>
//         <TabsContent value="hero">
//           <HeroSection
//             data={data.heroSection}
//             updateData={(newData) => updateSectionData("heroSection", newData)}
//           />
//         </TabsContent>
//         <TabsContent value="featured">
//           <FeaturedSection
//             data={data.featured}
//             updateData={(newData) => updateSectionData("featured", newData)}
//           />
//         </TabsContent>
//         <TabsContent value="howItWorks">
//           <HowItWorksSection
//             data={data.howItWorks}
//             updateData={(newData) => updateSectionData("howItWorks", newData)}
//           />
//         </TabsContent>
//         <TabsContent value="testimonials">
//           <TestimonialsSection
//             data={data.testimonials}
//             updateData={(newData) => updateSectionData("testimonials", newData)}
//           />
//         </TabsContent>
//         <TabsContent value="intro">
//           <IntroSection
//             data={data.introSection}
//             updateData={(newData) => updateSectionData("introSection", newData)}
//           />
//         </TabsContent>
//         <TabsContent value="trainer">
//           <TrainerProfileSection
//             data={data.trainerProfile}
//             updateData={(newData) =>
//               updateSectionData("trainerProfile", newData)
//             }
//           />
//         </TabsContent>
//         <TabsContent value="faq">
//           <FaqSection
//             data={data.faq}
//             updateData={(newData) => updateSectionData("faq", newData)}
//           />
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Login } from "./Login";
import AdminPage from "./AdminPage";
import { toast } from "sonner";

const ADMIN_USERNAME = "MagicalSugandha123";
const ADMIN_PASSWORD = "$ug@ndh@@123";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <AdminPage onLogout={handleLogout} />
      )}
    </>
  );
}
