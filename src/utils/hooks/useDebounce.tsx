import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number) => {
  const [deBounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(intervalId);
    };
  }, [value, delay]);

  return deBounceValue;
};
export default useDebounce;
