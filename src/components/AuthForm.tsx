
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast({
            title: "Login successful",
            description: "Welcome back!",
          });
          navigate('/admin');
        }
      } else {
        // Only allow admin email to sign up
        if (email !== 'romeoantwi15@gmail.com') {
          toast({
            title: "Access Denied",
            description: "Account creation is restricted to authorized users only.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`
          }
        });

        if (error) throw error;

        toast({
          title: "Account created",
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Authentication failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-slate-900/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">
            {isLogin ? "Admin Login" : "Create Account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-600 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-800 border-slate-600 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {loading ? "Processing..." : (isLogin ? "Login" : "Sign Up")}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:underline"
            >
              {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
