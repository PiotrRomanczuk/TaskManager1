/** @format */

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../server');
const Task = require('../models/taskModel');
const dotenv = require('dotenv').config();

chai.use(chaiHttp);
const expect = chai.expect;

describe('createTask', () => {
	beforeEach(async () => {
		// Clear the tasks collection before each test
		await Task.deleteMany({});
	});

	it('should create a new task', (done) => {
		const newTask = {
			title: 'Test Task',
			description: 'This is a test task',
			// Add any other required fields here
		};

		chai
			.request(app)
			.post('/api/tasks') // Replace with the actual endpoint for creating tasks
			.send(newTask)
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an('object');
				expect(res.body.title).to.equal(newTask.title);
				expect(res.body.description).to.equal(newTask.description);
				// Add any other assertions for the response body here

				Task.findOne({ _id: res.body._id }).then((task) => {
					expect(task).to.exist;
					expect(task.title).to.equal(newTask.title);
					expect(task.description).to.equal(newTask.description);
					// Add any other assertions for the task object here

					done();
				});
			});
	});

	it('should return an error for invalid task data', (done) => {
		const invalidTask = {
			// Add invalid task data here
		};

		chai
			.request(app)
			.post('/api/tasks') // Replace with the actual endpoint for creating tasks
			.send(invalidTask)
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body).to.be.an('object');
				// Add assertions for the error response here

				done();
			});
	});
});
