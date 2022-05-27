//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/Navbar.jsx";
import jumbotron from "./component/jumbotron.jsx";
import card from "./component/card.jsx";
import footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
