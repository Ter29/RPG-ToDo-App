import { useEffect, useState } from 'react';
import { getTasks, createTask } from './services/taskService';
import { type Task } from './types/Task';
import { TaskList } from './components/TaskList/TaskList';
import { AddTask } from './components/AddTask/AddTask';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  async function handleAdd(task: Omit<Task, 'id'>) {
    await createTask(task);
    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1>ToDo RPG</h1>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
