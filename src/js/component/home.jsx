import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 mt-4">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</>
	);
};

export default Home;
