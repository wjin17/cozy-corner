import { type ReactNode, useState } from "react";

import { cn } from "../utils/cn";
import { Lenny } from "./Lenny";

type SortableListProps<T extends { id: string }> = {
  gripper?: ReactNode;
  items: T[];
  onItemsChange: (items: T[]) => void;
  children: (item: T) => React.ReactNode;
  itemClassName?: string;
  listClassName?: string;
};

export const SortableList = <T extends { id: string }>({
  items,
  children,
  gripper,
  itemClassName,
  listClassName,
}: SortableListProps<T>) => {
  //   const [interalList, setInteralList] = useState<T[]>(items);
  const [isDragging, setIsDragging] = useState<string | null>(null);

  //   function handleDragStart(id: string) {
  //     return (_e: DragEvent) => {
  //       setIsDragging(id);
  //     };
  //   }

  return (
    <ul className={cn("list-none", listClassName)}>
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className={cn(
              "flex items-center justify-start px-3",
              itemClassName,
            )}
          >
            <button
              type="button"
              onClick={() => setIsDragging((prev) => (prev ? null : item.id))}
              className="my-auto cursor-grab active:cursor-grabbing"
            >
              {gripper}
            </button>
            {children(item)}
          </li>
        );
      })}
      {isDragging && <Lenny />}
    </ul>
  );
};
