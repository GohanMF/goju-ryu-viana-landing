import { Card, CardContent } from "@/components/ui/card";
import karateTraining from "@/assets/karate-training.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            The Way of Goju-ryu
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded in Okinawa, Goju-ryu represents the perfect balance between hard and soft techniques, 
            embodying centuries of martial arts wisdom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Our Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Goju-ryu, meaning "hard-soft style," teaches us that true strength comes not from 
                rigidity alone, but from the ability to adapt - to be firm when necessary and 
                flexible when wisdom demands it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Goju-ryu Viana, we honor this ancient tradition while making it accessible 
                to modern practitioners seeking discipline, fitness, and self-improvement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-accent/20 shadow-soft hover:shadow-dojo transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">剛</div>
                  <h4 className="font-semibold text-primary mb-2">Go (Hard)</h4>
                  <p className="text-sm text-muted-foreground">
                    Strength, power, and decisive action when circumstances demand firmness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20 shadow-soft hover:shadow-dojo transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">柔</div>
                  <h4 className="font-semibold text-primary mb-2">Ju (Soft)</h4>
                  <p className="text-sm text-muted-foreground">
                    Flexibility, flowing movement, and gentle redirection of force.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img 
              src={karateTraining} 
              alt="Goju-ryu karate training session"
              className="w-full h-[500px] object-cover rounded-lg shadow-dojo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;