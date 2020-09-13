<script>
import Card from "./components/Card.svelte";
let dinners = getWeeklyDinners();
let currentWeekDay = ((new Date()).getDay() - 1)%7;
if(currentWeekDay < 0){
    currentWeekDay = 6;
}
async function getWeeklyDinners(){

	const res = await fetch('/weeklyDinner');
	const dinners = await res.json();
	return dinners;
}

</script>

<main>
	<h1>Dagens</h1>
	{#await dinners then value}
	<div class="dinner-info">
		<Card dinnerName={value[currentWeekDay].dinner} weekDay={value[currentWeekDay].day} img={value[currentWeekDay].img || "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"} />	
	</div>
	{/await}
</main>

<style>
	@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: 'Playfair Display', serif;
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
