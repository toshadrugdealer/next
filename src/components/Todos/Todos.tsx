import { useFilter, useTodos } from "@/store/store";
import { useRef } from "react";
import { CompletedFilter } from "../CompletedFilter/CompletedFilter";
import { AddTodo } from "../AddTodo/AddTodo";

export const Todos = () => {
  const filter = useFilter((state) => state.filter);
  const todos = useTodos((state: any) => {
    switch (filter) {
      case "completed":
        return state.todos.filter((todo: any) => todo.completed);
      case "uncompleted":
        return state.todos.filter((todo: any) => !todo.completed);
      default:
        return state.todos;
    }
  });

  const toggleTodo = useTodos((state: any) => state.toggleTodo);

  const handlerChangeTodo = (todoId: number) => {
    toggleTodo(todoId);
  };

  return (
    <div className="flex items-center text-2xl flex-col gap-2">
      <CompletedFilter />
      {todos.map((todo: any) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              handlerChangeTodo(todo.id);
            }}
          />{" "}
          {todo.title}
        </div>
      ))}
      <div>total: {todos.length}</div>
      <AddTodo />
    </div>
  );
};
