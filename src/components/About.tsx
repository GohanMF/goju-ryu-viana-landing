import { Card, CardContent } from "@/components/ui/card";
import karateTraining from "@/assets/karate-training.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {t('about.philosophy')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('about.philosophyText1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.philosophyText2')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-accent/20 shadow-soft hover:shadow-dojo transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">剛</div>
                  <h4 className="font-semibold text-primary mb-2">{t('about.hard')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('about.hardDescription')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20 shadow-soft hover:shadow-dojo transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">柔</div>
                  <h4 className="font-semibold text-primary mb-2">{t('about.soft')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('about.softDescription')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img 
              src={karateTraining} 
              alt={t('about.imageAlt')}
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