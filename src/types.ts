// Hero Section Types
export interface HeroSectionData {
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

// Featured Section Types
export interface Logo {
  name: string;
  src: string;
}

export interface FeaturedSectionData {
  title: string;
  logos: Logo[];
  questionsTitle: string;
  questions: string[];
}

// How It Works Types
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksSectionData {
  title: string;
  description: string[];
  features: Feature[];
}

// Testimonials Types
export interface VideoTestimonial {
  videoId: string;
  name: string;
}

export interface ImageTestimonial {
  imageSrc: string;
}

export interface TestimonialsSectionData {
  sectionTitle: string;
  videoTestimonials: VideoTestimonial[];
  imageTestimonials: ImageTestimonial[];
}

// Introduction Section Types
export interface Beneficiary {
  text: string;
}

export interface IntroSectionData {
  title: string;
  subtitle: string;
  beneficiaries: Beneficiary[];
}

// Trainer Profile Types
export interface Badge {
  label: string;
}

export interface TrainerProfileSectionData {
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

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

export interface FaqSectionData {
  title: string;
  questions: FAQ[];
}

// Combined Sections Interface
export interface Sections {
  heroSection: HeroSectionData;
  featured: FeaturedSectionData;
  howItWorks: HowItWorksSectionData;
  testimonials: TestimonialsSectionData;
  introSection: IntroSectionData;
  trainerProfile: TrainerProfileSectionData;
  faq: FaqSectionData;
}
