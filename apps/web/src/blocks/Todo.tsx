import { useState, useRef, useEffect } from "react";
import { Plus, Trash } from "lucide-react";
import { SortableList } from "../components/SortableList";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { cn } from "../utils/cn";
import { smolid } from "../utils/smolid";
import { useForm } from "../hooks/useForm";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const ExampleTasks: Task[] = [
  {
    id: smolid(),
    title: "Eat pizza",
    completed: true,
  },
  {
    id: smolid(),
    title: "Clean room",
    completed: false,
  },
  {
    id: smolid(),
    title: "Buy groceries",
    completed: false,
  },
  {
    id: smolid(),
    title: "Walk dog",
    completed: true,
  },
];

export const Todo = () => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(ExampleTasks);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { registerField, registerForm } = useForm({
    initialValues: {
      newTask: "",
    },
    onSubmit: ({ newTask }) => {
      if (newTask.trim() !== "") {
        setTasks((prev) => [
          ...prev,
          { id: smolid(), title: newTask, completed: false },
        ]);
      }
    },
  });

  useEffect(() => {
    if (scrollRef.current && open) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [tasks, open]);

  function handleToggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        id === task.id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleDeleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <Card
      className={cn(
        "mt-auto flex w-full flex-grow flex-col overflow-y-hidden transition-all duration-500 ease-in sm:w-md",
        open ? "max-h-full" : "max-h-22",
      )}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full cursor-pointer"
      >
        <CardHeader>
          <CardTitle>
            <h3 className="text-left">Tasks</h3>
          </CardTitle>
        </CardHeader>
      </button>
      <CardContent ref={scrollRef} className="flex-grow overflow-y-auto">
        <SortableList items={[...tasks]} onItemsChange={setTasks}>
          {({ id, title, completed }) => (
            <div className="flex w-full items-center justify-between">
              <Button
                className="rounded-xl text-left"
                variant="ghost"
                onClick={() => handleToggleTask(id)}
              >
                <h4>
                  <span
                    className={cn(
                      "after:bg-foreground relative font-extralight after:absolute after:top-1/2 after:-left-[5%] after:block after:h-0.5 after:w-0 after:transition-all after:duration-300 after:ease-in",
                      completed ? "after:w-[110%]" : "hover:after:w-[110%]",
                    )}
                  >
                    {title}
                  </span>
                </h4>
              </Button>
              <Button
                className="rounded-xl text-left"
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteTask(id)}
              >
                <Trash size={16} strokeWidth={1} />
              </Button>
            </div>
          )}
        </SortableList>
      </CardContent>
      <form {...registerForm()}>
        <CardFooter className="mt-2 flex justify-end">
          <Input
            className="w-[90%]"
            label="New task"
            {...registerField("newTask")}
          />
          <Button className="p-2">
            <Plus size={32} strokeWidth={1} />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
