import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Clock, MapPin, Users, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Analytics = () => {
  const hourlyData = [
    { hour: '06:00', reports: 12, severity: 2.1 },
    { hour: '07:00', reports: 45, severity: 3.8 },
    { hour: '08:00', reports: 89, severity: 4.2 },
    { hour: '09:00', reports: 156, severity: 4.8 },
    { hour: '10:00', reports: 78, severity: 3.2 },
    { hour: '11:00', reports: 34, severity: 2.4 },
    { hour: '12:00', reports: 56, severity: 3.1 },
    { hour: '13:00', reports: 67, severity: 3.4 },
    { hour: '14:00', reports: 45, severity: 2.8 },
    { hour: '15:00', reports: 23, severity: 2.0 },
    { hour: '16:00', reports: 34, severity: 2.5 },
    { hour: '17:00', reports: 78, severity: 3.9 },
    { hour: '18:00', reports: 134, severity: 4.5 },
    { hour: '19:00', reports: 167, severity: 4.9 },
    { hour: '20:00', reports: 98, severity: 3.8 },
    { hour: '21:00', reports: 45, severity: 2.9 },
    { hour: '22:00', reports: 23, severity: 2.1 },
    { hour: '23:00', reports: 12, severity: 1.8 },
  ];

  const hotspots = [
    { location: "Silk Board Junction", reports: 234, avgDelay: "12 min" },
    { location: "Marathahalli Bridge", reports: 189, avgDelay: "8 min" },
    { location: "Koramangala 5th Block", reports: 156, avgDelay: "6 min" },
    { location: "Hebbal Flyover", reports: 134, avgDelay: "9 min" },
    { location: "Electronic City Toll", reports: 123, avgDelay: "7 min" },
  ];

  return (
    <section id="analytics" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Open Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent traffic data for researchers, journalists, and civic planners. No black boxes, no hidden algorithms.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline">
              <Download className="h-4 w-4" />
              Export Data
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4" />
              Share Report
            </Button>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Active Users</p>
                </div>
                <p className="text-3xl font-bold text-primary mt-2">1,247</p>
                <p className="text-sm text-muted-foreground">+12% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-community" />
                  <p className="text-sm font-medium">Reports Today</p>
                </div>
                <p className="text-3xl font-bold text-community mt-2">8,432</p>
                <p className="text-sm text-muted-foreground">+8% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Avg Response</p>
                </div>
                <p className="text-3xl font-bold text-primary mt-2">2.3m</p>
                <p className="text-sm text-muted-foreground">-15% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-community" />
                  <p className="text-sm font-medium">Hotspots</p>
                </div>
                <p className="text-3xl font-bold text-community mt-2">23</p>
                <p className="text-sm text-muted-foreground">Active right now</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Hourly Traffic Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="reports" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Traffic Severity Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="severity" stroke="hsl(var(--community))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Traffic Hotspots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {hotspots.map((spot, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        #{index + 1}
                      </Badge>
                      <div>
                        <p className="font-medium">{spot.location}</p>
                        <p className="text-sm text-muted-foreground">{spot.reports} reports today</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-community">{spot.avgDelay}</p>
                      <p className="text-sm text-muted-foreground">avg delay</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Analytics;