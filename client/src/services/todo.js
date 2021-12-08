const axios = require("axios");

const uri = "http://localhost:4000/todo";
const getTodos = axios
  .get(uri)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

function addTodo(todo) {
  axios
    .post(`${uri}/add`, todo)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return `\u2014`;
      }
    });
}

const deleteTodo = (id) =>
  axios.delete(`${uri}/${id}`).then((rsponse) => console.log(rsponse));

const updateTodo = (id, newTodo) =>
  axios
    .patch(`${uri}/${id}`, newTodo)
    .then((response) => console.log(response));
module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
