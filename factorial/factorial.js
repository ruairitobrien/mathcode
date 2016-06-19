(function () {
    $('#calc-factorial-button').click(function () {
            var input = parseInt($('#calc-factorial-input').val());
            var result = calculateFactorial(input);
            console.log(result);
            showResult(input, result);
    });

    function calculateFactorial(input) {
        if(input === 0) return 0;
        var factorial = 1;        
        while (input > 1) {
            factorial = factorial * input--;
        }
        return factorial;
    }

    function showResult(original, factorial) {
        $('#factorialResult').html('<p>The factorial of ' + original + ' is ' + factorial + '</p>');
    }

})();