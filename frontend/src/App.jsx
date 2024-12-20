import useTasks from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  return (
    <div className="my-5 max-w-lg mx-auto p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl rounded-xl">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
        Task Manager
      </h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
