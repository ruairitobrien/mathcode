(function () {

    function rollDice() {
        let dice1 = getRandom(6);
        let dice2 = getRandom(6);
        let sum = dice1 + dice2;

        return {
            dice1: dice1,
            dice2: dice2,
            sum: sum
        }
    }

    function getRandom(max) {
        return Math.floor((Math.random() * max) + 1);
    }


    $('#roll-dice-button').click(function () {
        const imgStart = '<img src="http://mathcode.net/images/dice';
        const imageEnd = '.jpg" alt="dice" />';

        let result = 0;
        let count = 0;
        let images = '<div>';

        do {
            result = rollDice();
            console.log(result.sum);
            count++;
            let dice1Img = imgStart + result.dice1 + imageEnd;
            let dice2Img = imgStart + result.dice2 + imageEnd;
            images += '<div class="card">' + dice1Img + dice2Img + '</div>'; 
        } while (result.sum != 2)
        result.count = count;

        images += '</div>';

        showResult(result, images);
    });

    function showResult(result, images) {        
        $('#diceResult').html('<div><p>Snake eyes after ' + result.count + ' throws</p></div>' + images);
    }

})();