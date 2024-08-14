import { useFilter } from "@/store/store";
import styles from "./CompletedFilter.module.css";

export const CompletedFilter = () => {
  const { filter, setFilter } = useFilter();
  return (
    <div className={styles.wrapperFilter}>
      <button disabled={filter === "all"} onClick={() => setFilter("all")}>
        all
      </button>
      <button
        disabled={filter === "uncompleted"}
        onClick={() => setFilter("uncompleted")}
      >
        Not completed
      </button>
      <button
        disabled={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};
