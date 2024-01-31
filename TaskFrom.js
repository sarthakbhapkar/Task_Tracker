// TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleCreateTask = () => {
    axios.post('/api/tasks', { title, description, dueDate, completed })
      .then(response => {
        console.log('Task created successfully:', response.data);
        // Optionally, update the local state with the new task
      })
      .catch(error => console.error('Error creating task:', error));
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <br />
        <label>Description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <br />
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <br />
        <label>Completed:</label>
        <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} />
        <br />
        <button type="button" onClick={handleCreateTask}>Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
