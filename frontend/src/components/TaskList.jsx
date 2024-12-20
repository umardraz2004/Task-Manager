import TaskItem from './TaskItem';

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <ul className="space-y-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TaskList; 