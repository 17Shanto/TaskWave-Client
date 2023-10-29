const Workspace = require("../models/workspaceModel");
const { createWorkspace } = require("./workspaceController");

// Mock the Workspace model functions (e.g., save) to control their behavior in tests
jest.mock("../models/workspaceModel");

describe("createWorkspace", () => {
  it("should create a new workspace and return it", async () => {
    // Define a mock request with valid data
    const req = {
      body: {
        name: "Test Workspace",
        createdBy: "653e06f9ae352441b8d40e19", 
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the behavior of Workspace.save to resolve with the created workspace
    Workspace.prototype.save.mockResolvedValue({
      _id: "workspace_id",
      name: "Test Workspace",
      createdBy: "653e06f9ae352441b8d40e19",
    });

    // Call the createWorkspace function
    await createWorkspace(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(201); // Assuming you return a 201 Created status
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ name: "Test Workspace" })
    );
  });



});
