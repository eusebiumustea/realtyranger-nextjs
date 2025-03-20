"use client";

import { signUp } from "@/helpers/auth";
import { buttonTheme } from "@/theme/button";
import { Input } from "@/ui-components/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const route = useRouter();
  return (
    <div className="w-full flex flex-col justify-center gap-y-4">
      {errors.root?.message && (
        <h1 className="font-ptsans text-sm text-red-700">
          {errors.root.message} err
        </h1>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          {...register("firstName", {
            required: "First name is required",
          })}
          multiple
          placeholder="First Name"
        />
        <Input
          {...register("lastName", {
            required: "Last name is required",
          })}
          placeholder="Last Name"
        />
      </div>
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
      <Input
        {...register("confirmPassword", {
          validate: (value) => {
            if (value !== getValues("password")) {
              return "Password doesn't match to confirm password";
            }
            return true;
          },
        })}
        placeholder="Confirm Password"
      />
      <button
        className="self-center hover:text-slate-800 transition-colors text-sm"
        onClick={() => route.replace("/authentification/login")}
      >
        Already have an account?
      </button>
      <button
        onClick={handleSubmit(({ email, firstName, lastName, password }) =>
          signUp({
            email,
            firstName,
            lastName,
            password,
          })
        )}
        className={`${buttonTheme({ variant: "primary" })}`}
      >
        Sign Up
      </button>
    </div>
  );
}
