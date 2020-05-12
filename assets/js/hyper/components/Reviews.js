import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	var currentReview = function() {
		return (
			<div>
				<h5 class="comp-title">Reviews</h5>
				<h2> {state.reviewsData[state.reviewStatus.currentReview].company}</h2>
				<h4>
					"{state.reviewsData[state.reviewStatus.currentReview].highlight}"
				</h4>
				<p>{state.reviewsData[state.reviewStatus.currentReview].review}</p>
				<div class="author">
					<strong>
						{state.reviewsData[state.reviewStatus.currentReview].author}{' '}
					</strong>{' '}
					<em>
						{state.reviewsData[state.reviewStatus.currentReview].authorInfo}
					</em>
				</div>
			</div>
		);
	};

	var leftClickedBTN = function() {
		if (state.reviewStatus.currentReview == 0) {
			console.log('nothing here');
		} else {
			actions.reviewLeftClicked();
		}
	};

	var rightClickedBTN = function() {
		if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
			console.log('nothing here');
		} else {
			actions.reviewRightClicked();
		}
	};
	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-7">
						<img src="https://image.freepik.com/free-photo/chef-with-his-arms-crossed-white-background_1368-2792.jpg"></img>
					</div>
					<div class="col-md-5">
						{currentReview()}
						<div class="arrows">
							<i
								onclick={leftClickedBTN}
								class={`fas fa-arrow-left ${
									state.reviewStatus.currentReview > 0 ? 'ready' : ''
								}`}
							></i>
							<i
								onclick={rightClickedBTN}
								class={`fas fa-arrow-right ${
									state.reviewStatus.currentReview ==
									state.reviewsData.length - 1
										? ''
										: 'ready'
								}`}
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
