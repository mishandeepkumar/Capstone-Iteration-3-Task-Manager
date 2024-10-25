import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './Card';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  // State to store tasks with priority and completion status
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', priority: 'high', completed: false },
    { id: 2, name: 'Task 2', priority: 'medium', completed: false },
    { id: 3, name: 'Task 3', priority: 'low', completed: true },
  ]);

  // State for the new task input and priority input
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('low'); // default priority

  // State for showing/hiding completed tasks
  const [showCompleted, setShowCompleted] = useState(true);

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, priority: newPriority, completed: false }]);
      setNewTask(''); // clear the input field
      setNewPriority('low'); // reset priority to default
    }
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Sort tasks by priority
  const sortedTasks = tasks.slice().sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  // Filter tasks based on whether completed tasks should be shown or not
  const filteredTasks = showCompleted
    ? sortedTasks
    : sortedTasks.filter((task) => !task.completed);

  return (
    <div className="container">
      {/* Navbar Component */}
      <Navbar />

      {/* Main content */}
      <main style={{ padding: '1rem' }}>
        {/* Tasks Section */}
        <section id="tasks">
          <Card>
            <h2>Your Tasks</h2>
            {/* Input for adding a new task */}
            <div>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
              />
              <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button onClick={addTask}>Add Task</button>
            </div>

            {/* Button to toggle showing/hiding completed tasks */}
            <button onClick={() => setShowCompleted(!showCompleted)}>
              {showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks'}
            </button>

            {/* Task List */}
            <ItemList
              items={filteredTasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          </Card>
        </section>

        {/* About Section */}
        <section id="about">
          <Card>
            <h2>About</h2>
            <p>This task manager application helps you organize your tasks efficiently.</p>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Card>
            <h2>Contact</h2>
            <p>If you have any questions, please contact us at: contact@example.com</p>
          </Card>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
