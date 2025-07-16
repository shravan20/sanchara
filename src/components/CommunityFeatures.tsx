import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Star, Users, GitBranch, Shield, Globe } from "lucide-react";

const CommunityFeatures = () => {
  const topContributors = [
    { id: 1, name: "Priya M", reports: 156, rank: 1, badge: "Traffic Hero" },
    { id: 2, name: "Rahul K", reports: 142, rank: 2, badge: "Road Warrior" },
    { id: 3, name: "Anjali S", reports: 128, rank: 3, badge: "Community Champion" },
    { id: 4, name: "Vikram R", reports: 98, rank: 4, badge: "Data Defender" },
    { id: 5, name: "Meera T", reports: 87, rank: 5, badge: "Route Ranger" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "No tracking, no data mining. Your location data stays with you.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community Owned",
      description: "Built by Bangalore residents, for Bangalore residents. You have a voice.",
      color: "text-community"
    },
    {
      icon: GitBranch,
      title: "Open Source",
      description: "Code is public, auditable, and forkable. Complete transparency.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Open Data",
      description: "Traffic data available for research, journalism, and civic planning.",
      color: "text-community"
    }
  ];

  return (
    <section id="community" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Community Driven
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Bangaloreans building the future of traffic management together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContributors.map((contributor) => (
                  <div key={contributor.id} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">#{contributor.rank}</span>
                      <Avatar>
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{contributor.name}</p>
                      <p className="text-sm text-muted-foreground">{contributor.reports} reports</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {contributor.badge}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Button variant="community" className="w-full">
                  Join Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Why Choose Community?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <benefit.icon className={`h-6 w-6 ${benefit.color} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className="font-medium mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary">1,247</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div className="text-center p-4 bg-community/10 rounded-lg">
                    <p className="text-2xl font-bold text-community">8,432</p>
                    <p className="text-sm text-muted-foreground">Reports Today</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary">24</p>
                    <p className="text-sm text-muted-foreground">Contributors</p>
                  </div>
                  <div className="text-center p-4 bg-community/10 rounded-lg">
                    <p className="text-2xl font-bold text-community">100%</p>
                    <p className="text-sm text-muted-foreground">Open Source</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;