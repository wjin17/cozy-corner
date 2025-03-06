import { SiDiscord, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./components/Button";

import { Timer } from "./blocks/Timer";
import { Todo } from "./blocks/Todo";
import { Play } from "lucide-react";

export const App = () => {
  return (
    <div>
      <div className="absolute top-10 left-10 flex h-[calc(100vh-5rem)] flex-col gap-8">
        <Timer />
        <Todo />
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
      </div>
      <div className="absolute right-10 bottom-10">
        <Button
          variant="primary"
          className="relative flex h-14 flex-col items-center p-3"
        >
          <div className="flex items-center gap-2">
            <Play />
            SPOTIFY GOES HERE
          </div>
          <div className="absolute bottom-2 left-4 h-1 w-3/5 bg-white" />
          <div className="absolute bottom-0.5 left-34 h-4 w-4 rounded-full bg-white" />
        </Button>
      </div>
    </div>
  );
};
