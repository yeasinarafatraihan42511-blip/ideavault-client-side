
"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function LoginPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Login successful");
      form.reset(); 
      router.push("/");
    }
  };

  const onGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <Card className="w-[380px] p-8 shadow-lg rounded-xl">

        <h1 className="text-2xl font-bold text-center mb-6">
          Login to Idea Vault
        </h1>

        <Form autoComplete="off" className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter password" />
          </TextField>
          <p className="text-sm text-muted-foreground">
            Forgot your password?{" "}
            <Link href="/forgot-password" className="font-medium underline">
              Reset it
            </Link>
          </p>

          <Button type="submit" className="bg-blue-600 text-white">
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-400 text-sm">OR</div>

        <Button
          onClick={onGoogleSignIn}
          variant="bordered"
          className="w-full btn bg-blue-600 text-white hover:bg-blue-700" 
        >
          Continue with Google
        </Button>

        {/* Link */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="font-medium underline">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}