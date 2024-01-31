// TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');

  const handleCreateTask = () => {
    axios.post('/api/tasks', { title })
      .then(response => {
        console.log('Task created successfully:', response.data);
        // Optionally, update the local state with the new task
      })
      .catch(error => console.error('Error creating task:', error));
  };

  return (
    <div>
      <h2>Create Task</h2>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
};

export default TaskForm;
