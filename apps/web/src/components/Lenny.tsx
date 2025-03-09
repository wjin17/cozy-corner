import { useEffect, useState } from "react";

import { useMouse } from "../hooks/useMouse";

export const Lenny = () => {
  const { x, y } = useMouse();

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (x > (window.innerWidth / 4) * 3)
      setOffsetX(-260);
    if (x < window.innerWidth / 4)
      setOffsetX(30);
    if (y > (window.innerHeight / 4) * 3)
      setOffsetY(-100);
    if (y < window.innerHeight / 4)
      setOffsetY(40);
  }, [x, y]);

  return (
    <div
      className="fixed rounded-xl bg-white px-4 py-2"
      style={{
        left: x + offsetX,
        top: y + offsetY,
      }}
    >
      <p>Sike I haven't made this yet</p>
      <p>( ͡° ͜ʖ ͡°)</p>
    </div>
  );
};
