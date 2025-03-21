
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Lander = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Automatically redirect to the home page
    navigate("/", { replace: true });
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-xl font-medium mb-2">Redirecting you to Common Desk...</h1>
        <p className="text-sm text-gray-500">If you are not redirected automatically, please click <a href="/" className="text-blue-500 hover:underline">here</a>.</p>
      </div>
    </div>
  );
};

export default Lander;
