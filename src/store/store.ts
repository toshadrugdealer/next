import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
interface ITodos {
  todos: ITodo[];
  loading: boolean;
  error: null;
  addTodo: (title: string) => void;
  toggleTodo: (todoId: number) => void;
}
interface IFilter {
  filter: string;
  setFilter: (value: string) => void;
}
interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
export const useTodos = create(
  devtools(
    persist<ITodos>(
      (set, get) => ({
        todos: [{ id: 1, title: "Learn js", completed: true }],
        loading: false,
        error: null,
        addTodo: (title) => {
          if (!title) return;
          const newTodo = {
            id: Date.now(),
            title,
            completed: false,
          };

          set({ todos: [...get().todos, newTodo] });
        },
        toggleTodo: (todoId) =>
          set({
            todos: get().todos.map((todo) =>
              todoId === todo.id
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
          }),
      }),
      {
        name: "todos",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
export const useFilter = create<IFilter>((set) => ({
  filter: "all",
  setFilter: (value: string) => set({ filter: value }),
}));
