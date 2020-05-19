import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="Reservations">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Reservations</h5>
						<h2>Booking A Table Online Is Easy.</h2>
						<form>
							<input
								type="text"
								name="fullname"
								placeholder="Full Name"
								required
							></input>
							<input
								type="text"
								name="phone"
								placeholder="Contact Number"
								required
							></input>
							<input type="text" name="email" placeholder="Email"></input>
							<input
								type="datetime-local"
								name="date"
								value="2020-06-12T19:30"
								min="2020-01-07T00:00"
								max="2021-06-14T00:00"
								required
							></input>

							<input
								type="number"
								name="people"
								placeholder="Party Size"
								min="2"
								max="10"
								required
							></input>

							<input
								type="submit"
								name="submit"
								class="reserve-btn"
								value="Book Table"
							/>
						</form>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
