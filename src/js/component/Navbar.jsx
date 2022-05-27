import React from "react";

//create your first component
const Navbar = () => {
	return (
		<nav class="fixed-top w-100 p-2 navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid p-0 m-0">
				<a class="text-white navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					class="text-warning navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a
							class="text-white nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li class="nav-item">
						<a class="text-white-50 nav-link" href="#">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="text-white-50 nav-link" href="#">
							Services
						</a>
					</li>
					<li class="nav-item">
						<a class="text-white-50 nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
