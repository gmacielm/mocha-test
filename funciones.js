<script>
const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
 }


const getOptionRandom = (val_random)=>{
        const  array_options = ["piedra", "papel", "tijera"];
        return array_options[val_random];
}

const getWinner= (val_user, val_ramdon)=>{

    const winner = '';
    if(val_user === val_ramdon) { winner = 'Equals! try again!'; }

    if(val_user ==='piedra' &&  val_ramdon === 'tijera') { winner =  val_user; }
    if(val_user ==='tijera' &&  val_ramdon === 'papel')  { winner =  val_user; }
    if(val_user ==='papel'  &&  val_ramdon === 'piedra') { winner =  val_user; }
  
    if(val_ramdon ==='piedra' &&  val_user === 'tijera') { winner =  val_user; }
    if(val_ramdon ==='tijera' &&  val_user === 'papel')  { winner =  val_user; }
    if(val_ramdon ==='papel'  &&  val_user === 'piedra') { winner =  val_user; }
    
  return winner;
}

console.log('Hola');

</script>