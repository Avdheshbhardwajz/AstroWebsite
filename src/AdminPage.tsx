"use client";

import { useState, useEffect } from "react";
import axios from "axios";
//import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { HeroSection } from "./components/Admin/Hero-Section";
import { FeaturedSection } from "./components/Admin/Featured-Section";
import { HowItWorksSection } from "./components/Admin/HowItWorks";
import { TestimonialsSection } from "./components/Admin/Testimonial-Section";
import { IntroSection } from "./components/Admin/Intro-Section";
import { TrainerProfileSection } from "./components/Admin/Trainer-Profile";
import { FaqSection } from "./components/Admin/FAQ-Section";
import { toast } from "sonner";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Skeleton } from "./components/ui/skeleton";
import {
  LogOut,
  Home,
  Star,
  HelpCircle,
  Users,
  BookOpen,
  User,
  FileQuestion,
} from "lucide-react";

// Define types for section data
interface HeroSectionData {
  heading: string;
  highlightedWords: string[];
  subHeading: string;
  date: string;
  time: string;
  language: string;
  location: string;
  heroImage: string;
  benefits: string[];
}

interface Logo {
  name: string;
  src: string;
}

interface FeaturedSectionData {
  // Define properties for Featured section if needed
  title: string;
  logos: Logo[];
  questionsTitle: string;
  questions: string[];
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}
interface HowItWorksSectionData {
  // Define properties for How It Works section if needed

  title: string;
  description: string[];
  features: Feature[];
}

interface VideoTestimonial {
  videoId: string;
  name: string;
}

interface ImageTestimonial {
  imageSrc: string;
}

interface TestimonialsSectionData {
  // Define properties for Testimonials section if needed
  sectionTitle: string;
  videoTestimonials: VideoTestimonial[];
  imageTestimonials: ImageTestimonial[];
}

interface Beneficiary {
  text: string;
}

interface IntroSectionData {
  title: string;
  subtitle: string;
  beneficiaries: Beneficiary[];
}

interface Badge {
  label: string;
}
interface TrainerProfileSectionData {
  header: {
    title: string;
    highlight: string;
  };
  trainer: {
    image: {
      src: string;
      alt: string;
      hoverEffect: string;
    };
    name: string;
    badges: Badge[];
    description: string;
  };
}
interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionData {
  // Define properties for FAQ section if needed
  title: string;
  questions: FAQ[];
}
// Define types for section data
type SectionData =
  | HeroSectionData
  | FeaturedSectionData
  | HowItWorksSectionData
  | TestimonialsSectionData
  | IntroSectionData
  | TrainerProfileSectionData
  | FaqSectionData;

type SectionName =
  | "heroSection"
  | "featured"
  | "howItWorks"
  | "testimonials"
  | "introSection"
  | "trainerProfile"
  | "faq";

interface AdminPageProps {
  onLogout: () => void;
}

export default function AdminPage({ onLogout }: AdminPageProps) {
  const [data, setData] = useState<Record<SectionName, SectionData>>(
    {} as Record<SectionName, SectionData>
  );
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<SectionName>("heroSection");

  useEffect(() => {
    const fetchAllSectionData = async () => {
      try {
        const sections: SectionName[] = [
          "heroSection",
          "featured",
          "howItWorks",
          "testimonials",
          "introSection",
          "trainerProfile",
          "faq",
        ];

        const sectionPromises = sections.map((section) =>
          axios.get<{ data: { data: SectionData } }>(
            `${
              import.meta.env.VITE_API_URL
            }/fetch-section?sectionName=${section}`
          )
        );

        const results = await Promise.all(sectionPromises);

        const fetchedData = results.reduce((acc, response, index) => {
          acc[sections[index]] = response.data.data.data;
          return acc;
        }, {} as Record<SectionName, SectionData>);

        setData(fetchedData);
        setIsLoading(false);
      } catch {
        toast.error("Failed to load section data");
        setIsLoading(false);
      }
    };

    fetchAllSectionData();
  }, []);

  const updateSectionData = async (
    sectionName: SectionName,
    newData: SectionData
  ) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/edit-section`, {
        sectionName,
        data: newData,
      });

      setData((prev) => ({
        ...prev,
        [sectionName]: newData,
      }));

      toast.success("Section updated successfully");
    } catch {
      toast.error(`Failed to update ${sectionName}`);
    }
  };

  const renderTabContent = (tabValue: SectionName) => {
    switch (tabValue) {
      case "heroSection":
        return (
          <HeroSection
            data={data.heroSection as HeroSectionData}
            updateData={(newData) => updateSectionData("heroSection", newData)}
          />
        );
      case "featured":
        return (
          <FeaturedSection
            data={data.featured as FeaturedSectionData}
            updateData={(newData) => updateSectionData("featured", newData)}
          />
        );
      case "howItWorks":
        return (
          <HowItWorksSection
            data={data.howItWorks as HowItWorksSectionData}
            updateData={(newData) => updateSectionData("howItWorks", newData)}
          />
        );
      case "testimonials":
        return (
          <TestimonialsSection
            data={data.testimonials as TestimonialsSectionData}
            updateData={(newData) => updateSectionData("testimonials", newData)}
          />
        );
      case "introSection":
        return (
          <IntroSection
            data={data.introSection as IntroSectionData}
            updateData={(newData) => updateSectionData("introSection", newData)}
          />
        );
      case "trainerProfile":
        return (
          <TrainerProfileSection
            data={data.trainerProfile as TrainerProfileSectionData}
            updateData={(newData) =>
              updateSectionData("trainerProfile", newData)
            }
          />
        );
      case "faq":
        return (
          <FaqSection
            data={data.faq as FaqSectionData}
            updateData={(newData) => updateSectionData("faq", newData)}
          />
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-poppins p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Loading Admin Panel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 font-poppins">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-md lg:h-screen">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
        </div>
        <Separator />
        <nav className="p-4 overflow-x-auto">
          <ul className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
            <li>
              <Button
                variant={activeTab === "heroSection" ? "secondary" : "ghost"}
                className="w-full justify-start text-sm lg:text-base"
                onClick={() => setActiveTab("heroSection")}
              >
                <Home className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">Hero</span>
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "featured" ? "secondary" : "ghost"}
                className="w-full justify-start text-sm lg:text-base"
                onClick={() => setActiveTab("featured")}
              >
                <Star className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">Featured</span>
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "howItWorks" ? "secondary" : "ghost"}
                className="w-full justify-start text-sm lg:text-base"
                onClick={() => setActiveTab("howItWorks")}
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">How It Works</span>
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "testimonials" ? "secondary" : "ghost"}
                className="w-full justify-start text-sm lg:text-base"
                onClick={() => setActiveTab("testimonials")}
              >
                <Users className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">Testimonials</span>
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "introSection" ? "secondary" : "ghost"}
                className="w-full justify-start text-sm lg:text-base"
                onClick={() => setActiveTab("introSection")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">Intro</span>
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "trainerProfile" ? "secondary" : "ghost"}
                className="w-full justify-start text-sm lg:text-base"
                onClick={() => setActiveTab("trainerProfile")}
              >
                <User className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">Trainer</span>
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "faq" ? "secondary" : "ghost"}
                className="w-full justify-start text-sm lg:text-base"
                onClick={() => setActiveTab("faq")}
              >
                <FileQuestion className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">FAQ</span>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="lg:absolute bottom-4 left-4 right-4 p-4 lg:p-0">
          <Button variant="destructive" className="w-full" onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </CardTitle>
          </CardHeader>
          <CardContent>{renderTabContent(activeTab)}</CardContent>
        </Card>
      </main>
    </div>
  );
}
