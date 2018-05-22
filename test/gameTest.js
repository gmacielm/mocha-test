const core = require('../rockPaperScissors');
const assert = require('chai').assert;
let nonce = 0;
let option_obtained = '';
let winner_obtained = '';
const user_option = core.getOptionRandom(core.getRandomInt(0, 2));


describe('Game rockPaperScissors suite', () => {
    it(`getRandomInt should return a integer in 0 to 2 =>  nonce obtained:[${nonce}]`, () => {
        assert.include([2, 1, 0], nonce = core.getRandomInt(0, 2));
    });

    it(`getOptionRandom should return one string of: piedra,papel,tijera =>option obtained:[${option_obtained}]`, () => {
        assert.include(['piedra', 'papel', 'tijera'], option_obtained = core.getOptionRandom(nonce));
    });

    it(`getWinner should return one string of: piedra,papel,tijera =>winner obtained:[${winner_obtained}]`, () => {
        assert.include(['piedra:user', 'papel:user', 'tijera:user', 'tie', 'piedra:machine', 'papel:machine', 'tijera:machine'], winner_obtained = core.getWinner(user_option, option_obtained));
    });


});



