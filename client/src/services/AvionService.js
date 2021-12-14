const axios = require("axios");

const uri = "http://localhost:4000/Avion";
const getAvion = axios
  .get(uri)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

function addAvion(Avion) {
  const response = axios
    .post(`${uri}/add`, Avion)
    .then((res) => {
      if (res) {
        return true;
      } else return false;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return `\u2014`;
      }
    });
  return response;
}

const deleteAvion = (id) => axios.delete(`${uri}/${id}`);

const updateAvion = (id, newTodo) => axios.patch(`${uri}/${id}`, newTodo);

module.exports = {
  getAvion,
  addAvion,
  deleteAvion,
  updateAvion,
};