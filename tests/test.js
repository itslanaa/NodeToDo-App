const assert = require('chai').assert;
const taskController = require('../controllers/taskController');

describe('Task Controller', () => {
  it('should return an array of tasks', () => {
    const tasks = taskController.getAllTasks();
    assert.isArray(tasks);
  });
});
