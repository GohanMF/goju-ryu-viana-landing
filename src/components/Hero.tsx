import { Button } from "@/components/ui/button";
import dojoInterior from "@/assets/dojo-interior.jpg";
import gojuRyuLogo from "/lovable-uploads/1ef44e39-7779-4dd7-9d56-43f8a7df8e46.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dojoInterior})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={gojuRyuLogo} 
              alt="Goju-ryu Viana Dojo Logo" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            <span className="block">Goju-ryu</span>
            <span className="block text-accent font-display">Viana</span>
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover the ancient art of Goju-ryu Karate - where hard meets soft, 
            tradition meets discipline, and spirit meets strength.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="dojo" 
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Begin Your Journey
          </Button>
          <Button 
            variant="sensei" 
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
        
        {/* Traditional Japanese motto */}
        <div className="mt-12 pt-8 border-t border-accent/30">
          <p className="text-accent font-medium text-lg mb-2">
            剛柔流
          </p>
          <p className="text-primary-foreground/80 text-sm tracking-wider">
            "The Way of Hard and Soft"
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;