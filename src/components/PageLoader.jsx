import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return loading ? (
    <div className="flex items-center justify-center w-full">
      <ScaleLoader
        color="#0D9488"
        height={60}
        width={6}
        radius={3}
        margin={2}
        speedMultiplier={1}
      />
    </div>
  ) : (
    children
  );
}
