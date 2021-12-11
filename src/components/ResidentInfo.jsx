import React, { useState, useEffect } from "react";
import {
  FaPlayCircle,
  FaBaby,
  FaFirstOrderAlt,
  FaGlobeEurope,
} from "react-icons/fa";
/*este componente recibe por parametro la url para poder realizar la peticion y guardar los datos en sus correspondientes estados para luego pintarlos en la pantalla */
const ResidentInfo = ({ urlData }) => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [location, setLocation] = useState("");
  const [colorStatus, setColorStatus] = useState("");

  useEffect(() => {
    const getData = () => {
      const Colors = {
        Alive: "text-success",
        Dead: "text-danger",
        unknown: "text-primary",
      };

      if (urlData) {
        fetch(urlData)
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setImg(data.image);
            setName(data.name);
            setStatus(data.status);
            setSpecies(data.species);
            setLocation(data.location.name);
            setEpisodes(data.episode.length);
            setColorStatus(Colors[status]);
          });
      }
    };

    getData();
  }, [urlData, status]);

  return (
    <div className="col-3 mb-3" style={{ width: "14rem" }}>
      <div
        className="card bg-secondary text-white box-shadow"
        style={{ border: "none" }}
      >
        <div>
          <img
            src={img}
            alt="ImageRicks"
            style={{ height: "15rem", width: "100%" }}
          />
        </div>
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ height: "13rem" }}
        >
          <p className="text-center fw-bolder">{name}</p>
          <div className="outMargin mb-2">
            <p>
              <FaFirstOrderAlt className={colorStatus} /> {status}
            </p>
            <p>
              <FaBaby /> {species}
            </p>
            <p>
              <FaGlobeEurope /> {location}
            </p>
            <p>
              <FaPlayCircle /> {episodes + " Episode"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;
