import React, { useState } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskInput.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[var(--navy-color)] mb-4 text-center">
          TaskFlow
        </h1>

        {/* Input and Add Button */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--navy-color)]"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className="ml-2 bg-[var(--navy-color)] text-white px-4 py-2 rounded hover:bg-blue-800"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        {tasks.length === 0 ? (
          <p className="text-center text-gray-600">No tasks yet. Add one above.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-2 border rounded ${task.completed
                    ? 'line-through text-gray-400'
                    : 'text-black'
                  }`}
              >
                <span>{task.title}</span>
                <div className="space-x-2">
                  <button
                    className="bg-[var(--gold-color)] text-black px-2 py-1 rounded hover:bg-yellow-300"
                    onClick={() => toggleComplete(task.id)}
                  >
                    Complete
                  </button>
                  <button
                    className="bg-[var(--red-color)] text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;