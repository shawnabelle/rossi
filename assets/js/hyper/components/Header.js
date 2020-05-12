import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="container">
				<div class="logo">
					<img src="https://image.freepik.com/free-photo/flags-italy_1232-3049.jpg" />
					Rossi's
				</div>
				<div class="hamburger">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
				</div>

				<nav class="nav-links">
					<a href="#OurStory">Our Story</a>
					<a href="#Reviews">Reviews</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#ContactUs">Reservations</a>
					<a href="#ContactUs">Contact Us</a>
				</nav>
			</div>
		</header>
	);
}
window.onload = function() {
	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.querySelector('.nav-links');
	const links = document.querySelectorAll('.nav-links a');
	hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('open');
		links.forEach(link => {
			link.classList.toggle('fade');
		});
	});
};

// links.addEventListener('click', () => {
// 	navLinks.classList.remove('open');
// });
