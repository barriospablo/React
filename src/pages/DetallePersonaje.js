import React from "react";
import ReactDOM from "react-dom";
import PerfilPersonaje from "../component/PerfilPersonaje.js";
//import logo from "../images/logo.png";

class DetallePersonaje extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {}
  };

  componentDidMount() {
    this.getdetalle();
  }

  getdetalle = async () => {
    this.setState({ loading: true, error: null });

    try {
      const { handle } = this.props.match.params;
      const { fromNotifications } = this.props.location.state;
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${handle}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      console.log("error en la pagina");
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return "Ha ocurrido un error :" + this.state.error;
    }

    return (
      <div className="container">
        <div className="App">
          {/* <img className="Logo" src={logo} alt="Rick y Morty" /> */}

          {this.state.data && <PerfilPersonaje character={this.state.data} />}

          {this.state.loading && (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DetallePersonaje;
