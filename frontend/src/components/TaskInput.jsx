import { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        className="border border-gray-300 p-3 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask} className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition duration-300 ease-in-out">
        Add Task
      </button>
    </div>
  );
}

export default TaskInput; 