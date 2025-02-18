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

interface Beneficiary {
  text: string;
}

interface IntroSectionData {
  title: string;
  subtitle: string;
  beneficiaries: Beneficiary[];
}

interface IntroSectionProps {
  data: IntroSectionData;
  updateData: (newData: IntroSectionData) => void;
}

export function IntroSection({ data, updateData }: IntroSectionProps) {
  const [localData, setLocalData] = useState<IntroSectionData>(data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBeneficiaryChange = (index: number, value: string) => {
    const newBeneficiaries = [...localData.beneficiaries];
    newBeneficiaries[index] = { text: value };
    setLocalData((prev) => ({ ...prev, beneficiaries: newBeneficiaries }));
  };

  const handleSubmit = () => {
    updateData(localData);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Intro Section</h2>
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
          <Label htmlFor="subtitle">Subtitle</Label>
          <Textarea
            id="subtitle"
            name="subtitle"
            value={localData.subtitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Beneficiaries</Label>
          {localData.beneficiaries.map((beneficiary, index) => (
            <Textarea
              key={index}
              value={beneficiary.text}
              onChange={(e) => handleBeneficiaryChange(index, e.target.value)}
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
              Intro section data updated successfully
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
