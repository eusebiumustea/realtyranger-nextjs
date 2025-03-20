"use client";
import { signIn } from "@/helpers/auth";
import { buttonTheme } from "@/theme/button";
import { Input } from "@/ui-components/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const route = useRouter();
  return (
    <div className="sm:min-w-80 flex flex-col justify-center gap-y-4">
      {errors.root && (
        <h1 className="font-ptsans text-sm text-red-700">
          {errors.root.message}
        </h1>
      )}
      <Input
        {...register("email", {
          required: "Entering an email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        placeholder="Email"
      />
      <Input
        {...register("password", {
          required: "Entering the password is required",
          minLength: {
            value: 8,
            message: "Password must contain at least 8 characters",
          },
        })}
        placeholder="Password"
      />
      <button
        className="self-center hover:text-slate-800 transition-colors text-sm"
        onClick={() => route.replace("/authentification/register")}
      >
        Don't have an account?
      </button>
      <button
        onClick={handleSubmit(({ email, password }) => signIn(email, password))}
        className={`${buttonTheme({ variant: "primary" })}`}
      >
        Sign In
      </button>
    </div>
  );
}
