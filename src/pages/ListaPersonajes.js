import React from "react";
import ReactDOM from "react-dom";
import Personaje from "../component/Personaje.js";
//import logo from "../images/logo.png";

class ListaPersonajes extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      info: {},
      results: []
    },
    nextPage: 1
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
      console.log("error en la pagina");
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return "Error!!";
    }

    return (
      <div className="container">
        <div className="App">
          {/* <img className="Logo" src={logo} alt="Rick y Morty" /> */}

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-3 col-md-3" key={character.id}>
                <Personaje character={character} />
              </li>
            ))}
          </ul>

          {this.state.loading && <p className="text-center"> Loading ...</p>}

          {!this.state.loading && this.state.data.info.next && (
            <button onClick={() => this.getPersonajes()}>Cargar mas...</button>
          )}
        </div>
      </div>
    );
  }
}

export default ListaPersonajes;
