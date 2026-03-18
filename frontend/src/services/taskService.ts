import { type Task } from '../types/Task';

export async function getTasks(): Promise<Task[]> {
  const res = await fetch('/api/tasks');
  return res.json();
}

export async function createTask(task: Omit<Task, 'id'>) {
  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });

  return res.json();
}