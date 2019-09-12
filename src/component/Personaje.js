import React, { Component } from "react";
// import "./css/Curso.css";
// import detalle from './DetallePersonaje.js'
import { Link } from "react-router-dom";

class Personaje extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card shadow mb-3 bg-white rounded" id={this.props.key}>
          <img src={this.props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link id={this.props.key} to="/detalle">
              <h5 className="card-title">{this.props.nombre}</h5>
            </Link>
            <p className="card-text">{this.props.especie}</p>
            <p className="card-text">
              <small className="text-muted">{this.props.origen}</small>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">#{this.props.genero}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Personaje;
