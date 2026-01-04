
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | null;
  bio: string;
}

const Team = () => {
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Romeo Paa-Kwesi Antwi",
      role: "Chief Executive Officer",
      image: null,
      bio: "Visionary leader building innovative tech talent networks and connecting professionals with opportunities"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: null,
      bio: "Leading innovation with 15+ years in enterprise software development"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead AI Engineer",
      image: null,
      bio: "Pioneering machine learning solutions for complex business challenges"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Senior Full-Stack Developer",
      image: null,
      bio: "Expert in scalable web applications and cloud architecture"
    },
    {
      id: 5,
      name: "David Kim",
      role: "DevOps Engineer",
      image: null,
      bio: "Ensuring seamless deployment and infrastructure optimization"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "UX/UI Designer",
      image: null,
      bio: "Creating intuitive interfaces that users love to interact with"
    }
  ]);

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our talented professionals bring together decades of experience in cutting-edge technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
