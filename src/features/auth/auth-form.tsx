import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/shared/page-header";

type AuthMode = "login" | "register";

interface AuthFormProps {
  mode: AuthMode;
  action: (formData: FormData) => Promise<void>;
}

export function AuthForm({ mode, action }: AuthFormProps) {
  const isLogin = mode === "login";

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
      <div className="grid w-full max-w-4xl gap-6 lg:grid-cols-2">
        <PageHeader
          className="my-auto"
          title={isLogin ? "Secure Login" : "Create Account"}
          subtitle="Access a safety-first global care platform built for patients and clinicians."
        />
        <Card className="rounded-2xl border-border/70 bg-card/90 safety-shadow">
          <CardHeader>
            <CardTitle>{isLogin ? "Welcome back" : "Register your account"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={action} className="space-y-4">
              {!isLogin ? (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </div>
              ) : null}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@hospital.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required minLength={8} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <select
                  id="role"
                  name="role"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  defaultValue="patient"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              <Button className="w-full" type="submit">
                {isLogin ? "Login" : "Register"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
