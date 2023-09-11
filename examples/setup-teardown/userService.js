import data from "./userData";

const findAll = () => {
  return data.users;
};

const create = (user) => {
  data.users.push(user);
};

const destroy = (id) => {
  data.users.splice(
    data.users.findIndex((user) => user.id === id),
    1,
  );
};

const update = (id, user) => {
  data.users[data.users.findIndex((user) => user.id === id)] = user;
};

export { findAll, create, destroy, update };
