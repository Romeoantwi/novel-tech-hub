import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import ProfessionalInfoForm from "./forms/ProfessionalInfoForm";
import SocialLinksForm from "./forms/SocialLinksForm";
import CoverLetterForm from "./forms/CoverLetterForm";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    portfolio: "",
    linkedIn: "",
    github: "",
    coverLetter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert application into database
      const { error } = await supabase
        .from('applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          expertise: formData.expertise,
          experience: formData.experience,
          portfolio: formData.portfolio || null,
          linkedin: formData.linkedIn || null,
          github: formData.github || null,
          cover_letter: formData.coverLetter
        });

      if (error) {
        console.error('Error submitting application:', error);
        toast({
          title: "Error",
          description: "There was an error submitting your application. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 48 hours.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        expertise: "",
        experience: "",
        portfolio: "",
        linkedIn: "",
        github: "",
        coverLetter: ""
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="apply" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="text-primary">Tech Network</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Are you a skilled tech professional? Join Phaemos Technologies and earn 60% of project revenue 
            while working on exciting projects in your area of expertise.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-2">How It Works</h3>
            <div className="text-muted-foreground space-y-2">
              <p>1. Submit your application with your expertise area</p>
              <p>2. Get approved and join our talent network</p>
              <p>3. Receive project assignments matching your skills</p>
              <p>4. Earn 60% of project revenue upon completion</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground text-center">Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <PersonalInfoForm 
                  formData={formData} 
                  onChange={handleInputChange} 
                />

                <ProfessionalInfoForm 
                  formData={formData} 
                  onChange={handleInputChange} 
                />

                <SocialLinksForm 
                  formData={formData} 
                  onChange={handleInputChange} 
                />

                <CoverLetterForm 
                  formData={formData} 
                  onChange={handleInputChange} 
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;