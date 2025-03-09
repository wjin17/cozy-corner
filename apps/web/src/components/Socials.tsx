import { SiDiscord, SiInstagram, SiX } from "@icons-pack/react-simple-icons";

import { Button } from "./Button";

export const Socials = () => {
  return (
    <div className="flex gap-4 text-white">
      <a href="#">
        <Button variant="ghost">
          <SiDiscord size={24} />
        </Button>
      </a>
      <a href="#">
        <Button variant="ghost">
          <SiInstagram size={24} />
        </Button>
      </a>
      <a href="#">
        <Button variant="ghost">
          <SiX size={24} />
        </Button>
      </a>
    </div>
  );
};
