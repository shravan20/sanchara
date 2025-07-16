import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, AlertTriangle, Users, Clock, Navigation } from "lucide-react";

const TrafficMap = () => {
  const incidents = [
    { id: 1, type: "jam", location: "Silk Board Junction", severity: "heavy", time: "2m ago", reports: 12 },
    { id: 2, type: "accident", location: "Marathahalli Bridge", severity: "moderate", time: "5m ago", reports: 8 },
    { id: 3, type: "construction", location: "Koramangala 5th Block", severity: "light", time: "1h ago", reports: 3 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "heavy": return "bg-traffic-jam";
      case "moderate": return "bg-traffic-heavy";
      case "light": return "bg-traffic-moderate";
      default: return "bg-traffic-free";
    }
  };

  return (
    <section id="map" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Live Traffic Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time traffic data powered by our community. No corporate surveillance, just peer-to-peer collaboration.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="h-[600px] relative overflow-hidden shadow-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-community/5" />
              <CardContent className="p-0 h-full relative">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 text-primary mx-auto animate-bounce-subtle" />
                    <h3 className="text-2xl font-bold">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Map integration with real traffic data visualization
                    </p>
                    <div className="flex justify-center gap-2 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-traffic-free rounded-full" />
                        <span className="text-sm">Free Flow</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-traffic-moderate rounded-full" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-traffic-heavy rounded-full" />
                        <span className="text-sm">Heavy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-traffic-jam rounded-full" />
                        <span className="text-sm">Jam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Live Incidents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${getSeverityColor(incident.severity)} mt-1`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{incident.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {incident.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {incident.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {incident.reports} community reports
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="report" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4" />
                  Report Incident
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4" />
                  Share Location
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficMap;