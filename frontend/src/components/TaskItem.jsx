import { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {isEditing ? (
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className="flex-1 text-gray-800">{task.text}</span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300 ease-in-out">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300 ease-in-out">
            Edit
          </button>
        )}
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300 ease-in-out">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem; 