 import React from "react";
 import Navbar from "../component/navbar";
 import Jumbotron from "../component/jumbotron";
 import Card from "../component/card";
 import Footer from "../component/footer";

 const Home = () => {
 	return (
 		<div>
 			<Navbar />
 			<div className="container mt-5">		
 			<Jumbotron />
				<div className="row mt-5">
 						<Card />
 						<Card />
 						<Card />
 						<Card />
 					</div>
				</div>	

 			<div className="mt-5">
 			<Footer  />
 			</div>
 		</div>
 	);
 };

export default Home;
