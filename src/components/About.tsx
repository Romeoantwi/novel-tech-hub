
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible with technology"
    },
    {
      title: "Client Success",
      description: "Your success is our success - we're committed to delivering exceptional results"
    },
    {
      title: "Quality Assurance",
      description: "Every solution undergoes rigorous testing to ensure reliability and performance"
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with your team to understand and exceed your expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Phaemos Technologies</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded with a vision to revolutionize how businesses leverage technology, Phaemos Technologies 
                has emerged as a leading provider of innovative software solutions. We specialize in transforming 
                complex business challenges into elegant, scalable technology solutions.
              </p>
              <p>
                Our team of expert engineers, designers, and strategists work collaboratively to deliver 
                cutting-edge solutions that drive growth, efficiency, and competitive advantage for our clients. 
                From Fortune 500 enterprises to innovative startups, we've helped organizations across industries 
                achieve their digital transformation goals.
              </p>
              <p>
                At Phaemos Technologies, we don't just build software – we craft experiences that empower users 
                and create lasting value for businesses. Our commitment to excellence, innovation, and client 
                success has made us a trusted partner in the technology landscape.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h3>
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
