import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/products'); 
    }, 3000); // 3000 ms 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <img src="/src/assets/logo.png" alt="" />
      <h1>BEAUTYCOM</h1>
    </div>
  );
}
