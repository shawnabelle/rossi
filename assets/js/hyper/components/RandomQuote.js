import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section
			id="RandomQuote"
			style={{
				backgroundImage: `linear-gradient(135deg, rgba(0,0,0,.2) 0 ,#000 100%), url("https://image.freepik.com/free-photo/various-raw-pasta-with-ingredients-black-background_23-2147926116.jpg")`
			}}
		>
			<div class="container">
				<h1>
					"Always start out with a larger pot than what you think you need."
				</h1>
				<span class="author">Hannah H.</span>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
