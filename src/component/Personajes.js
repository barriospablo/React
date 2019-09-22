import React from "react";
import { Link } from "react-router-dom";

function Personaje(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
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
    </div>
  );
}

export default Personaje;
