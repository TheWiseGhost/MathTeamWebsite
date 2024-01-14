function angleb_func() {
    var side_a, side_b, side_c;
    side_a = Math.round(Math.random() * 14) + 1;
    side_b = Math.round(Math.random() * 14) + 1;
    side_c = Math.round(Math.random() * 14) + 1;
    
    var answer = side_c * side_a / side_b;
    answer = +answer.toFixed(2);
    
    var should_reroll = true;
    var failed = false;
    while (should_reroll == true) {
        failed = false;
        if (side_a >= side_b + side_c + answer) {
            side_a = Math.round(Math.random() * 14) + 1;
            side_b = Math.round(Math.random() * 14) + 1;
            side_c = Math.round(Math.random() * 14) + 1;
            answer = side_c * side_a / side_b;
            answer = +answer.toFixed(2);
            failed = true;
        }
        if (side_b >= side_a + side_c + answer) {
            side_a = Math.round(Math.random() * 14) + 1;
            side_b = Math.round(Math.random() * 14) + 1;
            side_c = Math.round(Math.random() * 14) + 1;
            answer = side_c * side_a / side_b;
            answer = +answer.toFixed(2);
            failed = true;
        }
        if (side_c + answer >= side_b + side_a) {
            side_a = Math.round(Math.random() * 14) + 1;
            side_b = Math.round(Math.random() * 14) + 1;
            side_c = Math.round(Math.random() * 14) + 1;
            answer = side_c * side_a / side_b;
            answer = +answer.toFixed(2);
            failed = true;
        }
        should_reroll = failed;
    }
    
    var return_arr = [answer, side_a, side_b, side_c];
    return return_arr;
}


var angleb_arr = angleb_func();
var answer = angleb_arr[0];

var side_ab = document.getElementById('side_ab');
side_ab.innerHTML = "Side AC = " + angleb_arr[1] + " and Side AB = " + angleb_arr[2];

var side_c = document.getElementById('side_c');
side_c.innerHTML = "Side BD = " + angleb_arr[3];


function check_answer() {
    var input = document.getElementById('input_answer').value;
    if (input == answer) {
        return true;
    } else {
        return false;
    }
}

document.getElementById('submit').onclick = function() {
    var correct = check_answer();
    if (correct == true) {
        document.getElementById('display_result').textContent = "Correct!";
    } else {
        document.getElementById('display_result').textContent = "Incorrect"; 
    }
}


document.getElementById('refresh').onclick = function() {
    angleb_arr = angleb_func();
    answer = angleb_arr[0];

    side_ab.innerHTML = "Side AC = " + angleb_arr[1] + " and Side AB = " + angleb_arr[2];
    side_c.innerHTML = "Side BD = " + angleb_arr[3];

    document.getElementById('display_result').textContent = '';
}

