import { useState, useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks"); // Replace with your endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data); // Assuming the response is an array of tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (taskText) => {
    try {
      const newTask = {
        id: tasks.length + 1,
        text: taskText,
        completed: false,
      };
      const response = await fetch("http://localhost:3000/addtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update tasks in the state
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const updateTask = async (id, newText) => {
    try {
      const newTask = {
        id: id,
        text: newText,
        completed: false,
      };
      const response = await fetch("http://localhost:3000/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update tasks in the state
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const deleteTaskID = {
        id: id,
      };
      const response = await fetch("http://localhost:3000/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteTaskID),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update tasks in the state
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return { tasks, addTask, updateTask, deleteTask };
};

export default useTasks;
