import { useState } from "react";
import { Plus, Trash } from "lucide-react";

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

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
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
  ]);

  function handleToggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        id === task.id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleAddTask() {
    setTasks((prev) => [
      ...prev,
      { id: smolid(), title: newTask, completed: false },
    ]);
    setNewTask("");
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
      <button onClick={() => setOpen((prev) => !prev)} className="w-full">
        <CardHeader>
          <CardTitle>
            <h3 className="text-left">Tasks</h3>
          </CardTitle>
        </CardHeader>
      </button>
      <CardContent className="flex-grow overflow-y-auto">
        <ul>
          {tasks.map((task) => (
            <li className="flex justify-between" key={task.id}>
              <Button
                className="rounded-xl text-left"
                variant="ghost"
                onClick={() => handleToggleTask(task.id)}
              >
                <h4>
                  <span
                    className={cn(
                      "after:bg-foreground relative font-extralight after:absolute after:top-1/2 after:-left-[5%] after:block after:h-0.5 after:w-0 after:transition-all after:duration-300 after:ease-in",
                      task.completed
                        ? "after:w-[110%]"
                        : "hover:after:w-[110%]",
                    )}
                  >
                    {task.title}
                  </span>
                </h4>
              </Button>
              <Button
                className="peer rounded-xl text-left"
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteTask(task.id)}
              >
                <Trash size={16} strokeWidth={1} />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-2 flex justify-end">
        <Input
          className="w-[90%]"
          name="newTask"
          label="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button className="p-2" onClick={handleAddTask}>
          <Plus size={32} strokeWidth={1} />
        </Button>
      </CardFooter>
    </Card>
  );
};
