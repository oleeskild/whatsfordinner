<script>
export let dinnerName, weekDay, img;
</script>
<div style="position: relative;">
<div class="day-card">
   <h3>{weekDay}</h3> 
</div>
<div class="food-card" style={`background-image: url('${img}')`}>
    <h2>{dinnerName}</h2>
</div>
</div>

<style>
h2{
    color: white;
    font-size: 38px;
    border-bottom: 1px solid white;
    background-color: rgba(0,0,0,0.5);
    padding: 10px;
}
h3{
    margin: 0;
    font-size: 3rem;
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
    transform: translate(-45px, 40px);
    z-index: 1;
}
.food-card {
    background-color: white;
    width: 33vw;
    height: 33vh;

    border-radius: 8px;
    box-shadow: 5px 7px 10px 3px rgba(14,30,37,.2);
    color: #636d72;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 24px;
    min-width: 264px;
    padding: 24px;


    background-size: cover;
    background-position: center center;

    transform: translate(100px, 70px);

}

@media (max-width: 920px){
    .food-card {
        width: 66vw;
        transform: translate(50px, 70px);
    }
    h2 {
        font-size: 32px;
    }
}

@media (max-width: 640px){
    .food-card {
        width: 90vw;
        position:absolute;
        top:50%;
        left: 0;
        transform: translateX(-50%);
        min-width: 10px;
    }
    h2 {
        font-size: 24px;
    }
}
</style>