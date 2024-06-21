"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import TodosClient from "../_components/todosClient";

export default function Home() {
  return (
    <main className="relative w-full bg-background p-10">
      <TodosClient />
      <div className="fixed right-4 top-4">
        <ThemeToggle />
      </div>
    </main>
  );
}
