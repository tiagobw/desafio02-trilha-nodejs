function getUserByUsername(users, username) {
  return users.find((user) => user.username === username);
}

function getUserById(users, id) {
  return users.find((user) => user.id === id);
}

function getTodoById(todos, id) {
  return todos.find((todo) => todo.id === id);
}

module.exports = {
  getUserByUsername,
  getUserById,
  getTodoById,
};
