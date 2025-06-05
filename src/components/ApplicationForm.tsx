
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

      // Send email notification
      try {
        await supabase.functions.invoke('send-application-email', {
          body: {
            applicantData: formData
          }
        });
      } catch (emailError) {
        console.error('Error sending email notification:', emailError);
        // Don't fail the entire submission if email fails
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const expertiseAreas = [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Cyber Security",
    "Network Administration",
    "Cloud Architecture",
    "DevOps",
    "Data Science",
    "AI/Machine Learning",
    "UI/UX Design",
    "Database Administration",
    "Quality Assurance",
    "Other"
  ];

  return (
    <section id="apply" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-blue-400">Tech Network</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Are you a skilled tech professional? Join APEX Technologies and earn 60% of project revenue 
            while working on exciting projects in your area of expertise.
          </p>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">How It Works</h3>
            <div className="text-gray-300 space-y-2">
              <p>1. Submit your application with your expertise area</p>
              <p>2. Get approved and join our talent network</p>
              <p>3. Receive project assignments matching your skills</p>
              <p>4. Earn 60% of project revenue upon completion</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-3xl text-white text-center">Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Full Name *</label>
                    <Input
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      placeholder="+233 123 456 789"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Primary Expertise *</label>
                    <select
                      name="expertise"
                      value={formData.expertise}
                      onChange={(e) => setFormData(prev => ({ ...prev, expertise: e.target.value }))}
                      className="w-full h-10 rounded-md border border-slate-600 bg-slate-800 text-white px-3 py-2"
                      required
                    >
                      <option value="">Select your expertise</option>
                      {expertiseAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Years of Experience *</label>
                  <Input
                    name="experience"
                    placeholder="e.g., 5 years"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Portfolio/Website</label>
                    <Input
                      name="portfolio"
                      placeholder="https://yourportfolio.com"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">LinkedIn Profile</label>
                    <Input
                      name="linkedIn"
                      placeholder="https://linkedin.com/in/yourname"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">GitHub Profile</label>
                  <Input
                    name="github"
                    placeholder="https://github.com/yourusername"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Cover Letter *</label>
                  <Textarea
                    name="coverLetter"
                    placeholder="Tell us about your skills, experience, and why you want to join APEX Technologies..."
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
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
