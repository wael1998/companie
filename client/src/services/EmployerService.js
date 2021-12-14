const axios = require("axios");

const uri = "http://localhost:4000/employer";
const getEmployer = axios
  .get(uri)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

function addEmployer(Employer) {
  const response = axios
    .post(`${uri}/add`, Employer)
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

const deleteEmployer = (id) => axios.delete(`${uri}/${id}`);

const updateEmployer = (id, newTodo) => axios.patch(`${uri}/${id}`, newTodo);

module.exports = {
  getEmployer,
  addEmployer,
  deleteEmployer,
  updateEmployer,
};