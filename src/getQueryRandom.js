/*Devolvemos un numero al azar ente 1 y 108 para que al ingresar la pagina cargue un mundo al azar*/
const getQueryRandom = () => {
  return Math.floor(Math.random() * 108) + 1;
};

export default getQueryRandom();
