import React from "react";
import { ImLocation } from "react-icons/im";
import { GoPerson } from "react-icons/go";
import { AiFillRocket } from "react-icons/ai";
import { FaGlobeEurope } from "react-icons/fa";

const LocationInfo = ({ dataLocation }) => {
  /*Comprobamos que el objeto con los datos no este vacio */
  if (Object.keys(dataLocation).length !== 0 || dataLocation === undefined) {
    return (
      <div
        className="col-12 col-sm-12 col-md-3 card bg-dark text-white p-3 d-flex align-items-center"
        style={{ height: "15rem", width: "14rem" }}
      >
        <h6 className="text-center mt-2">
          <ImLocation className="mb-1" />
          {dataLocation.name}
        </h6>
        <div className="card-body">
          <p>
            <AiFillRocket /> {dataLocation.dimension}
          </p>
          <p>
            {" "}
            <FaGlobeEurope className="mb-1" /> {dataLocation.type}
          </p>
          <p>
            <GoPerson className="mb-1" />
            {" " + dataLocation.residents.length}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="card bg-dark text-white p-3"
        style={{ height: "12rem", width: "14rem" }}
      >
        <h6 className="text-center">Name</h6>
        <div className="card-body">
          <p>-type</p>
          <p>-dimention</p>
          <p>-Cant Residents</p>
        </div>
      </div>
    );
  }
};

export default LocationInfo;
