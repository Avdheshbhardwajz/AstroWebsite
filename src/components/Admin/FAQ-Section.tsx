import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionData {
  title: string;
  questions: FAQ[];
}

interface FAQSectionProps {
  data: FAQSectionData;
  updateData: (newData: FAQSectionData) => void;
}

export function FaqSection({ data, updateData }: FAQSectionProps) {
  const [localData, setLocalData] = useState<FAQSectionData>(data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFaqChange = (index: number, field: keyof FAQ, value: string) => {
    const newQuestions = [...localData.questions];
    newQuestions[index] = { ...newQuestions[index], [field]: value };
    setLocalData((prev) => ({ ...prev, questions: newQuestions }));
  };

  const handleSubmit = () => {
    updateData(localData);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">FAQ Section</h2>
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
        {localData.questions.map((faq, index) => (
          <div key={index} className="space-y-2">
            <Label>Question {index + 1}</Label>
            <Input
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
            />
            <Label>Answer {index + 1}</Label>
            <Textarea
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
            />
          </div>
        ))}
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
              FAQ section data updated successfully
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
