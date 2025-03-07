import { SiDiscord, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./components/Button";
import MusicPlayer from "./blocks/MusicPlayer";

import { Timer } from "./blocks/Timer";
import { Todo } from "./blocks/Todo";

export const App = () => {
  return (
    <div>
      <div className="absolute top-10 left-6 flex h-[calc(100vh-5rem)] w-[calc(100%-3rem)] min-w-xs flex-col gap-8 md:left-10 md:w-[calc(100%-5rem)]">
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
      <MusicPlayer />
    </div>
  );
};
