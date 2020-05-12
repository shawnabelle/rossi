import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
				<h2>Delicious Flavor of Spring</h2>
				<div class="box">
					<div class="row">
						<div class="col-md-6">
							<div class="title">{state.companyInfo.location}</div>
							<h6 class="address">1409 East Main St. Los Angeles, CA 91325</h6>
							<p>
								<strong>Email:</strong>
								<a href="mailto:info@primesteak.com"> info@rossi.com</a>
							</p>
						</div>
						<div class="col-md-6">
							<h6>Phone:</h6>
							<div class="title"> {state.companyInfo.phone}</div>
							<h6>Lunch Service:</h6>
							<p>
								Friday, Saturday, Sunday: Bookings <br /> from 12pm-1:30pm
							</p>
							<h6>Dinner Service:</h6>
							<p>
								Friday, Saturday, Sunday: Bookings <br /> from 6pm-9:30pm
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
