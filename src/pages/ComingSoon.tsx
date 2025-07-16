import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  GitBranch, 
  MessageSquare, 
  FileText, 
  Code, 
  Database, 
  BookOpen,
  Bug,
  Lightbulb
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ComingSoon = () => {
  const { section } = useParams<{ section: string }>();
  
  const sectionConfig = {
    contribute: {
      title: "Contribute",
      icon: <GitBranch className="h-12 w-12" />,
      description: "Help us build the future of traffic management",
      features: [
        "Code contributions and bug fixes",
        "Documentation improvements",
        "Community moderation",
        "Testing and quality assurance",
        "Design and UX improvements"
      ],
      timeline: "Q3 2025",
      color: "bg-primary/10 text-primary"
    },
    "report-issues": {
      title: "Report Issues",
      icon: <Bug className="h-12 w-12" />,
      description: "Help us improve by reporting bugs and issues",
      features: [
        "Bug tracking system",
        "Issue categorization",
        "Priority management",
        "Community voting",
        "Status tracking"
      ],
      timeline: "Q3 2025",
      color: "bg-destructive/10 text-destructive"
    },
    "feature-requests": {
      title: "Feature Requests",
      icon: <Lightbulb className="h-12 w-12" />,
      description: "Share your ideas for new features",
      features: [
        "Feature request submission",
        "Community voting system",
        "Development roadmap",
        "Implementation timeline",
        "Feedback collection"
      ],
      timeline: "Q3 2025",
      color: "bg-community/10 text-community"
    },
    documentation: {
      title: "Documentation",
      icon: <FileText className="h-12 w-12" />,
      description: "Comprehensive guides and documentation",
      features: [
        "Installation guides",
        "API documentation",
        "User tutorials",
        "Developer guides",
        "Best practices"
      ],
      timeline: "Q3 2025",
      color: "bg-blue-500/10 text-blue-600"
    },
    "api-reference": {
      title: "API Reference",
      icon: <Code className="h-12 w-12" />,
      description: "Complete API documentation and examples",
      features: [
        "REST API endpoints",
        "GraphQL schema",
        "Authentication methods",
        "Rate limiting",
        "SDKs and libraries"
      ],
      timeline: "Q3 2025",
      color: "bg-purple-500/10 text-purple-600"
    },
    "open-data": {
      title: "Open Data",
      icon: <Database className="h-12 w-12" />,
      description: "Access public traffic data and analytics",
      features: [
        "Real-time traffic data",
        "Historical analytics",
        "Data export tools",
        "Visualization dashboards",
        "Research datasets"
      ],
      timeline: "Q4 2025",
      color: "bg-green-500/10 text-green-600"
    },
    "research-papers": {
      title: "Research Papers",
      icon: <BookOpen className="h-12 w-12" />,
      description: "Academic research and publications",
      features: [
        "Traffic analysis studies",
        "Algorithm research",
        "Community impact reports",
        "Technical whitepapers",
        "Collaborative research"
      ],
      timeline: "Q4 2025",
      color: "bg-orange-500/10 text-orange-600"
    }
  };

  const currentSection = sectionConfig[section as keyof typeof sectionConfig] || sectionConfig.contribute;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className={`inline-flex p-4 rounded-2xl ${currentSection.color} mb-4`}>
                {currentSection.icon}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {currentSection.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {currentSection.description}
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="flex justify-center">
              <Badge variant="outline" className="bg-primary/10 text-primary px-6 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Coming Soon - {currentSection.timeline}
              </Badge>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {currentSection.features.map((feature, index) => (
                <Card key={index} className="text-left hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Community Section */}
            <Card className="mt-12 bg-gradient-to-r from-primary/5 to-community/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Stay Connected</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our community to get updates on development progress, participate in discussions, 
                  and be the first to know when this feature becomes available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="outline" className="bg-primary/10 hover:bg-primary/20">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Join Discord
                  </Button>
                  <Button variant="outline" className="bg-community/10 hover:bg-community/20">
                    <GitBranch className="h-4 w-4 mr-2" />
                    Follow on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Development Timeline</h3>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Expected launch: {currentSection.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
