import { AuthForm } from "@/features/auth/auth-form";
import { registerAction } from "@/app/auth/actions";

export default function RegisterPage() {
  return <AuthForm mode="register" action={registerAction} />;
}
