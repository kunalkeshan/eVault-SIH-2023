import Link from "next/link";
import React, { useState } from "react";
import { loginUser } from "@/lib/server";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { parse } from "cookie";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();
  const router = useRouter();

  const handleUpdateInput =
    (prop: keyof typeof input) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput((prev) => {
        return {
          ...prev,
          [prop]: e.target.value,
        };
      });
    };

  const handleLoginUser = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await loginUser(input);
      toast({
        title: "Success",
        description: "Redirecting you to dashboard now.",
      });
      router.replace("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to login, try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Great to Have you Back with us.
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Secure Legal Records Management with Blockchain Technology -
              Scalable and Integrated Solution
            </p>

            <form
              action="#"
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={handleLoginUser}
            >
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="john@gamil.com"
                  className="mt-1 w-full rounded-lg border-gray-500 bg-gray-100 text-sm text-gray-700 shadow-sm p-2"
                  required
                  value={input.email}
                  onChange={handleUpdateInput("email")}
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-lg border-gray-500 bg-gray-100 text-sm text-gray-700 shadow-sm p-2"
                  required
                  value={input.password}
                  onChange={handleUpdateInput("password")}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Login
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Dont have an account?
                  <Link href="/auth/signin" className="text-gray-700 underline">
                    Sign In
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ req }) => {
  const cookies = parse(req.headers.cookie ?? "");
  if (
    cookies["legal-ledger-access-token"] &&
    cookies["legal-ledger-refresh-token"]
  ) {
    return {
      props: {},
      redirect: {
        destination: "/dashboard",
        permanent: true,
      },
    };
  }
  return { props: {} };
};
