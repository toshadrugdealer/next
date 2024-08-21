import { useFilter, useTodos } from "@/store/store";

export const InputTodos = () => {
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
    <>
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
    </>
  );
};
