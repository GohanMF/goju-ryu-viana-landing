import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Classes = () => {
  const classes = [
    {
      title: "Beginners Program",
      level: "White to Yellow Belt",
      description: "Perfect introduction to Goju-ryu fundamentals. Learn basic stances, blocks, and strikes while building confidence and discipline.",
      schedule: "Mon, Wed, Fri - 7:00 PM",
      duration: "60 minutes",
      features: ["Basic kata", "Fundamental techniques", "Self-defense basics", "Flexibility training"]
    },
    {
      title: "Intermediate Training",
      level: "Orange to Green Belt",
      description: "Advance your skills with complex kata, sparring fundamentals, and deeper understanding of Goju-ryu principles.",
      schedule: "Tue, Thu, Sat - 6:30 PM",
      duration: "75 minutes",
      features: ["Advanced kata", "Sparring introduction", "Breathing techniques", "Partner drills"]
    },
    {
      title: "Advanced Practitioners",
      level: "Brown to Black Belt",
      description: "Master-level training focusing on refinement, teaching skills, and the deeper philosophical aspects of martial arts.",
      schedule: "Daily - 6:00 PM",
      duration: "90 minutes",
      features: ["Master kata", "Free sparring", "Teaching practice", "Philosophy study"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Training Programs
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed to guide you from your first bow to mastery, 
            honoring the traditional progression of Goju-ryu karate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((classInfo, index) => (
            <Card 
              key={index}
              className="relative border-accent/20 shadow-soft hover:shadow-dojo transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {classInfo.level}
                  </Badge>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{classInfo.duration}</div>
                  </div>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors">
                  {classInfo.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {classInfo.description}
                </p>
                
                <div className="space-y-2">
                  <div className="font-medium text-primary text-sm">Schedule</div>
                  <div className="text-sm text-muted-foreground">{classInfo.schedule}</div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-primary text-sm">What You'll Learn</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {classInfo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-6 group-hover:border-accent group-hover:text-accent transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block border-accent/30 bg-gradient-subtle shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Private Lessons Available
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Personalized instruction tailored to your specific goals and learning pace.
              </p>
              <Button variant="sensei" size="sm">
                Contact Sensei
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Classes;