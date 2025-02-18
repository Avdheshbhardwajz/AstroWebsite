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

interface HeroSectionProps {
  data: HeroSectionData;
  updateData: (newData: HeroSectionData) => void;
}

export function HeroSection({ data, updateData }: HeroSectionProps) {
  const [localData, setLocalData] = useState<HeroSectionData>(data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHighlightedWordsChange = (index: number, value: string) => {
    const newHighlightedWords = [...localData.highlightedWords];
    newHighlightedWords[index] = value;
    setLocalData((prev) => ({
      ...prev,
      highlightedWords: newHighlightedWords,
    }));
  };

  const handleBenefitChange = (index: number, value: string) => {
    const newBenefits = [...localData.benefits];
    newBenefits[index] = value;
    setLocalData((prev) => ({ ...prev, benefits: newBenefits }));
  };

  const handleAddBenefit = () => {
    setLocalData((prev) => ({
      ...prev,
      benefits: [...prev.benefits, ""],
    }));
  };

  const handleRemoveBenefit = (indexToRemove: number) => {
    setLocalData((prev) => ({
      ...prev,
      benefits: prev.benefits.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleAddHighlightedWord = () => {
    setLocalData((prev) => ({
      ...prev,
      highlightedWords: [...prev.highlightedWords, ""],
    }));
  };

  const handleRemoveHighlightedWord = (indexToRemove: number) => {
    setLocalData((prev) => ({
      ...prev,
      highlightedWords: prev.highlightedWords.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const handleSave = () => {
    updateData(localData);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Hero Section</h2>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="heading">Heading</Label>
          <Textarea
            id="heading"
            name="heading"
            value={localData.heading}
            onChange={handleChange}
            rows={3}
          />
        </div>
        <div>
          <Label>Highlighted Words</Label>
          {localData.highlightedWords.map((word, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <Input
                value={word}
                onChange={(e) =>
                  handleHighlightedWordsChange(index, e.target.value)
                }
                className="flex-grow"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => handleRemoveHighlightedWord(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={handleAddHighlightedWord}
          >
            Add Highlighted Word
          </Button>
        </div>
        <div>
          <Label htmlFor="subHeading">Subheading</Label>
          <Textarea
            id="subHeading"
            name="subHeading"
            value={localData.subHeading}
            onChange={handleChange}
            rows={3}
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            value={localData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <Input
            id="time"
            name="time"
            value={localData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="language">Language</Label>
          <Input
            id="language"
            name="language"
            value={localData.language}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={localData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="heroImage">Hero Image URL</Label>
          <Input
            id="heroImage"
            name="heroImage"
            value={localData.heroImage}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Benefits</Label>
          {localData.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <Textarea
                value={benefit}
                onChange={(e) => handleBenefitChange(index, e.target.value)}
                className="flex-grow"
                rows={2}
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => handleRemoveBenefit(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={handleAddBenefit}
          >
            Add Benefit
          </Button>
        </div>
      </div>
      <Button onClick={handleSave}>Save Changes</Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="font-poppins">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Section Updated
            </DialogTitle>
            <DialogDescription>
              Hero section data updated successfully
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
