const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js'); // Assuming the Express app is exported from app.js
const Task = require('../models/taskModel.js');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Task API', () => {
  before(async () => {
    // Create a test task before running the tests
    await Task.create({ title: 'Test Task', description: 'This is a test task' });
  });

  after(async () => {
    // Clean up the test data after running the tests
    await Task.deleteMany();
  });

  describe('POST /tasks', () => {
    it('should create a new task', async () => {
      const res = await chai
        .request(app)
        .post('/tasks')
        .send({ title: 'New Task', description: 'This is a new task' });

      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('title', 'New Task');
      expect(res.body).to.have.property('description', 'This is a new task');
    });

    it('should return an error for invalid task data', async () => {
      const res = await chai
        .request(app)
        .post('/tasks')
        .send({ description: 'This task is missing the title' });

      expect(res).to.have.status(400);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('error');
    });
  });

  describe('GET /tasks', () => {
    it('should retrieve all tasks', async () => {
      const res = await chai.request(app).get('/tasks');

      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.lengthOf(2); // Assuming there are two tasks in the database (test task + created task)
      expect(res.body[0]).to.have.property('title', 'Test Task');
      expect(res.body[0]).to.have.property('description', 'This is a test task');
    });
  });

  describe('GET /tasks/:id', () => {
    it('should retrieve a task by ID', async () => {
      const tasks = await Task.find();
      const taskId = tasks[0]._id;

      const res = await chai.request(app).get(`/tasks/${taskId}`);

      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('title', 'Test Task');
      expect(res.body).to.have.property('description', 'This is a test task');
    });

    it('should return an error for invalid task ID', async () => {
      const res = await chai.request(app).get('/tasks/invalidId');

      expect(res).to.have.status(500);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('msg');
    });
  });
});
