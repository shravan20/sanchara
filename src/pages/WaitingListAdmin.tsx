import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, Mail, Calendar, RefreshCw } from "lucide-react";
import nocodbService, { WaitingListEntry } from "@/lib/nocodb";

const WaitingListAdmin = () => {
    const [entries, setEntries] = useState<WaitingListEntry[]>([]);
    const [stats, setStats] = useState({ total: 0, users: 0, contributors: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const [entriesResponse, statsResponse] = await Promise.all([
                nocodbService.getWaitingListEntries(),
                nocodbService.getWaitingListStats()
            ]);

            if (entriesResponse.success) {
                setEntries(entriesResponse.data);
            } else {
                setError(entriesResponse.message || "Failed to fetch entries");
            }

            if (statsResponse.success) {
                setStats(statsResponse.data);
            }
        } catch (err) {
            setError("An error occurred while fetching data");
            console.error("Admin fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="container py-12">
                <div className="flex items-center justify-center min-h-[400px]">
                    <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-12">
                <Card>
                    <CardContent className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-destructive mb-4">Error</h2>
                        <p className="text-muted-foreground mb-4">{error}</p>
                        <Button onClick={fetchData}>
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Try Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Waiting List Admin</h1>
                        <p className="text-muted-foreground">Manage and view waiting list entries</p>
                    </div>
                    <Button onClick={fetchData} variant="outline">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Refresh
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                                <Users className="h-8 w-8 text-primary" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Total Signups</p>
                                    <p className="text-2xl font-bold">{stats.total}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                                <Users className="h-8 w-8 text-blue-500" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Users</p>
                                    <p className="text-2xl font-bold">{stats.users}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                                <UserCheck className="h-8 w-8 text-community" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Contributors</p>
                                    <p className="text-2xl font-bold">{stats.contributors}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Entries Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>All Entries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {entries.length === 0 ? (
                            <div className="text-center py-8">
                                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground">No entries yet</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {entries.map((entry, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span className="font-medium">{entry.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm text-muted-foreground">{entry.email}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                {entry.role.split(',').map((role, roleIndex) => (
                                                    <Badge key={roleIndex} variant={role.trim() === 'contributor' ? 'default' : 'secondary'}>
                                                        {role.trim() === 'contributor' ? (
                                                            <UserCheck className="h-3 w-3 mr-1" />
                                                        ) : (
                                                            <Users className="h-3 w-3 mr-1" />
                                                        )}
                                                        {role.trim()}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {entry.created_at && (
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <Calendar className="h-3 w-3" />
                                                    {formatDate(entry.created_at)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default WaitingListAdmin;
