import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>
						<h2>You deserve healthy, tasty food.</h2>
						<p>
							Rossi's Italian Bistro was est. in 2001 in Los Angeles, CA. With
							more than 15 years of experience of traditional recipes, we
							understand how to best serve our customers through tried service
							principles. Our menu features classic wine imported from Venice.
							We offer a wide selection of Italian bottled wines and complete
							selection of barrel wines .
						</p>
						<div class="quote">
							"The best bang for your taste buds in town"
							<strong>-Jeremy Smith</strong>
						</div>
						<a href="#" class="reserve-btn">
							Reserve
						</a>
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
