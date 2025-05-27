import TaskItem from './TaskItem';

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-blue-200/80 text-xl font-medium mb-2">No tasks yet</div>
          <p className="text-blue-300/60">Start by adding your first task above</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              updateTask={updateTask} 
              deleteTask={deleteTask} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList; 