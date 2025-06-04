
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | null;
  bio: string;
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
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

  const handleImageUpload = (memberId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setTeamMembers(prev => 
          prev.map(member => 
            member.id === memberId ? { ...member, image: imageUrl } : member
          )
        );
        toast({
          title: "Image uploaded successfully!",
          description: "Team member photo has been updated.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="team" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-blue-400">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented professionals bring together decades of experience in cutting-edge technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="bg-slate-900/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-blue-400"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <label className="absolute -bottom-2 right-1/2 transform translate-x-1/2 cursor-pointer">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Upload className="w-4 h-4 text-white" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(member.id, e)}
                    />
                  </label>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
