import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./Footer.js";
import MainContent from "./MainContent.js";
import Header from "./Header.js";

function App() {
  return (
    <div className="finish">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
