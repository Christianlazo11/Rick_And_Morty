import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import LocationInfo from "./components/LocationInfo";
import ResidentContainer from "./components/ResidentContainer";
import getDataFecth from "./getDataFecth";
import getQueryRandom from "./getQueryRandom";
import "./App.css";

function App() {
  const [queryTerm, setQueryTerm] = useState(getQueryRandom);
  const [arrayWorlds, setArrayWorlds] = useState([]);
  const [arrayResidentsUrl, setArrayResidentsUrl] = useState([]);
  const [dataLocationInfo, setDataLocationInfo] = useState({});

  /* este useEfeect me ayudara a traer los mundos que son 108 para poder obtener su id y nombre y cuando el usuario ingrese un nombre poder compararlo, obteniedo su id para realizar la perticion a la api por medio del parametro id, con este UseEfect traere los 108 mundos y los almacenare en un estado arrayWorlds para pasarselo por parametro al searchBox y que este pueda comparar*/
  useEffect(() => {
    const getArrayworlds = () => {
      const props = ["", "?page=2", "?page=3", "?page=4", "?page=5", "?page=6"];
      let newArray = [];
      for (let i = 0; i < props.length; i++) {
        getDataFecth(props[i]).then((data) => {
          for (let j = 0; j < data.results.length; j++) {
            newArray = [
              ...newArray,
              { name: data.results[j].name, id: data.results[j].id },
            ];
          }
          setArrayWorlds(newArray);
        });
      }
    };

    getArrayworlds();
  }, []);

  //Hacemos la peticion a la api segun el id obtenido anteriormente y por medio de un for obtenemos los urls de los habitantes para pasarle por parametros al ResidentContainer
  useEffect(() => {
    if (queryTerm) {
      getDataFecth(queryTerm).then((resp) => {
        setDataLocationInfo(resp);
        let newArray = [];
        if (resp.residents.length !== 0) {
          if (resp.residents.length < 10) {
            for (let i = 0; i < resp.residents.length; i++) {
              newArray = [...newArray, resp.residents[i]];
            }
            setArrayResidentsUrl(newArray);
          } else {
            for (let i = 0; i < resp.residents.length; i++) {
              newArray = [...newArray, resp.residents[i]];
            }
            setArrayResidentsUrl(newArray);
          }
        } else {
          setArrayResidentsUrl(newArray);
        }
      });
    }
  }, [queryTerm]);

  return (
    <div className="">
      <div className=" row d-flex justify-content-evenly align-items-center bg-rick">
        <SearchBox handleSearch={setQueryTerm} arrayData={arrayWorlds} />

        <div className="col-12 col-sm-6 col-md-6">
          <h1 className="text-center text-white fs-1">Rick and Morty</h1>
        </div>

        <LocationInfo dataLocation={dataLocationInfo} />
      </div>

      <ResidentContainer residentData={arrayResidentsUrl} />
    </div>
  );
}

export default App;
