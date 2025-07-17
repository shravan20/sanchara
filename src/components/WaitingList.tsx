import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Mail, User, UserCheck, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import nocodbService, { WaitingListEntry } from "@/lib/nocodb";

const WaitingList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roles: [] as string[] // Changed to array for multi-select
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim()) {
        setError("Please fill in all required fields.");
        setIsLoading(false);
        return;
      }

      // Validate that at least one role is selected
      if (formData.roles.length === 0) {
        setError("Please select at least one role.");
        setIsLoading(false);
        return;
      }

      // Check if NocoDB is configured
      if (!import.meta.env.VITE_NOCODB_API_TOKEN) {
        // For development/demo purposes, just show success without actually saving
        console.log("Form submitted (demo mode):", formData);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", roles: [] });
        setIsLoading(false);
        return;
      }

      // Check if email already exists
      const emailExists = await nocodbService.checkEmailExists(formData.email);
      if (emailExists) {
        setError("This email is already registered in our waiting list.");
        setIsLoading(false);
        return;
      }

      // Submit to NocoDB - convert roles array to comma-separated string
      const response = await nocodbService.submitWaitingListEntry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        role: formData.roles.join(","), // Convert array to comma-separated string
      });

      if (response.success) {
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: "", email: "", roles: [] });
      } else {
        setError(response.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleChange = (role: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      roles: checked 
        ? [...prev.roles, role]
        : prev.roles.filter(r => r !== role)
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-muted-foreground">
                We'll notify you when we're ready to launch.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="max-w-md mx-auto">
          <Card className="shadow-elevated">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join the Waiting List</CardTitle>
              <p className="text-muted-foreground">
                Be the first to know when we launch
              </p>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="pl-10"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="pl-10"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>I want to join as a: (select all that apply)</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="user"
                        checked={formData.roles.includes("user")}
                        onCheckedChange={(checked) => handleRoleChange("user", checked as boolean)}
                        disabled={isLoading}
                      />
                      <Label htmlFor="user" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        User
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="contributor"
                        checked={formData.roles.includes("contributor")}
                        onCheckedChange={(checked) => handleRoleChange("contributor", checked as boolean)}
                        disabled={isLoading}
                      />
                      <Label htmlFor="contributor" className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4" />
                        Contributor
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waiting List"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;