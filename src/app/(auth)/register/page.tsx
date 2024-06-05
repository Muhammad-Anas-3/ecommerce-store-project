import heroImage from "../../../../public/image.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import RegisterUserForm from "@/components/RegisterUserForm";
import { signIn } from "@/auth";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-white p-8 rounded shadow-xl sm:w-96 m-2">
        <h2 className="text-[20px] mb-4 font-semibold">Create Account</h2>
        <RegisterUserForm />
        <div className="my-2 text-center">OR</div>
        <form
          action={async () => {
            "use server";
            await signIn("google");

          }}
        >
          <Button className="w-full">Sign In With Google</Button>
        </form>
        <div className="mt-4 flex items-center">
          <p className="text-gray-600 text-center">Already have an account?</p>
          <Link
            href="/signin"
            className="sm:ml-2 text-center text-blue-500 hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
