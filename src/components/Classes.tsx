import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const Classes = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('classes.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('classes.description')}
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-2xl w-full border-accent/20 shadow-dojo">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary mb-4">
                {t('classes.weeklyTitle')}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg border border-accent/10">
                  <div className="font-medium text-primary">{t('classes.tuesday')}</div>
                  <div className="text-primary">{t('classes.time')}</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg border border-accent/10">
                  <div className="font-medium text-primary">{t('classes.thursday')}</div>
                  <div className="text-primary">{t('classes.time')}</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg border border-accent/10">
                  <div className="font-medium text-primary">{t('classes.friday')}</div>
                  <div className="text-primary">{t('classes.time')}</div>
                </div>
              </div>

              <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-primary mb-2">{t('classes.whatYouLearn')}</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {t('classes.skills').map((skill: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Classes;