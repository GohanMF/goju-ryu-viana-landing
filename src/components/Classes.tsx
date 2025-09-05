import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Classes = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Training Schedule
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for traditional Goju-ryu karate training. All levels welcome - 
            from beginners taking their first steps to advanced practitioners refining their art.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-2xl w-full border-accent/20 shadow-dojo">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary mb-4">
                Weekly Training Sessions
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg border border-accent/10">
                  <div className="font-medium text-primary">Tuesday</div>
                  <div className="text-primary">19:00 - 20:30</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg border border-accent/10">
                  <div className="font-medium text-primary">Thursday</div>
                  <div className="text-primary">19:00 - 20:30</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg border border-accent/10">
                  <div className="font-medium text-primary">Friday</div>
                  <div className="text-primary">19:00 - 20:30</div>
                </div>
              </div>

              <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-primary mb-2">What You'll Learn</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                    Traditional kata
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                    Self-defense techniques
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                    Breathing exercises
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                    Physical conditioning
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                    Meditation & focus
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                    Traditional philosophy
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
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