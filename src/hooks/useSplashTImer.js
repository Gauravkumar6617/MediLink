import { useEffect, useState } from 'react';

export default function useSplashTimer(duration = 3000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timeout); // ✅ cleanup
  }, [duration]);

  return isLoading;
}
