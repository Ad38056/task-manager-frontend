import { useState } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim() === '') return; // Do nothing if input is empty
    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow-lg text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>TaskFlow</h1>

        {/* Input and Add Button */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-[var(--color-navy)] text-white px-4 py-2 rounded-r hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        {/* Task List or empty message */}
        {tasks.length === 0 ? (
          <p className="text-muted">No tasks yet. Add one above.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map(task => (
              <li key={task.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                {/* Task Title */}
                <span
                  className={`flex-1 ${task.completed ? 'line-through text-muted' : ''}`}
                >
                  {task.title}
                </span>

                {/* Buttons */}
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className="bg-[var(--color-gold)] text-black px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
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