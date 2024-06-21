import { api } from "@/trpc/server";
import TodoComponent from "./todo";
import CreateTodo from "./create-todo";
import Link from "next/link";

export default async function TodosServer() {
  const todos = await api.todo.findAll();

  return (
    <>
      <h1 className="text-primary">SERVER SIDE RENDERING</h1>
      <Link href={"/client"}>
        <h1>Click here to switch to client render</h1>
      </Link>
      <div className="my-4 flex h-screen flex-col gap-2">
        {todos?.map((todo) => <TodoComponent key={todo.id} todo={todo} />)}
      </div>
      <CreateTodo />
    </>
  );
}
