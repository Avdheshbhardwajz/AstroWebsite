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

interface VideoTestimonial {
  videoId: string;
  name: string;
}

interface ImageTestimonial {
  imageSrc: string;
}

interface TestimonialsSectionData {
  sectionTitle: string;
  videoTestimonials: VideoTestimonial[];
  imageTestimonials: ImageTestimonial[];
}

interface TestimonialsSectionProps {
  data: TestimonialsSectionData;
  updateData: (newData: TestimonialsSectionData) => void;
}

export function TestimonialsSection({
  data,
  updateData,
}: TestimonialsSectionProps) {
  const [localData, setLocalData] = useState<TestimonialsSectionData>(data);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVideoTestimonialChange = (
    index: number,
    field: keyof VideoTestimonial,
    value: string
  ) => {
    const newVideoTestimonials = [...localData.videoTestimonials];
    newVideoTestimonials[index] = {
      ...newVideoTestimonials[index],
      [field]: value,
    };
    setLocalData((prev) => ({
      ...prev,
      videoTestimonials: newVideoTestimonials,
    }));
  };

  const handleImageTestimonialChange = (index: number, value: string) => {
    const newImageTestimonials = [...localData.imageTestimonials];
    newImageTestimonials[index] = { imageSrc: value };
    setLocalData((prev) => ({
      ...prev,
      imageTestimonials: newImageTestimonials,
    }));
  };

  const handleSubmit = () => {
    updateData(localData);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Testimonials Section</h2>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="sectionTitle">Section Title</Label>
          <Input
            id="sectionTitle"
            name="sectionTitle"
            value={localData.sectionTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Video Testimonials</Label>
          {localData.videoTestimonials.map((testimonial, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <Input
                value={testimonial.videoId}
                onChange={(e) =>
                  handleVideoTestimonialChange(index, "videoId", e.target.value)
                }
                placeholder="Video ID"
              />
              <Input
                value={testimonial.name}
                onChange={(e) =>
                  handleVideoTestimonialChange(index, "name", e.target.value)
                }
                placeholder="Name"
              />
            </div>
          ))}
        </div>
        <div>
          <Label>Image Testimonials</Label>
          {localData.imageTestimonials.map((testimonial, index) => (
            <Input
              key={index}
              value={testimonial.imageSrc}
              onChange={(e) =>
                handleImageTestimonialChange(index, e.target.value)
              }
              placeholder="Image URL"
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
              Testimonials section data updated successfully
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
