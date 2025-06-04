
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions that transform data into actionable insights and automate complex processes.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"]
    },
    {
      title: "Cloud Architecture",
      description: "Scalable, secure cloud solutions that grow with your business and optimize performance.",
      features: ["AWS/Azure Migration", "Microservices Design", "Auto-scaling Solutions", "Security Implementation"]
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web and mobile applications built with cutting-edge technologies.",
      features: ["React/Next.js", "Node.js/Python", "Mobile Apps", "API Development"]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Streamlined deployment pipelines and robust infrastructure management.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Infrastructure as Code"]
    },
    {
      title: "Data Engineering",
      description: "Robust data pipelines and analytics platforms for informed decision-making.",
      features: ["Data Warehousing", "ETL Processes", "Real-time Analytics", "Big Data Solutions"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Penetration Testing", "Security Audits", "Compliance Management", "Incident Response"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-900/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
