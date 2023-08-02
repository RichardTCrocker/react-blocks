import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import SubContents from "./Components/SubContents.jsx";
import Advertisement from "./Components/Advertisement";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="flex">
        <div>
          <Navigation />
        </div>
        <div>
          <Main>
          <div className="flex">
            <SubContents />
            <SubContents />
            <SubContents />
            </div>
            <Advertisement />
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;