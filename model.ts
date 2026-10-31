// model.ts

// A status can only ever be one of these three exact strings.
type TaskStatus = "todo" | "in-progress" | "done";

// Every Task must have this exact shape.
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}