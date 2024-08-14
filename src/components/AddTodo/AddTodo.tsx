import { useTodos } from "@/store/store";
import { useRef } from "react";

export const AddTodo = () => {
  const addTodo = useTodos((state) => state.addTodo);

  const handlerAddTodo = () => {
    if (ref.current) {
      addTodo(ref.current.value);
      ref.current.value = "";
    }
  };
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        className="bg-black border px-1 w-1/3"
        onKeyDown={(e) => e.key === "Enter" && handlerAddTodo()}
        ref={ref}
        type="text"
        placeholder="add todo"
      />
    </>
  );
};
