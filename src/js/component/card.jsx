import React from "react";

const Card = () => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div class="m-auto w-100 p-0 card-group">
					<div class="w-100 pe-2 text-center m-auto card">
						<img
							class="w-100 m-auto card-img-top"
							src="https://picsum.photos/id/237/200/300"
							alt="Card image cap"
						/>
						<div class="w-100 card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Doloremque maiores sunt
								mollitia labore culpa magnam!
							</p>
							<button type="button" class="btn btn-primary">
								Find out more!
							</button>
						</div>
					</div>
					<div class="w-100 pe-2 text-center m-auto card">
						<img
							class="w-100 m-auto card-img-top"
							src="https://picsum.photos/seed/picsum/200/300"
							alt="Card image cap"
						/>
						<div class="w-100 card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Doloremque maiores sunt
								mollitia labore culpa magnam!
							</p>
							<button type="button" class="btn btn-primary">
								Find out more!
							</button>
						</div>
					</div>
					<div class="w-100 pe-2 text-center m-auto card">
						<img
							class="w-100 m-auto card-img-top"
							src="https://picsum.photos/200/300?grayscale"
							alt="Card image cap"
						/>
						<div class="w-100 card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Doloremque maiores sunt
								mollitia labore culpa magnam!
							</p>
							<button type="button" class="btn btn-primary">
								Find out more!
							</button>
						</div>
					</div>
					<div class="w-100 text-center m-auto card">
						<img
							class="w-100 m-auto card-img-top"
							src="https://picsum.photos/200/300"
							alt="Card image cap"
						/>
						<div class="w-100 card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Doloremque maiores sunt
								mollitia labore culpa magnam!
							</p>
							<button type="button" class="btn btn-primary">
								Find out more!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
