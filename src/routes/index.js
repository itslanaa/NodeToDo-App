const express = require('express');
const router = express.Router();

// Task Controller
const taskController = require('../controllers/taskController');
/**
 * @swagger
 * /:
 *   get:
 *     description: Returns all tasks
 *     responses:
 *       200:
 *         description: An array of tasks
 */
router.get('/', taskController.getAllTasks);

// Add task route
router.post('/add-task', taskController.addTask);

// Update task route
router.post('/update-task/:id', taskController.updateTask);

// Delete task route
router.get('/delete-task/:id', taskController.deleteTask);

module.exports = router;
