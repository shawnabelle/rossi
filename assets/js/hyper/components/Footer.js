import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer id="Footer">
			<div class="container">
				<nav class="menu">
					<a href="#">Our Story</a>
					<a href="#">Reviews</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#">Contact Us</a>
				</nav>
				<ul class="social-media">
					<li>
						<a href="#">
							<i class="fab fa-facebook-square" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fab fa-instagram-square" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fab fa-twitter-square" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
				<div class="copyright">&#169; 2020 Copyright</div>
			</div>
		</footer>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
