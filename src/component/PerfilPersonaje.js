import React from "react";

function PerfilPersonaje(props) {
  const { character } = props;

  return (
    <div className="col-3 ml-auto mr-auto">
      <div className="characterCard__Wrapper-sc-1ejywvi-0 lkWhZH">
        <div
          data="card header"
          className="characterCard__ImgWrapper-sc-1ejywvi-1 eUyUcB"
        >
          <div className="card-image img-fluid">
            <img src={character.image} alt="Trandor" />
          </div>
          <div className="characterCard__Title-sc-1ejywvi-3 dfWCUu">
            <h2 className="characterCard__Name-sc-1ejywvi-4 ieUvkm">
              {character.name}
            </h2>
            <p className="characterCard__Description-sc-1ejywvi-5 dSyDU">
              id: 363 - created 2 years ago
            </p>
          </div>
        </div>

        <div
          data="card info"
          className="characterCard__InfoWrapper-sc-1ejywvi-2 XgbIp"
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
                <span>STATUS</span>
                <p>{character.status}</p>
              </div>
            </li>
            <li className="list-group-item">
              <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
                <span>SPECIES</span>
                <p>{character.species}</p>
              </div>
            </li>
            <li className="list-group-item">
              <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
                <span>GENDER</span>
                <p>{character.gender}</p>
              </div>
            </li>
            <li className="list-group-item">
              <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
                <span>ORIGIN</span>
                <p>{character.origin ? character.origin.name : ""}</p>
              </div>
            </li>
            <li className="list-group-item">
              <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
                <span>LAST LOCATION</span>
                <p>{character.location ? character.location.name : ""} </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PerfilPersonaje;
