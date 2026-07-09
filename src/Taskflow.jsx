// src/TaskFlow.jsx
import React, { useState } from 'react';

function TaskFlow() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-center">TaskFlow</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="flex-grow border border-gray-300 rounded px-3 py-2 mr-2"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                    className="bg-[#001f3f] text-white px-4 py-2 rounded"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`flex items-center justify-between mb-2 p-2 border rounded ${task.completed ? 'bg-green-100 line-through' : ''
                            }`}
                    >
                        <span>{task.text}</span>
                        <div className="flex space-x-2">
                            <button
                                className="bg-[#001f3f] text-white px-3 py-1 rounded"
                                onClick={() => handleComplete(index)}
                            >
                                Complete
                            </button>
                            <button
                                className="bg-[#EF4444] text-white px-3 py-1 rounded"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskFlow;