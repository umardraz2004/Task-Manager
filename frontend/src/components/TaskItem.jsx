import { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      updateTask(task.id, newText);
      setIsEditing(false);
    }
  };

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <li className="group animate-fade-in">
      <div className="relative">
        <div className="absolute -inset-0.5 bg-blue-500/5 rounded-lg blur-sm group-hover:bg-blue-500/10 transition-all duration-300"></div>
        <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-blue-500/10 transform transition-all duration-200 hover:scale-[1.01]">
          <div className="p-4">
            {isEditing ? (
              <form onSubmit={handleUpdate} className="flex flex-col sm:flex-row gap-3 animate-fade-in">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 bg-slate-700/50 border border-blue-500/10 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:border-blue-500/30 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-4 py-2 bg-blue-600/90 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-105"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 sm:flex-none px-4 py-2 bg-slate-700/50 text-blue-100 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isCompleted}
                      onChange={handleCheckboxChange}
                    />
                    <div className="w-6 h-6 bg-slate-700/50 border border-blue-500/10 rounded-md peer-checked:bg-blue-600/90 peer-checked:border-blue-600/90 transition-all duration-200 flex items-center justify-center transform hover:scale-110">
                      <svg
                        className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </label>
                  <span className={`text-blue-100 text-lg transition-all duration-300 ${isCompleted ? 'line-through text-blue-300/50' : ''}`}>
                    {task.text}
                  </span>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-2 text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 rounded-lg transition-all duration-200 transform hover:scale-110"
                    title="Edit task"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200 transform hover:scale-110"
                    title="Delete task"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default TaskItem; 