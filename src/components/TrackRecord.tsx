
import { Card, CardContent } from "@/components/ui/card";

const TrackRecord = () => {
  const achievements = [
    { number: "50+", label: "Tech Professionals", description: "Growing network of skilled developers and specialists" },
    { number: "95%", label: "Project Success Rate", description: "High-quality deliveries from our network" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock technical assistance" },
    { number: "60%", label: "Revenue Share", description: "Fair compensation for our network members" },
  ];

  const milestones = [
    { year: "2024", title: "Network Launch", description: "Started building our tech talent network with initial focus on software development" },
    { year: "2024", title: "First Projects", description: "Successfully delivered initial projects with our network partners" },
    { year: "2024", title: "Growing Portfolio", description: "Expanding expertise areas to include cybersecurity and networking" },
    { year: "2024", title: "Quality Standards", description: "Established rigorous vetting process for network members" },
  ];

  return (
    <section id="track-record" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Progress</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation with talented professionals and successful project deliveries
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card border-border text-center hover:border-primary/50 transition-all duration-300 shadow-sm">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {achievement.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Milestones */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-foreground mb-2">{milestone.title}</h4>
                  <p className="text-muted-foreground text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
