import React from "react";

class CardList extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card-deck m-0">
          <div className="row">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default CardList;
