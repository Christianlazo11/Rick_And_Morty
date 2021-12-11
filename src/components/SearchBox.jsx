import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa";

const SearchBox = ({ handleSearch, arrayData }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  /*Con esta funcion comparamos el  valor ingresado por el usuario con el array de mundos para deolver un id y con este poder hacer la peticion de ese mundo a la api y pintarlo en la pantalla */
  const containsElement = (elemento) => {
    let id = 0;
    for (let i = 0; i < arrayData.length; i++) {
      if (elemento === arrayData[i].name) {
        id = arrayData[i].id;
        break;
      }
    }
    return id;
  };
  return (
    <div
      className="col-12 col-sm-6 col-md-3 card p-4 bg-dark text-white"
      style={{ width: "15rem" }}
    >
      <select
        className="form-select mb-3"
        onChange={(e) => {
          handleSearch(e.target.value);
          setMessage("");
        }}
      >
        {arrayData.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <form
        className="form-group"
        onSubmit={(e) => {
          e.preventDefault();
          if (containsElement(value) === 0) {
            setMessage("Not Found");
          } else {
            handleSearch(`/${containsElement(value)}`);
            setMessage("");
          }
        }}
      >
        <input
          type="text"
          className="form-control mb-3"
          placeholder="World"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required
        />
        {message !== "" ? (
          <div className="alert alert-danger">{message}</div>
        ) : (
          <div></div>
        )}
        <button className="btn btn-warning form-control">
          <FaSearchengin />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
