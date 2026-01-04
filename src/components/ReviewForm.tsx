
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    rating: 0,
    review_text: "",
    project_type: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      toast({
        title: "Error",
        description: "Please select a rating",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert review into database
      const { error: reviewError } = await supabase
        .from('reviews' as any)
        .insert([{
          client_name: formData.client_name,
          client_email: formData.client_email,
          rating: formData.rating,
          review_text: formData.review_text,
          project_type: formData.project_type || null
        }]);

      if (reviewError) {
        console.error('Error submitting review:', reviewError);
        toast({
          title: "Error",
          description: "Failed to submit review. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Send email notification
      try {
        await supabase.functions.invoke('send-review-notification', {
          body: {
            client_name: formData.client_name,
            client_email: formData.client_email,
            rating: formData.rating,
            review_text: formData.review_text,
            project_type: formData.project_type
          }
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't show error to user as review was saved successfully
      }

      toast({
        title: "Success!",
        description: "Thank you for your review! It will be published after approval.",
      });

      // Reset form
      setFormData({
        client_name: "",
        client_email: "",
        rating: 0,
        review_text: "",
        project_type: ""
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = () => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 cursor-pointer transition-colors ${
              star <= formData.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
            onClick={() => setFormData({ ...formData, rating: star })}
          />
        ))}
      </div>
    );
  };

  return (
    <Card className="bg-slate-900/80 border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl text-white text-center">Leave a Review</CardTitle>
        <p className="text-gray-300 text-center">Share your experience working with Phaemos Technologies</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client_name" className="text-gray-300">
                Your Name *
              </Label>
              <Input
                id="client_name"
                value={formData.client_name}
                onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                className="bg-slate-800 border-slate-600 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="client_email" className="text-gray-300">
                Your Email *
              </Label>
              <Input
                id="client_email"
                type="email"
                value={formData.client_email}
                onChange={(e) => setFormData({ ...formData, client_email: e.target.value })}
                className="bg-slate-800 border-slate-600 text-white"
                required
              />
            </div>
          </div>

          <div>
            <Label className="text-gray-300">Rating *</Label>
            <div className="mt-2">
              {renderStars()}
            </div>
          </div>

          <div>
            <Label htmlFor="project_type" className="text-gray-300">
              Project Type (Optional)
            </Label>
            <Select value={formData.project_type} onValueChange={(value) => setFormData({ ...formData, project_type: value })}>
              <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-app">Mobile App</SelectItem>
                <SelectItem value="software-development">Software Development</SelectItem>
                <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="review_text" className="text-gray-300">
              Your Review *
            </Label>
            <Textarea
              id="review_text"
              value={formData.review_text}
              onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
              className="bg-slate-800 border-slate-600 text-white min-h-32"
              placeholder="Tell us about your experience working with Phaemos Technologies..."
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
