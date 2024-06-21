import { ThemeToggle } from "@/components/theme-toggle";
import TodosServer from "./_components/todosServer";

export default async function Home() {
  return (
    <main className="relative w-full bg-background p-10">
      <TodosServer />
      <div className="fixed right-4 top-4">
        <ThemeToggle />
      </div>
    </main>
  );
}
