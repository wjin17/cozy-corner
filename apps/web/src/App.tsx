import gorlDog from "./assets/gorl_dog.jpg";
import MusicPlayer from "./blocks/MusicPlayer";
import { TimeWidget } from "./blocks/TimeWidget";
import { Todo } from "./blocks/Todo";
import { Socials } from "./components/Socials";

export const App = () => {
  console.log("gorlDog", gorlDog);
  return (
    <div>
      <img
        src={gorlDog}
        alt="Gorl Dog"
        className="absolute top-[40rem] right-[4rem] h-[44rem] -translate-y-4/5 rounded-xl"
      />
      <div className="absolute top-10 left-6 flex h-[calc(100vh-5rem)] w-[calc(100%-3rem)] min-w-xs flex-col gap-8 md:left-10 md:w-[calc(100%-5rem)]">
        <TimeWidget />
        <Todo />
        <Socials />
      </div>
      <MusicPlayer />
    </div>
  );
};
