import React from "react";
import Contenedor from "../component/Card";
import NewCard from "../pages/formCard";

class AddCurso extends React.Component {
  state = {
    form: {
      titulo: "titulo",
      descripcion: "descripcion",
      URL: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <Contenedor
            titulo={this.state.form.titulo}
            descripcion={this.state.form.descripcion}
            URL={this.state.form.URL}
          />

          <div className="col-6">
            <NewCard
              onChange={this.handleChange}
              formValues={this.state.form}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default AddCurso;
