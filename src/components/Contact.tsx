
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { label: "Phone", value: "+233 546906739" },
    { label: "Business Hours", value: "Monday - Friday: 9:00 AM - 6:00 PM (GMT)" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with innovative technology? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border text-foreground placeholder-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border text-foreground placeholder-muted-foreground"
                      required
                    />
                  </div>
                </div>
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-background border-border text-foreground placeholder-muted-foreground"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background border-border text-foreground placeholder-muted-foreground resize-none"
                  required
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-muted-foreground font-medium">{info.label}:</span>
                    {info.label === "Phone" ? (
                      <a 
                        href="tel:+233546906739" 
                        className="text-primary hover:text-primary/80 text-right font-medium transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground text-right">{info.value}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-secondary border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Get a free consultation and discover how we can help transform your business.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.open('tel:+233546906739', '_self')}
                >
                  📞 Call +233 546906739
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
