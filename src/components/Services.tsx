
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Services = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions that transform data into actionable insights and automate complex processes.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"],
      detailedDescription: "Our AI & Machine Learning services help businesses harness the power of artificial intelligence to solve complex problems and gain competitive advantages. We develop custom machine learning models, implement predictive analytics systems, and create intelligent automation solutions that transform how you operate.",
      benefits: [
        "Automated decision-making processes",
        "Enhanced customer insights and personalization",
        "Improved operational efficiency",
        "Predictive maintenance and forecasting",
        "Advanced data pattern recognition"
      ]
    },
    {
      title: "Cloud Architecture",
      description: "Scalable, secure cloud solutions that grow with your business and optimize performance.",
      features: ["AWS/Azure Migration", "Microservices Design", "Auto-scaling Solutions", "Security Implementation"],
      detailedDescription: "We design and implement robust cloud architectures that provide scalability, reliability, and cost-effectiveness. Our cloud solutions ensure your applications can handle growing demands while maintaining optimal performance and security.",
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced disaster recovery capabilities",
        "Better collaboration and accessibility",
        "Automatic updates and maintenance"
      ]
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web and mobile applications built with cutting-edge technologies.",
      features: ["React/Next.js", "Node.js/Python", "Mobile Apps", "API Development"],
      detailedDescription: "Our full-stack development team creates comprehensive web and mobile applications using modern technologies. From user interface design to backend development, we handle every aspect of your application development needs.",
      benefits: [
        "Faster time-to-market",
        "Consistent user experience across platforms",
        "Optimized performance and responsiveness",
        "Seamless integration with existing systems",
        "Ongoing maintenance and support"
      ]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Streamlined deployment pipelines and robust infrastructure management.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Infrastructure as Code"],
      detailedDescription: "We implement DevOps practices that streamline your development and deployment processes. Our infrastructure solutions ensure reliable, scalable, and secure environments for your applications.",
      benefits: [
        "Faster and more reliable deployments",
        "Improved collaboration between teams",
        "Enhanced system monitoring and alerting",
        "Reduced downtime and improved reliability",
        "Automated testing and quality assurance"
      ]
    },
    {
      title: "Data Engineering",
      description: "Robust data pipelines and analytics platforms for informed decision-making.",
      features: ["Data Warehousing", "ETL Processes", "Real-time Analytics", "Big Data Solutions"],
      detailedDescription: "Our data engineering services help you collect, process, and analyze large volumes of data to gain valuable business insights. We build robust data pipelines and analytics platforms that support data-driven decision making.",
      benefits: [
        "Improved data quality and consistency",
        "Real-time business insights",
        "Better decision-making capabilities",
        "Scalable data processing solutions",
        "Compliance with data governance standards"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Penetration Testing", "Security Audits", "Compliance Management", "Incident Response"],
      detailedDescription: "We provide comprehensive cybersecurity services to protect your business from digital threats. Our security experts implement robust defense mechanisms and ensure your systems comply with industry standards.",
      benefits: [
        "Protection against cyber threats",
        "Compliance with industry regulations",
        "Reduced risk of data breaches",
        "Enhanced customer trust and confidence",
        "24/7 security monitoring and response"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border text-foreground max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-primary mb-4">{service.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.detailedDescription}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-muted-foreground flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-border pt-4">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Ready to get started?</h4>
                        <p className="text-muted-foreground mb-4">
                          Contact us to discuss how our {service.title.toLowerCase()} services can benefit your business.
                        </p>
                        <p className="text-primary font-medium">
                          Call us at: +233 546906739
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
