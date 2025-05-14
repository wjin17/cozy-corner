import MusicPlayer from "./blocks/MusicPlayer";
import { TimeWidget } from "./blocks/TimeWidget";
import { Todo } from "./blocks/Todo";
import { Socials } from "./components/Socials";
import { Wallpaper } from "./components/Wallpaper";

export const App = () => {
  return (
    <div>
      <Wallpaper />
      <div className="absolute top-10 left-6 flex h-[calc(100vh-5rem)] w-[calc(100%-3rem)] min-w-xs flex-col gap-8 md:left-10 md:w-[calc(100%-5rem)]">
        <TimeWidget />
        <Todo />
        <Socials />
      </div>
      <MusicPlayer />
    </div>
  );
};
