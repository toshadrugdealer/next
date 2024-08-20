import { CompletedFilter } from "../CompletedFilter/CompletedFilter";
import { AddTodo } from "../AddTodo/AddTodo";
import { InputTodos } from "../InputTodos/InputTodos";

export const Todos = () => {
  return (
    <div className="flex items-center text-2xl flex-col gap-2">
      <CompletedFilter />
      <InputTodos />
      <AddTodo />
    </div>
  );
};
