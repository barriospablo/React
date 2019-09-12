import React from "react";
import Card from "../component/Card";

class NewCard extends React.Component {
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("Click!!!!");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Formulario enviado!");
    console.log(this.state);
  };
  render() {
    return (
      <div className="widget">
        <form onSubmit={this.handleSubmit}>
          {/* <input onChange={this.change}></input> */}

          <div className="col-md-8 offset-md-2 p-6 py-1">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  https://example.com/users/
                </span>
              </div>
              <input
                value={this.props.formValues.URL}
                onChange={this.props.onChange}
                type="text"
                name="URL"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Titulo
                </span>
              </div>
              <input
                value={this.props.formValues.titulo}
                onChange={this.props.onChange}
                type="text"
                name="titulo"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  name="descripcion"
                  id="basic-addon1"
                >
                  Descripcion
                </span>
              </div>
              <input
                value={this.props.formValues.descripcion}
                onChange={this.props.onChange}
                type="text"
                name="descripcion"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div>
              <button
                onClick={this.handleClick}
                type="submit"
                class="btn btn-primary"
              >
                Boton
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewCard;
