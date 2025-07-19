import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Eye, GitBranch, Zap, Globe, Mail } from "lucide-react";
import heroImage from "@/assets/hero-traffic.jpg";

const HeroSection = () => {
  const scrollToWaitingList = () => {
    const waitingListSection = document.querySelector('section[data-section="waiting-list"]');
    if (waitingListSection) {
      waitingListSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Open Source
                </Badge>
                <Badge variant="outline" className="bg-community/10 text-community">
                  Community Driven
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Traffic by the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  People
                </span>
                , for the{" "}
                <span className="bg-gradient-community bg-clip-text text-transparent">
                  People
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Community-driven traffic management solution built for transparency, privacy, and collaboration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="community" size="lg">
                <Users className="h-4 w-4" />
                <a href="https://discord.gg/VYE9CNtcp5" target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToWaitingList}>
                <Mail className="h-4 w-4" />
                Join Waitinglist
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Privacy First</p>
                  <p className="text-xs text-muted-foreground">No tracking</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Zap className="h-8 w-8 text-community mx-auto mb-2" />
                  <p className="text-sm font-medium">P2P Network</p>
                  <p className="text-xs text-muted-foreground">Decentralized</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Open Data</p>
                  <p className="text-xs text-muted-foreground">Transparent</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-30" />
            <Card className="relative overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Community-driven traffic management visualization"
                className="w-full h-auto rounded-lg"
              />
            </Card>
            <div className="mt-4 text-center">
              <p className="text-muted-foreground font-semibold text-lg tracking-wide">
                ಸಂಚಾರ - ಸನ್ನಿಹಿತಕ್ಕೊಂದು ವಿಚಾರ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;