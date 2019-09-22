import React, { Component } from "react";
// import "./css/Curso.css";
// import detalle from './DetallePersonaje.js'
import { Link } from "react-router-dom";

function Personaje(props) {
  const { character } = props;
  return (
    <div id={character.key}>
      <img src={character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <Link
          to={{
            pathname: `/detalle/${character.id}`,
            state: {
              fromNotifications: true
            }
          }}
        >
          <div className="CharacterCard__name-container text-truncate">
            {character.name}
          </div>
        </Link>

        <p className="card-text">{character.especie}</p>
        <p className="card-text">
          <small className="text-muted">{character.origen}</small>
        </p>
        <p>{character.genero}</p>
      </div>
    </div>
  );
}

export default Personaje;
