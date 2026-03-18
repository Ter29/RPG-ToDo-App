import { type Task } from '../../types/Task';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function TaskList({ tasks, setTasks }: Props) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {
              setTasks(prev =>
                prev.map(t =>
                  t.id === task.id ? { ...t, completed: !t.completed } : t
                )
              );
            }}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title} (+{task.xp} XP)
          </span>
        </li>
      ))}
    </ul>
  );
}