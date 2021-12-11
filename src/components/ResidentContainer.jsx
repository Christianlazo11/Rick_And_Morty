import React from "react";
import ResidentInfo from "./ResidentInfo";
import uniqid from "uniqid";

/*En este componente recibimos un array con todas las url de los habitantes, hacemos un mapeo del array, creando por 
cada elementpo un resident info pasandole por propiedades un id y la url para que haga el Feth y pinte los datos */
const ResidentContainer = ({ residentData }) => {
  /*Si el mundo no tiene residentes mostrara una imagen y un mensaje diciendo que no hay residentes*/
  if (residentData.length === 0) {
    return (
      <div
        className="col-3 bg-dark p-3 d-flex align-items-center"
        style={{ height: "70vh", width: "100vw" }}
      >
        <div className="row notHabitants d-flex align-items-center justify-content-start">
          <h2 className=" col-6 text-white display-4">
            I'm sorry, there are no inhabitants here
          </h2>
          <div className="col-6">hola</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-12 p-3 residentContainer">
        <div className="row">
          {residentData.map((item) => (
            <ResidentInfo key={uniqid()} urlData={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default ResidentContainer;
