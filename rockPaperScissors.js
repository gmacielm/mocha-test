
const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
 }


const getOptionRandom = (val_random)=>{
        const  array_options = ["piedra", "papel", "tijera"];
        const  option_random = array_options[val_random];
        return option_random;
}

const getWinner= (val_user, val_random)=>{

    let winner = '';
    if(val_user === val_random) { winner = 'tie'; }

    if(val_user ==='piedra' &&  val_random === 'tijera') { winner =  `${val_user}:user`; }
    if(val_user ==='tijera' &&  val_random === 'papel')  { winner =  `${val_user}:user`; }
    if(val_user ==='papel'  &&  val_random === 'piedra') { winner =  `${val_user}:user`; }
  
    if(val_random ==='piedra' &&  val_user === 'tijera') { winner =  `${val_random}:machine`; }
    if(val_random ==='tijera' &&  val_user === 'papel')  { winner =  `${val_random}:machine`; }
    if(val_random ==='papel'  &&  val_user === 'piedra') { winner =  `${val_random}:machine`; }
    
  return winner;
}


module.exports= {
    getRandomInt, 
    getOptionRandom, 
    getWinner
}


       // winner = `${val_user}[user] defeat ${val_user}[user]`; 