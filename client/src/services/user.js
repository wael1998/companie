const axios = require("axios");

const uri = "http://localhost:4000/user";

function register(user) {
  axios
    .post(`${uri}/register`, user)
    .then((response) => response.data)
    .catch((error) => {
      console.debug(error);
    });
}

function login(user) {
  axios
    .post(`${uri}/login`, user)
    .then((response) => response.data)
    .catch((error) => {
      console.debug(error);
    });
}

module.exports = {
  login,
  register,
};
