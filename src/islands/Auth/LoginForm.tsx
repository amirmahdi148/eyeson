import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
} from "lucide-react";

import { useAsyncOperation } from "@/utils/useAsyncOperation";
import { loginService } from "@/services/loginService.ts";
import { logger } from "@/utils/logger";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  logger.info("LoginForm mounted");

  const loginMutation = useAsyncOperation({
    onSuccess: (data: any) => {
      logger.info("Login successful", { hasToken: !data?.accessToken });
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        setSuccessMessage("Login successful! Redirecting...");
        setErrorMessage("");

        setTimeout(() => {
          logger.normal("Redirecting to /admin");
          window.location.href = "/admin";
        }, 500);
      } else {
        logger.warn("Login succeeded but no access token received");
        setErrorMessage("Login failed: No access token received");
      }
    },
    onError: (error: any) => {
      const errorMsg = error?.response?.data?.message ||
                      error?.message ||
                      "Login failed. Please try again.";
      logger.warn("Login failed", { errorMsg });
      setErrorMessage(errorMsg);
      setSuccessMessage("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    logger.info("Form submitted", { username: username.trim(), email: email.trim() });
    setErrorMessage("");
    setSuccessMessage("");

    if (!username.trim() || !email.trim() || !password.trim()) {
      logger.warn("Validation failed: missing fields");
      setErrorMessage("Please fill in all fields");
      return;
    }

    logger.normal("Login mutation started");
    loginMutation.mutate(() =>
        loginService.login({
            email,
            password,
        })
    ).then(r => logger.verbose("Login mutation resolved", r));
  };

  return (
      <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#00E6D7] to-[#12ACB5] rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#12ACB5] to-[#00E6D7] rounded-full blur-3xl opacity-20 animate-pulse" />

        {/* Container */}
        <div className="relative z-10 w-full max-w-md px-6 animate-fade-in">
          {/* Header */}
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00E6D7] via-white to-[#12ACB5]">
              Welcome Back
            </h1>

            <p className="text-white/70 text-sm">
              Enter your credentials
            </p>
          </div>

          {/* Form */}
          <form
              onSubmit={handleSubmit}
              className="backdrop-blur-2xl bg-white/8 border border-white/20 rounded-2xl p-8 shadow-2xl animate-scale-up"
          >
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg animate-fade-in">
                <p className="text-red-300 text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-fade-in">
                <p className="text-green-300 text-sm">{successMessage}</p>
              </div>
            )}

            {/* Username */}
            <div className={"mb-6 transition-transform duration-200 " + (usernameFocus ? "scale-[1.02]" : "scale-100")}>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Username
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <User
                      size={18}
                      className={
                        usernameFocus
                            ? "text-[#00E6D7]"
                            : "text-white/40"
                      }
                  />
                </div>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                        logger.verbose("Username changed", { value: e.target.value });
                        setUsername(e.target.value);
                    }}
                    onFocus={() => {
                        logger.verbose("Username focused");
                        setUsernameFocus(true);
                    }}
                    onBlur={() => {
                        logger.verbose("Username blurred");
                        setUsernameFocus(false);
                    }}
                    placeholder="your username"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00E6D7]"
                />
              </div>
            </div>

            {/* Email */}
            <div className={"mb-6 transition-transform duration-200 " + (emailFocus ? "scale-[1.02]" : "scale-100")}>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Email
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Mail
                      size={18}
                      className={
                        emailFocus
                            ? "text-[#00E6D7]"
                            : "text-white/40"
                      }
                  />
                </div>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        logger.verbose("Email changed", { value: e.target.value });
                        setEmail(e.target.value);
                    }}
                    onFocus={() => {
                        logger.verbose("Email focused");
                        setEmailFocus(true);
                    }}
                    onBlur={() => {
                        logger.verbose("Email blurred");
                        setEmailFocus(false);
                    }}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00E6D7]"
                />
              </div>
            </div>

            {/* Password */}
            <div className={"mb-6 transition-transform duration-200 " + (passwordFocus ? "scale-[1.02]" : "scale-100")}>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Lock
                      size={18}
                      className={
                        passwordFocus
                            ? "text-[#00E6D7]"
                            : "text-white/40"
                      }
                  />
                </div>

                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                        logger.verbose("Password changed");
                        setPassword(e.target.value);
                    }}
                    onFocus={() => {
                        logger.verbose("Password focused");
                        setPasswordFocus(true);
                    }}
                    onBlur={() => {
                        logger.verbose("Password blurred");
                        setPasswordFocus(false);
                    }}
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00E6D7]"
                />

                <button
                    type="button"
                    onClick={() => {
                        const next = !showPassword;
                        logger.verbose("Password visibility toggled", { show: next });
                        setShowPassword(next);
                    }}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-white/40 hover:text-[#00E6D7] cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loginMutation.isPending}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black font-semibold rounded-xl flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {loginMutation.isPending ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
              )}
            </button>
          </form>
        </div>
      </div>
  );
}
