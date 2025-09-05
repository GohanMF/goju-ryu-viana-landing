import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mainSensei from "@/assets/main-sensei.jpg";
import sensei2 from "@/assets/sensei-2.jpg";
import sensei3 from "@/assets/sensei-3.jpg";
import sensei4 from "@/assets/sensei-4.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Senseis = () => {
  const { t } = useLanguage();
  
  const mainSenseiData = {
    name: t('senseis.mainSensei.name'),
    dan: t('senseis.mainSensei.dan'),
    image: mainSensei,
    title: t('senseis.mainSensei.title')
  };

  const otherSenseis = t('senseis.otherSenseis').map((sensei: any, index: number) => ({
    ...sensei,
    image: [sensei2, sensei3, sensei4][index]
  }));

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('senseis.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('senseis.description')}
          </p>
        </div>

        {/* Main Sensei */}
        <div className="flex justify-center mb-16">
          <Card className="max-w-md border-accent/30 bg-background/95 backdrop-blur-sm shadow-dojo">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <img 
                  src={mainSenseiData.image} 
                  alt={mainSenseiData.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-accent/30 shadow-elegant"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground"
                >
                  {mainSenseiData.title}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {mainSenseiData.name}
              </h3>
              <div className="text-accent font-medium text-lg">
                {mainSenseiData.dan}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Senseis */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherSenseis.map((sensei, index) => (
            <Card 
              key={index} 
              className="border-accent/20 bg-background/95 backdrop-blur-sm shadow-soft hover:shadow-dojo transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img 
                    src={sensei.image} 
                    alt={sensei.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-accent/20"
                  />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">
                  {sensei.name}
                </h4>
                <div className="text-accent font-medium">
                  {sensei.dan}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Senseis;
