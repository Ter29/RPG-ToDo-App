import { useState } from 'react';

export function AddTask({ onAdd }: any) {
  const [title, setTitle] = useState('');
  const [xp, setXp] = useState(0);

  const handleSubmit = () => {
    onAdd({ title, xp, completed: false });
    setTitle('');
    setXp(0);
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task" />
      <input type="number" value={xp} onChange={e => setXp(Number(e.target.value))} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}