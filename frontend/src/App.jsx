import useTasks from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/20 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-blue-500/5 animate-pulse-slow"></div>
          <div className="relative p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-[#9EC8FD]">
                Task Manager
              </h1>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium max-w-2xl mx-auto animate-fade-in-up">
                Organize your tasks with style and efficiency
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-blue-500/20 shadow-lg animate-fade-in-up-delay">
              <TaskInput addTask={addTask} />
              <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
