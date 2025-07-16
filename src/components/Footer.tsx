import { Badge } from "@/components/ui/badge";
import { GitBranch, Github, Twitter, MessageSquare, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">BangaloreTraffic</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Community-driven, open-source traffic management for Bangalore. 
              Built with ❤️ by the people, for the people.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                FOSS
              </Badge>
              <Badge variant="outline" className="bg-community/10 text-community">
                P2P
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Community</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Join Discord
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contribute
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Report Issues
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Feature Requests
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Open Data
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Research Papers
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Built for Bangalore, by Bangalore
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 BangaloreTraffic Community. Open source under MIT License.
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> for better traffic management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;