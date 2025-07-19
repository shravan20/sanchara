import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Users, Shield, Menu } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import TypeWriter from "./TypeWriter";
import { useWaitingListCount } from "@/hooks/useWaitingListCount";

const Header = () => {
  const { count, isLoading } = useWaitingListCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-primary" />
            <TypeWriter className="text-xl font-bold text-primary" typingSpeed={100} deletingSpeed={50} pauseDuration={1500} />
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            FOSS
          </Badge>
        </div>
        

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>
              {isLoading ? (
                <span className="animate-pulse">Loading...</span>
              ) : (
                <>
                  <AnimatedCounter targetNumber={count} duration={2000} /> active
                </>
              )}
            </span>
          </div>
          <Button variant="community" size="sm" asChild>
            <a href="https://discord.gg/VYE9CNtcp5" target="_blank" rel="noopener noreferrer">
              Join Community
            </a>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;