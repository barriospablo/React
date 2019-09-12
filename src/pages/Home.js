import React from "react";
import logo from "../logo.svg";
// import "./App.css";
import CardList from "../component/CardList";
import Card from "../component/Card";

function Home() {
  return (
    <div className="App">
      <br />

      <br />
      <CardList>
        <Card
          title="Esto es un titulo"
          URL="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/github-image-796x418.png"
        />

        <Card
          title="Esto es un titulo"
          URL="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/github-image-796x418.png"
        />
        <Card
          title="Esto es un titulo"
          URL="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/github-image-796x418.png"
        />
        <Card
          title="Esto es un titulo"
          URL="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/github-image-796x418.png"
        />
      </CardList>
    </div>
  );
}

export default Home;
