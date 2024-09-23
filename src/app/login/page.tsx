"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "/src/firebaseConfig"; 

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
}

const LoginPage = () => {
  const router = useRouter();
  const [mode, setMode] = useState(MODE.LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const formTitle = 
    mode === MODE.LOGIN
      ? "Log in"
      : mode === MODE.REGISTER
      ? "Register"
      : "Reset Your Password";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
      ? "Register"
      : "Reset";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === MODE.LOGIN) {
        // Log in user
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Logged in successfully!");
        router.push("/");
      } else if (mode === MODE.REGISTER) {
        // Register user
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Account created successfully!");
        router.push("/");
      } else if (mode === MODE.RESET_PASSWORD) {
        // Send password reset email
        await sendPasswordResetEmail(auth, email);
        setMessage("Password reset email sent!");
      }
    } catch (error: any) {
      setError(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            className="ring-2 ring-gray-300 rounded-md p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {mode !== MODE.RESET_PASSWORD && (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="ring-2 ring-gray-300 rounded-md p-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        )}

        {mode === MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.RESET_PASSWORD)}>
            Forgot Password?
          </div>
        )}

        <button
          className="bg-accent text-white p-2 rounded-md disabled:bg-blue-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>

        {error && <div className="text-red-600">{error}</div>}
        {message && <div className="text-green-600">{message}</div>}

        {mode === MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.REGISTER)}>
            {"Don't"} have an account? Sign up here.
          </div>
        )}
        
        {mode === MODE.REGISTER && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
            Already have an account? Log in here.
          </div>
        )}

        {mode === MODE.RESET_PASSWORD && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
            Go back to Login
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
