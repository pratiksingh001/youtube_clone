import React from "react";
import { AppContext } from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <div>
        <p className="text-red-500 text-3xl">Hello</p>
      </div>
    </AppContext>
  );
}

export default App;
