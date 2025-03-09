import { useEffect, useState } from "react";

export const useKeyPress = (
  key: string,
  cb: (event: KeyboardEvent) => void,
) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        setIsPressed(true);
        cb(event);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === key) {
        setIsPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key, cb]);

  return isPressed;
};
