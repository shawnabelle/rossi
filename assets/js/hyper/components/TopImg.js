import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	return (
		<section id="TopImg">
			<div class="container">
				<div class="title">
					<h5>Welcome To</h5>
					<h1>Rossi's</h1>
					<h5>{state.companyInfo.title}</h5>
					<a href="#" class="reserve-btn">
						Reserve Table
					</a>
				</div>

				{/* <div class="contact-info">
					<div class="booking">Book Table Directly</div>

					<h2>(323)530-9812</h2>
					<div class="hours">
						Opening Hours <strong> Monday- Friday</strong> 9am-10pm
						<strong>Weekend:</strong> 9am-11pm
					</div>
				</div> */}
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
