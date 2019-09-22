import React, { Component } from "react";
// import '../Components/css/Curso.css'
import Personaje from "../component/Personaje";

class ListaDePersonajes extends Component {
  state = {
    loading: true,
    error: null,
    nextPage: 1,
    data: {
      info: {},
      results: []
    }
  };

  componentDidMount() {
    this.getPersonajes();
  }

  getPersonajes = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      console.log("Error en la página.");
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.error) {
      return "Error!!";
    }

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <div className="card-deck pr-0 d-flex justify-content-center">
            {this.state.data.results.map(character => {
              return (
                <Personaje
                  // key={character.id}
                  image={character.image}
                  nombre={character.name}
                  // especie={character.species}
                  // origen={character.origin.name}
                  // genero={character.gender}
                ></Personaje>
              );
            })}
          </div>

          {this.state.loading && (
            <div className="col-md-1 mx-auto">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div className="row mb-2">
          {!this.state.loading && this.state.data.info.next && (
            <button
              className="btn btn-success"
              onClick={() => this.getPersonajes()}
            >
              Cargar mas ...
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ListaDePersonajes;
