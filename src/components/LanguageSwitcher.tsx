import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-background/90 backdrop-blur-sm rounded-lg border border-accent/20 p-1 shadow-soft">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="text-xs h-8 px-3"
        >
          EN
        </Button>
        <Button
          variant={language === 'pt' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('pt')}
          className="text-xs h-8 px-3"
        >
          PT
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;