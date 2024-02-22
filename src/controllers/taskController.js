const tasks = []; // Temporary in-memory storage

// Display all tasks
exports.getAllTasks = (req, res) => {
  try {
    // ... (existing code)
    res.status(200).json({ tasks });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a new task
exports.addTask = (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/');
};

// Update an existing task
exports.updateTask = (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body.updatedTask;
  tasks[taskId] = updatedTask;
  res.redirect('/');
};

// Delete a task
exports.deleteTask = (req, res) => {
  const taskId = req.params.id;
  tasks.splice(taskId, 1);
  res.redirect('/');
};
