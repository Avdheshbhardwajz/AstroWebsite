import { useState } from "react";
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

interface TrainerProfileSectionProps {
  data: TrainerProfileSectionData;
  updateData: (newData: TrainerProfileSectionData) => void;
}

export function TrainerProfileSection({
  data,
  updateData,
}: TrainerProfileSectionProps) {
  const [localData, setLocalData] = useState<TrainerProfileSectionData>(data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "header" | "trainer",
    field: string
  ) => {
    const { value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...(section === "trainer" && field === "image"
          ? { image: { ...prev.trainer.image, src: value } }
          : { [field]: value }),
      },
    }));
  };

  const handleBadgeChange = (index: number, value: string) => {
    const newBadges = [...localData.trainer.badges];
    newBadges[index] = { label: value };
    setLocalData((prev) => ({
      ...prev,
      trainer: {
        ...prev.trainer,
        badges: newBadges,
      },
    }));
  };

  const handleSubmit = () => {
    updateData(localData);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Trainer Profile Section</h2>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="headerTitle">Header Title</Label>
          <Input
            id="headerTitle"
            value={localData.header.title}
            onChange={(e) => handleChange(e, "header", "title")}
          />
        </div>
        <div>
          <Label htmlFor="headerHighlight">Header Highlight</Label>
          <Input
            id="headerHighlight"
            value={localData.header.highlight}
            onChange={(e) => handleChange(e, "header", "highlight")}
          />
        </div>
        <div>
          <Label htmlFor="trainerImage">Trainer Image URL</Label>
          <Input
            id="trainerImage"
            value={localData.trainer.image.src}
            onChange={(e) => handleChange(e, "trainer", "image")}
          />
        </div>
        <div>
          <Label htmlFor="trainerName">Trainer Name</Label>
          <Input
            id="trainerName"
            value={localData.trainer.name}
            onChange={(e) => handleChange(e, "trainer", "name")}
          />
        </div>
        <div>
          <Label>Trainer Badges</Label>
          {localData.trainer.badges.map((badge, index) => (
            <Input
              key={index}
              value={badge.label}
              onChange={(e) => handleBadgeChange(index, e.target.value)}
              className="mt-2"
            />
          ))}
        </div>
        <div>
          <Label htmlFor="trainerDescription">Trainer Description</Label>
          <Input
            id="trainerDescription"
            value={localData.trainer.description}
            onChange={(e) => handleChange(e, "trainer", "description")}
          />
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
              Trainer Profile section data updated successfully
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
