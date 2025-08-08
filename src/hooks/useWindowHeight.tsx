import { useState, useEffect } from "react";

export const useWindowHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Solo se ejecuta en cliente
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    updateHeight(); // Valor inicial
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return height;
}