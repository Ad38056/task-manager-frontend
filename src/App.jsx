import React, { useState } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskInput.trim() === '') return; // Don't add empty tasks
    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-[var(--color-navy)] text-center">
        TaskFlow
      </h1>

      {/* Input and Add Button */}
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          className="bg-[var(--color-navy)] text-white px-4 py-2 rounded-r hover:bg-blue-800"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      {/* Tasks List */}
      {tasks.length === 0 ? (
        <p className="text-center text-gray-600">No tasks yet. Add one above.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between mb-3 p-3 bg-gray-50 rounded shadow"
            >
              {/* Task Title */}
              <span
                className={`flex-1 ${
                  task.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-800'
                }`}
              >
                {task.title}
              </span>

              {/* Buttons */}
              <div className="flex space-x-2 ml-4">
                {/* Complete Button */}
                <button
                  className="bg-[var(--color-gold)] text-black px-3 py-1 rounded hover:bg-yellow-500"
                  onClick={() => handleToggleComplete(task.id)}
                >
                  Complete
                </button>

                {/* Delete Button */}
                <button
                  className="bg-[var(--color-red)] text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;