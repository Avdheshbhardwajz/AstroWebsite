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

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksSectionData {
  title: string;
  description: string[];
  features: Feature[];
}

interface HowItWorksSectionProps {
  data: HowItWorksSectionData;
  updateData: (newData: HowItWorksSectionData) => void;
}

export function HowItWorksSection({
  data,
  updateData,
}: HowItWorksSectionProps) {
  const [localData, setLocalData] = useState<HowItWorksSectionData>(data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const newDescription = [...localData.description];
    newDescription[index] = value;
    setLocalData((prev) => ({ ...prev, description: newDescription }));
  };

  const handleFeatureChange = (
    index: number,
    field: keyof Feature,
    value: string
  ) => {
    const newFeatures = [...localData.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setLocalData((prev) => ({ ...prev, features: newFeatures }));
  };

  const handleSubmit = () => {
    updateData(localData);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">How It Works Section</h2>
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
          <Label>Description</Label>
          {localData.description.map((desc, index) => (
            <Textarea
              key={index}
              value={desc}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="mt-2"
            />
          ))}
        </div>
        <div>
          <Label>Features</Label>
          {localData.features.map((feature, index) => (
            <div key={index} className="grid gap-2 mt-2">
              <Input
                value={feature.icon}
                onChange={(e) =>
                  handleFeatureChange(index, "icon", e.target.value)
                }
                placeholder="Icon"
              />
              <Input
                value={feature.title}
                onChange={(e) =>
                  handleFeatureChange(index, "title", e.target.value)
                }
                placeholder="Title"
              />
              <Textarea
                value={feature.description}
                onChange={(e) =>
                  handleFeatureChange(index, "description", e.target.value)
                }
                placeholder="Description"
              />
            </div>
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
              How It Works section data updated successfully
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
