<script>
</script>
<div style="position: relative; perspective: 200px;">
<div class="day-card">
   <h3>Mandag</h3> 
</div>
<div class="food-card">
    <h2>Lasagne</h2>
</div>
</div>

<style>
h2{
    color: white;
    font-size: 44px;
    border-bottom: 1px solid white;
}
h3{
    margin: 0;
    font-size: 24px;
}
.day-card{
    position: absolute;
    box-shadow: 5px 7px 10px 3px rgba(14,30,37,.2);
    border-radius: 2px;
    bottom: 0;
    background-color:white;
    padding: 10px 50px 10px 5px;
    display: flex;

    justify-content: flex-start;
    transform: translate(-20px, 40px);
    z-index: 1;
}
.food-card {
    background-color: white;
    width: 450px;
    height: 200px;

    border-radius: 8px;
    box-shadow: 5px 7px 10px 3px rgba(14,30,37,.2);
    color: #636d72;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    margin-top: 24px;
    min-width: 264px;
    padding: 24px;


    background-image: url('https://images.unsplash.com/photo-1581904243918-7aac00cefed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80');
    background-size: cover;
    background-position: center center;

    transform: translate(100px, 70px);

}
</style>