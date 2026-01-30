const UserController = require("./src/controllers/usersController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UserController.listUsers,
  },
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: UserController.getUserById,
  },
];
