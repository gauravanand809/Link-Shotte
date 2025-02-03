import Login from "@/components/login";
import Signup from "@/components/signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UrlState } from "@/context";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Auth() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = UrlState();
  const longLink = searchParams.get("createNew");

  // Redirect if the user is authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    }
  }, [isAuthenticated, loading, navigate, longLink]);

  return (
    <div className="mt-8 flex flex-col items-center gap-5 bg-inherit text-white p-7 rounded-xl shadow-md">
      <h1 className="text-5xl font-extrabold text-center mb-6">
        {longLink ? "Hold up! Let's login first.." : "Authentication"}
      </h1>

      <Tabs defaultValue="login" className="w-[400px]">
        {/* Tab List */}
        <TabsList className="grid w-full grid-cols-2 gap-4 mb-6">
          <TabsTrigger
            value="login"
            className="text-lg h-auto font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="text-lg font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Signup
          </TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="login" className="bg-gray-800 rounded-xl p-4">
          <Login />
        </TabsContent>
        <TabsContent value="signup" className="bg-gray-800 rounded-xl p-4">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Auth;
