import { v4 as uuidv4 } from 'uuid';

let users = [];

const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  return res.send(
    `User with the username ${user.firstName} added to the database!`
  );
};

const getUsers = (req, res) => {
  return res.json(users);
};

const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  return res.json(foundUser);
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  return res.send(`User with the id ${id} deleted from the database`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  return res.send(`User with the id ${id} has been updated`);
};

export { createUser, getUsers, getUser, deleteUser, updateUser };
