import { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleAddTask} className="mb-8">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-blue-500/10 rounded-lg blur-sm group-hover:bg-blue-500/20 transition-all duration-300"></div>
        <div className="relative">
          <input
            type="text"
            className="w-full ps-6 pe-32 py-4 bg-slate-800/50 border border-blue-500/10 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:border-blue-500/30 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 text-lg"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="What's your next task?"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600/90 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-105"
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskInput; 