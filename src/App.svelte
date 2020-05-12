<script>
import Card from "./components/Card.svelte";
</script>

<main>
	<h1>Middag</h1>
	<div class="dinner-info">
		<Card />	
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: 'Playfair Display', serif;
		background-image: url('../Foodbg.png');
		background-size: cover;
		height:100%;
	}

	h1 {
		color: black;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	
	.dinner-info{
		display:inline-flex;
		justify-items: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>