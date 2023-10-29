const List = require("../models/listModel.js");
const { createList } = require("../controllers/listController.js");

// Mock the List model functions (e.g., save) to control their behavior in tests
jest.mock("../models/listModel.js");

describe("createList", () => {
  
  it("should handle errors during list creation", async () => {
    const req = {
      body: {
        // Invalid data: 'workspace' is missing or set to null
        title: "Test List",
        workspace: null, // or simply omit this field
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(), // Mock the `status` method
      json: jest.fn(), // Mock the `json` method
    };

    // Mock the behavior of List.save to reject with an error
    List.prototype.save.mockRejectedValue(new Error("Test error"));

    // Call the createList function
    await createList(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Could not create list" })
    );
  });
});