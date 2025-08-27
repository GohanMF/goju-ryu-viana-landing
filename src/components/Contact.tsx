import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Begin Your Journey
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step toward mastery. Join our dojo community and discover 
            the transformative power of Goju-ryu karate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-accent/30 bg-background/95 backdrop-blur-sm shadow-dojo">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Dojo Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  R. da Sociedade de Instrução e Recreio 104<br />
                  4900-279 Carreço<br />
                  Portugal
                </p>
                <Button variant="outline" size="sm">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-accent/30 bg-background/95 backdrop-blur-sm shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="font-medium text-primary">Phone</span>
                  </div>
                  <p className="text-sm text-muted-foreground">+351 258 123 456</p>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-background/95 backdrop-blur-sm shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="font-medium text-primary">Email</span>
                  </div>
                  <p className="text-sm text-muted-foreground">info@gojuryu-viana.pt</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-accent/30 bg-background/95 backdrop-blur-sm shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Training Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tuesday</span>
                  <span className="font-medium text-primary">19:00 - 20:30</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Thursday</span>
                  <span className="font-medium text-primary">19:00 - 20:30</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Friday</span>
                  <span className="font-medium text-primary">19:00 - 20:30</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <Card className="border-accent/30 bg-background/95 backdrop-blur-sm shadow-dojo">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">
                  Ready to Start Training?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Experience a free trial class and discover if Goju-ryu is the path for you. 
                  No experience necessary - just bring your commitment to learn.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="dojo" 
                    size="lg" 
                    className="w-full text-lg py-4"
                  >
                    Book Free Trial Class
                  </Button>
                  
                  <Button 
                    variant="sensei" 
                    size="lg" 
                    className="w-full"
                  >
                    Contact Sensei
                  </Button>
                </div>

                <div className="pt-6 border-t border-accent/20">
                  <p className="text-sm text-muted-foreground mb-2">
                    Follow our journey
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground">
                      Facebook
                    </Button>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground">
                      Instagram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;