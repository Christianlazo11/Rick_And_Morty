//con esta funcion haremos las peticiones a la api recibiendo un atributo como parametro para realizar la peticion
const urlBase = "https://rickandmortyapi.com/api/location/";

const getDataFecth = (prop) => {
  const data = fetch(`${urlBase}${prop}`);

  return data.then((response) => response.json());
};

export default getDataFecth;
