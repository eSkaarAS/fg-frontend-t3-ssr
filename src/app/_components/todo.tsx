"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { type Todo } from "@prisma/client";
import { Trash2 } from "lucide-react";
import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";

export default function TodoComponent({ todo }: { todo: Todo }) {
  const utils = api.useUtils();
  const { mutate: deleteTodo } = api.todo.delete.useMutation({
    onSuccess: () => {
      void utils.todo.findAll.invalidate();
    },
  });
  const { mutate: toggleTodo } = api.todo.toggle.useMutation({
    onSuccess: () => {
      void utils.todo.findAll.invalidate();
    },
  });

  return (
    <div className="flex w-full items-center gap-2">
      <Checkbox
        id={todo.id}
        defaultChecked={todo.isCompleted}
        onCheckedChange={(e: boolean | string) => {
          if (typeof e === "boolean")
            toggleTodo({
              id: todo.id,
              completed: e,
            });
        }}
      />
      <label
        htmlFor={todo.id}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${todo.isCompleted ? "line-through opacity-50" : ""}`}
      >
        {todo.description}
      </label>
      <Button
        variant="ghost"
        size="icon"
        className="ml-auto"
        onClick={() => deleteTodo({ id: todo.id })}
      >
        <Trash2 className="text-red-500" />
      </Button>
    </div>
  );
}
