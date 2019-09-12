import React from "react";

class Contenedor extends React.Component {
  render() {
    return (
      <div className="col-4  mb-3 ">
        <div class="card m-0">
          <img
            src={this.props.URL || "asuka.PNG"}
            class="card-img-top"
            alt="IMG 1"
            width=""
          />
          <div class="card-body">
            <h5 class="card-title">{this.props.titulo || "Titulo"}</h5>
            <p class="card-text">
              {this.props.descripcion ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae consequuntur animi aut obcaecati sit quis quia nulla, dolore quidem sunt enim nam dicta sed minima debitis beatae est! Iure"}
            </p>
            <p class="card-text">
              <small class="text-muted">React</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Contenedor;
