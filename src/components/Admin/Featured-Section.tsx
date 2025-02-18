// import { useState } from "react";
// import { Textarea } from "../ui/textarea";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { Button } from "../ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "../ui/dialog";
// import { AlertCircle, CheckCircle2 } from "lucide-react";

// interface Logo {
//   name: string;
//   src: string;
// }

// interface FeaturedSectionData {
//   title: string;
//   logos: Logo[];
//   questionsTitle: string;
//   questions: string[];
// }

// interface FeaturedSectionProps {
//   data: FeaturedSectionData;
//   updateData: (newData: FeaturedSectionData) => void; // Removed Promise<void>
// }

// export function FeaturedSection({ data, updateData }: FeaturedSectionProps) {
//   const [localData, setLocalData] = useState<FeaturedSectionData>(data);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [dialogContent, setDialogContent] = useState<{
//     title: string;
//     description: string;
//     isError: boolean;
//   }>({ title: "", description: "", isError: false });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setLocalData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleLogoChange = (
//     index: number,
//     field: keyof Logo,
//     value: string
//   ) => {
//     const newLogos = [...localData.logos];
//     newLogos[index] = { ...newLogos[index], [field]: value };
//     setLocalData((prev) => ({ ...prev, logos: newLogos }));
//   };

//   const handleQuestionChange = (index: number, value: string) => {
//     const newQuestions = [...localData.questions];
//     newQuestions[index] = value;
//     setLocalData((prev) => ({ ...prev, questions: newQuestions }));
//   };

//   const handleSubmit = () => {
//     try {
//       updateData(localData); // Removed await since it's not async anymore
//       setDialogContent({
//         title: "Success",
//         description: "Featured section data updated successfully",
//         isError: false,
//       });
//     } catch (error) {
//       setDialogContent({
//         title: "Error",
//         description: "Failed to update featured section data",
//         isError: true,
//       });
//     }
//     setIsDialogOpen(true);
//   };

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold">Featured Section</h2>
//       <div className="grid gap-4">
//         <div>
//           <Label htmlFor="title">Title</Label>
//           <Input
//             id="title"
//             name="title"
//             value={localData.title}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <Label>Logos</Label>
//           {localData.logos.map((logo, index) => (
//             <div key={index} className="flex gap-2 mt-2">
//               <Input
//                 value={logo.name}
//                 onChange={(e) =>
//                   handleLogoChange(index, "name", e.target.value)
//                 }
//                 placeholder="Name"
//               />
//               <Input
//                 value={logo.src}
//                 onChange={(e) => handleLogoChange(index, "src", e.target.value)}
//                 placeholder="Image URL"
//               />
//             </div>
//           ))}
//         </div>
//         <div>
//           <Label htmlFor="questionsTitle">Questions Title</Label>
//           <Input
//             id="questionsTitle"
//             name="questionsTitle"
//             value={localData.questionsTitle}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <Label>Questions</Label>
//           {localData.questions.map((question, index) => (
//             <Textarea
//               key={index}
//               value={question}
//               onChange={(e) => handleQuestionChange(index, e.target.value)}
//               className="mt-2"
//             />
//           ))}
//         </div>
//       </div>
//       <Button onClick={handleSubmit}>Save Changes</Button>

//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle className="flex items-center gap-2">
//               {dialogContent.isError ? (
//                 <AlertCircle className="h-5 w-5 text-destructive" />
//               ) : (
//                 <CheckCircle2 className="h-5 w-5 text-primary" />
//               )}
//               {dialogContent.title}
//             </DialogTitle>
//             <DialogDescription>{dialogContent.description}</DialogDescription>
//           </DialogHeader>
//           <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface Logo {
  name: string;
  src: string;
}

interface FeaturedSectionData {
  title: string;
  logos: Logo[];
  questionsTitle: string;
  questions: string[];
}

interface FeaturedSectionProps {
  data: FeaturedSectionData;
  updateData: (newData: FeaturedSectionData) => void;
}

export function FeaturedSection({ data, updateData }: FeaturedSectionProps) {
  const [localData, setLocalData] = useState<FeaturedSectionData>(data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (
    index: number,
    field: keyof Logo,
    value: string
  ) => {
    const newLogos = [...localData.logos];
    newLogos[index] = { ...newLogos[index], [field]: value };
    setLocalData((prev) => ({ ...prev, logos: newLogos }));
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...localData.questions];
    newQuestions[index] = value;
    setLocalData((prev) => ({ ...prev, questions: newQuestions }));
  };

  const handleSubmit = () => {
    updateData(localData);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Featured Section</h2>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={localData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Logos</Label>
          {localData.logos.map((logo, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <Input
                value={logo.name}
                onChange={(e) =>
                  handleLogoChange(index, "name", e.target.value)
                }
                placeholder="Name"
              />
              <Input
                value={logo.src}
                onChange={(e) => handleLogoChange(index, "src", e.target.value)}
                placeholder="Image URL"
              />
            </div>
          ))}
        </div>
        <div>
          <Label htmlFor="questionsTitle">Questions Title</Label>
          <Input
            id="questionsTitle"
            name="questionsTitle"
            value={localData.questionsTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Questions</Label>
          {localData.questions.map((question, index) => (
            <Textarea
              key={index}
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              className="mt-2"
            />
          ))}
        </div>
      </div>
      <Button onClick={handleSubmit}>Save Changes</Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="font-poppins">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Section Updated
            </DialogTitle>
            <DialogDescription>
              Featured section data updated successfully
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
