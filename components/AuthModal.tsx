
import React, { useState, useEffect } from "react";
import { X, Mail, Lock, Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { supabase } from "../supabaseClient";
import Button from "./Button";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setError(null);
      setMessage(null);
      setEmail("");
      setPassword("");
      setShake(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const trimmedEmail = email.trim();

    try {
      if (isLogin) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password,
        });
        if (signInError) throw signInError;
        onClose();
      } else {
        const { error: signUpError, data } = await supabase.auth.signUp({
          email: trimmedEmail,
          password,
          options: {
            emailRedirectTo: window.location.origin,
          },
        });

        if (signUpError) throw signUpError;

        if (data.user && data.session) {
           onClose();
        } else {
           setMessage(
            "Account created successfully! Please check your email to verify your account."
           );
           setIsLogin(true);
        }
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      triggerShake();
      
      const errMsg = err?.message || "";
      if (errMsg.includes("Failed to fetch")) {
        setError("Network error. Please check your connection or project status.");
      } else if (errMsg.includes("Invalid login credentials")) {
        setError("Invalid email or password. If you don't have an account, please sign up.");
      } else if (errMsg.includes("Email not confirmed")) {
        setError("Please verify your email address before logging in.");
      } else {
        setError(errMsg || "An error occurred during authentication.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setMessage(null);
    try {
      const { error: googleError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin },
      });
      if (googleError) throw googleError;
    } catch (err: any) {
      console.error("Google OAuth error:", err);
      triggerShake();
      setError(err?.message || "Failed to sign in with Google");
    }
  };

  const handleForgotPassword = () => {
    alert("Password reset functionality is being implemented. Please contact support.");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div 
        className={`relative w-full max-w-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          shake ? 'animate-shake' : 'animate-fade-in'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-gray-50 border rounded-lg py-3 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                    error ? 'border-red-500/50 dark:border-red-500/30' : 'border-gray-300 dark:bg-black/50 dark:border-white/10'
                  }`}
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                  Password
                </label>
                {isLogin && (
                  <button 
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-[11px] text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase tracking-tight"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-gray-50 border rounded-lg py-3 pl-10 pr-12 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                    error ? 'border-red-500/50 dark:border-red-500/30' : 'border-gray-300 dark:bg-black/50 dark:border-white/10'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-3 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20 animate-fade-in">
                <AlertCircle size={18} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {message && (
              <div className="text-green-700 dark:text-green-300 text-sm text-center bg-green-50 dark:bg-green-900/10 py-3 rounded-lg border border-green-100 dark:border-green-900/20">
                {message}
              </div>
            )}

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={16} /> Processing
                </span>
              ) : isLogin ? (
                "Login"
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-[#1a1a1a] text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white py-2 rounded-md transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"/>
                <path fill="currentColor" d="M12 4.81c1.6 0 3.04.55 4.16 1.62l3.1-3.1C17.45 1.46 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
          </div>

          <div className="mt-8 text-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setMessage(null);
                setShowPassword(false);
              }}
              className="ml-2 text-blue-600 dark:text-white hover:underline font-medium"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-8px); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
