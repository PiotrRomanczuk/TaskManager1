// const Task = require('../models/taskModel');

// // Mocking the Task model
// jest.mock('../controllers/taskController', () => ({
//   createTask: jest.fn(),
//   find: jest.fn(),
//   findById: jest.fn(),
//   findByIdAndUpdate: jest.fn(),
//   findByIdAndDelete: jest.fn(),
// }));

// const {
//   createTask,
//   getAllTasks,
//   getTaskByID,
//   updateTask,
//   deleteTask
// } = require('../controllers/taskController');

// describe('createTask', () => {
//   it('should create a task and return it in the response', async () => {
//     const req = { body: { title: 'Task 1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const newTask = { _id: 'task1', title: 'Task 1' };
//     Task.create.mockResolvedValue(newTask);

//     await createTask(req, res);

//     expect(Task.create).toHaveBeenCalledWith(req.body);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(newTask);
//   });

//   it('should return an error response if an error occurs during task creation', async () => {
//     const req = { body: { title: 'Task 1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const error = { message: 'Task creation failed' };
//     Task.create.mockRejectedValue(error);

//     await createTask(req, res);

//     expect(Task.create).toHaveBeenCalledWith(req.body);
//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith(error);
//   });
// });

// describe('getAllTasks', () => {
//   it('should get all tasks and return them in the response', async () => {
//     const req = {};
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const tasks = [{ _id: 'task1', title: 'Task 1' }, { _id: 'task2', title: 'Task 2' }];
//     Task.find.mockResolvedValue(tasks);

//     await getAllTasks(req, res);

//     expect(Task.find).toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(tasks);
//   });

//   it('should return an error response if an error occurs while fetching tasks', async () => {
//     const req = {};
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const error = { message: 'Failed to fetch tasks' };
//     Task.find.mockRejectedValue(error);

//     await getAllTasks(req, res);

//     expect(Task.find).toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ msg: error.message });
//   });

//   it('should return a 404 response if no tasks are found', async () => {
//     const req = {};
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     Task.find.mockResolvedValue(null);

//     await getAllTasks(req, res);

//     expect(Task.find).toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith('No tasks found with ID: undefined');
//   });
// });

// describe('getTaskByID', () => {
//   it('should get a task by ID and return it in the response', async () => {
//     const req = { params: { id: 'task1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const task = { _id: 'task1', title: 'Task 1' };
//     Task.findById.mockResolvedValue(task);

//     await getTaskByID(req, res);

//     expect(Task.findById).toHaveBeenCalledWith('task1');
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(task);
//   });

//   it('should return an error response if an error occurs while fetching the task', async () => {
//     const req = { params: { id: 'task1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const error = { message: 'Failed to fetch the task' };
//     Task.findById.mockRejectedValue(error);

//     await getTaskByID(req, res);

//     expect(Task.findById).toHaveBeenCalledWith('task1');
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ msg: error.message });
//   });
// });

// describe('updateTask', () => {
//   it('should update a task and return the updated task in the response', async () => {
//     const req = { params: { id: 'task1' }, body: { title: 'Updated Task 1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const updatedTask = { _id: 'task1', title: 'Updated Task 1' };
//     Task.findByIdAndUpdate.mockResolvedValue(updatedTask);

//     await updateTask(req, res);

//     expect(Task.findByIdAndUpdate).toHaveBeenCalledWith('task1', req.body, { new: true });
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(updatedTask);
//   });

//   it('should return an error response if an error occurs while updating the task', async () => {
//     const req = { params: { id: 'task1' }, body: { title: 'Updated Task 1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const error = { message: 'Failed to update the task' };
//     Task.findByIdAndUpdate.mockRejectedValue(error);

//     await updateTask(req, res);

//     expect(Task.findByIdAndUpdate).toHaveBeenCalledWith('task1', req.body, { new: true });
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ msg: error.message });
//   });
// });

// describe('deleteTask', () => {
//   it('should delete a task and return it in the response', async () => {
//     const req = { params: { id: 'task1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const deletedTask = { _id: 'task1', title: 'Task 1' };
//     Task.findByIdAndDelete.mockResolvedValue(deletedTask);

//     await deleteTask(req, res);

//     expect(Task.findByIdAndDelete).toHaveBeenCalledWith('task1');
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(deletedTask);
//   });

//   it('should return an error response if an error occurs while deleting the task', async () => {
//     const req = { params: { id: 'task1' } };
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
//     const error = { message: 'Failed to delete the task' };
//     Task.findByIdAndDelete.mockRejectedValue(error);

//     await deleteTask(req, res);

//     expect(Task.findByIdAndDelete).toHaveBeenCalledWith('task1');
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ msg: error.message });
//   });
// });
