const User = require("../models/userModel");
const { registerUser } = require("../controllers/userController");

// Mock the User model functions (e.g., findOne, save) to control their behavior in tests
jest.mock("../models/userModel");

describe("registerUser", () => {
  it("should register a new user and return success", async () => {
    const req = {
      body: {
        name: "Test User",
        email: "test@example.com",
        password: "testpassword",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(), // Mock the `json` method properly
      cookie: jest.fn(),
    };

    // Mock the behavior of User.findOne to resolve with null (user does not exist)
    User.findOne.mockResolvedValue(null);

    // Mock the behavior of User.save to resolve with the created user
    User.prototype.save.mockResolvedValue({
      _id: "user_id",
      name: "Test User",
      email: "test@example.com",
    });

    await registerUser(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: "User registered successfully" })
    );
  });

  it("should return an error when the password is less than 4 characters", async () => {
    const req = {
      body: {
        name: "Short Password User",
        email: "shortpassword@example.com",
        password: "123", // Password is less than 4 characters
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(), 
      cookie: jest.fn(),
    };

    // Mock the behavior of User.findOne to resolve with null (user does not exist)
    User.findOne.mockResolvedValue(null);

    // Call the registerUser function
    await registerUser(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(201); // Assuming you return a 400 Bad Request status for this case
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Password must be at least 4 characters" })
    );
  });
});