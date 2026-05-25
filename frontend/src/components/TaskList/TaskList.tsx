import { type Task } from '../../types/Task';
import { updateTask } from '../../services/taskService';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function TaskList({ tasks, setTasks }: Props) {
  async function handleToggle(taskId: string) {
    const updatedTask = await updateTask(taskId);

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title} (+{task.xp} XP)
          </span>
        </li>
      ))}
    </ul>
  );
}
