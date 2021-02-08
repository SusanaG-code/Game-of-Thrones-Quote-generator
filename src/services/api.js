const getDataFromApi = () => {
  return fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataFromApi,
};
