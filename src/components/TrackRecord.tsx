
import { Card, CardContent } from "@/components/ui/card";

const TrackRecord = () => {
  const achievements = [
    { number: "500+", label: "Projects Delivered", description: "Successfully completed across various industries" },
    { number: "98%", label: "Client Satisfaction", description: "Consistently exceeding expectations" },
    { number: "50+", label: "Enterprise Clients", description: "Fortune 500 companies trust our solutions" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock technical assistance" },
  ];

  const milestones = [
    { year: "2024", title: "AI Innovation Award", description: "Recognized for breakthrough machine learning platform" },
    { year: "2023", title: "50M+ Users Reached", description: "Our applications now serve over 50 million users globally" },
    { year: "2022", title: "Series B Funding", description: "Secured $25M to accelerate product development" },
    { year: "2021", title: "ISO 27001 Certified", description: "Achieved highest security and compliance standards" },
  ];

  return (
    <section id="track-record" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Track Record</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - a proven history of delivering exceptional results
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-center hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.label}
                </h3>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Milestones */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Milestones</h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-white mb-2">{milestone.title}</h4>
                  <p className="text-gray-300 text-lg">{milestone.description}</p>
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
