import { AuthForm } from "@/features/auth/auth-form";
import { loginAction } from "@/app/auth/actions";

export default function LoginPage() {
  return <AuthForm mode="login" action={loginAction} />;
}
