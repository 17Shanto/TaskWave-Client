const Task = require("../models/taskModel");
const List = require("../models/listModel");
const { createTask } = require("../controllers/taskController");

// Mock the Task and List model functions to control their behavior in tests
jest.mock("../models/taskModel");
jest.mock("../models/listModel");

describe("createTask", () => {
  it("should create a new task and return it", async () => {
    // Define mock request and response objects
    const req = {
      body: {
        title: "Test Task",
        list: "list_id", // Provide a valid list ID
      },
    };

    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Mock the behavior of Task.save to resolve with the created task
    Task.prototype.save.mockResolvedValue({
      _id: "task_id",
      title: "Test Task",
      list: "list_id",
    });

    // Mock the behavior of List.findByIdAndUpdate to resolve with the list
    List.findByIdAndUpdate.mockResolvedValue({
      _id: "list_id",
      title: "Test List",
      tasks: [], // You can populate this with task IDs if needed
    });

    // Call the createTask function
    await createTask(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Test Task" })
    );
  });

  it("should handle errors during task creation", async () => {
    const req = {
      body: {
        title: "Test Task",
        
      },
    };
  
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
  
    // Mock the behavior of Task.save to reject with an error
    Task.prototype.save.mockRejectedValue(new Error("Test error"));
  
    // Call the createTask function
    await createTask(req, res);
  
    // Assertions
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Could not create task" })
    );
  });
});