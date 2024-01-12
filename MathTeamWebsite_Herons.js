function reroll(a, b, c) {
    "use strict";
    var should_reroll = true;
    var failed = false;
    var new_a, new_b, new_c;
    new_a = a;
    new_b = b;
    new_c = c;
    while (should_reroll == true) {
        failed = false;
        if (new_a >= new_b + new_c) {
            new_a = Math.round(Math.random() * 9) + 1;
            new_b = Math.round(Math.random() * 9) + 1;
            new_c = Math.round(Math.random() * 9) + 1;
            failed = true;
        }
        if (new_b >= new_a + new_c) {
            new_a = Math.round(Math.random() * 9) + 1;
            new_b = Math.round(Math.random() * 9) + 1;
            new_c = Math.round(Math.random() * 9) + 1;
            failed = true;
        }
        if (new_c >= new_b + new_a) {
            new_a = Math.round(Math.random() * 9) + 1;
            new_b = Math.round(Math.random() * 9) + 1;
            new_c = Math.round(Math.random() * 9) + 1;
            failed = true;
        }
        should_reroll = failed;
    }
    var return_arr = [new_a, new_b, new_c];
    return return_arr;
}




function simplify(num) {
    "use strict";
    var simplified_num = 1;
    var new_num;
    var possible_squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961];
    var cut_index;
    for (var x = 0; x < 30; x++) {
        if ((num % possible_squares[30-x]) == 0) {break;} 
        cut_index = 30 - x - 1;
    }
    new_num = num / possible_squares[cut_index];
    simplified_num = cut_index + 1;
    var return_arr = [simplified_num, new_num];
    return return_arr;
}


function herons() {
    "use strict";
    
    var side_a, side_b, side_c, side_arr, semi_perimeter, unsimplified_answer, answer_arr, answer;
    side_a = Math.round(Math.random() * 9) + 1;
    side_b = Math.round(Math.random() * 9) + 1;
    side_c = Math.round(Math.random() * 9) + 1;
    
    side_arr = reroll(side_a, side_b, side_c);
    side_a = side_arr[0];
    side_b = side_arr[1];
    side_c = side_arr[2];
    
    
    semi_perimeter = (1/2)*(side_a + side_b + side_c);
    unsimplified_answer = semi_perimeter * (semi_perimeter - side_a) * (semi_perimeter - side_b) * (semi_perimeter - side_c);
    
    answer_arr = simplify(unsimplified_answer);
    if (answer_arr[1] == 1) {
        answer = answer_arr[0];
    } else if (answer_arr[0] == 1){
        answer = "sqrt(" + answer_arr[1] + ")";
    } 
    else {
        answer = answer_arr[0] + "sqrt(" + answer_arr[1] + ")";
    }
    
    var return_arr = [side_a, side_b, side_c, answer];
    return return_arr; 
}


var herons_arr = herons();
var answer = herons_arr[3];

var side_ab = document.getElementById('side_ab');
side_ab.innerHTML = "Side A = " + herons_arr[0] + " and Side B = " + herons_arr[1];

var side_c = document.getElementById('side_c');
side_c.innerHTML = "Side C = " + herons_arr[2];


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
    herons_arr = herons();
    answer = herons_arr[3];

    side_ab.innerHTML = "Side A = " + herons_arr[0] + " and Side B = " + herons_arr[1];
    
    side_c.innerHTML = "Side C = " + herons_arr[2];

    document.getElementById('display_result').textContent = '';
}

