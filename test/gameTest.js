const getRandomInt = require('../rockPaperScissors').getRandomInt;
const getOptionRandom = require('../rockPaperScissors').getOptionRandom;
const getWinner = require('../rockPaperScissors').getWinner;
const assert = require('chai').assert;
let nonce= 0;
let option_obtained = '';
let winner_obtained = '';
const user_option = getOptionRandom(getRandomInt(0,2));


describe('Game rockPaperScissors suite', function(){
    it(`getRandomInt should return a integer in 0 to 2 =>  nonce obtained:[${nonce}]`, function(){
        assert.include([ 2, 1 ,0], nonce=getRandomInt(0,2));
    });

    it(`getOptionRandom should return one string of: piedra,papel,tijera =>option obtained:[${option_obtained}]`, function(){                
        //assert.include([ 'piedra', 'papel' ,'tijera'], option_obtained=getOptionRandom(getRandomInt(0,2)));
        assert.include([ 'piedra', 'papel' ,'tijera'], option_obtained=getOptionRandom(nonce));
        console.log('option_obtained random:'+option_obtained);
    }); 

    it(`getWinner should return one string of: piedra,papel,tijera =>winner obtained:[${winner_obtained}]`, function(){        
        //assert.include([ 'piedra:user', 'papel:user' ,'tijera:user','tie','piedra:machine', 'papel:machine' ,'tijera:machine'],winner_obtained=getWinner(user_option,getOptionRandom(getRandomInt(0,2))));
        assert.include([ 'piedra:user', 'papel:user' ,'tijera:user','tie','piedra:machine', 'papel:machine' ,'tijera:machine'],winner_obtained=getWinner(user_option,option_obtained));
        console.log(` user:[${user_option}] vs machine:[${option_obtained}] winner_obtained:[${winner_obtained}]  `);
    });



});



