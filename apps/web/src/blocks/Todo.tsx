import { useState } from "react";
import { Plus } from "lucide-react";
import { discord } from "simple-icons";

import { cn } from "../utils/cn";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/Card";
import { Button } from "../components/Button";

export const Todo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Card
      className={cn(
        "mt-auto flex w-md flex-grow flex-col overflow-y-hidden transition-all duration-500 ease-in",
        open ? "max-h-full" : "max-h-20",
      )}
    >
      <button onClick={() => setOpen((prev) => !prev)} className="w-full">
        <CardHeader>
          <CardTitle>
            <h3 className="text-left">Tasks</h3>
          </CardTitle>
        </CardHeader>
      </button>
      <CardContent className="flex-grow">
        <h4>Eat pizza</h4>
        <h4>Clean room</h4>
        <h4>Buy groceries</h4>
        <h4>Walk dog</h4>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="p-2">
          <Plus size={32} />
        </Button>
      </CardFooter>
    </Card>
  );
};
