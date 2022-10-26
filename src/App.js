import React from "react";

import NavBar from "./components/NavBar";
import PopularMovies from "./containers/PopularMovies";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PopularMovies />
    </div>
  );
}

export default App;
