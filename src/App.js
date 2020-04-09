import React from "react";

import Loader from "./components/Loader";

const App = () => {
  if (window.onload) {
    return <div>Hello</div>;
  }
  return <Loader />
};

export default App;
