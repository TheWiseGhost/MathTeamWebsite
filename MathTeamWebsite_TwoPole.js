function two_pole_problem() {
    "use strict";
    let pole_a, pole_b, top_answer, bottom_answer, answer, return_arr;
    pole_a = Math.round(Math.random() * 19) + 1;
    pole_b = Math.round(Math.random() * 19) + 1;
    
    top_answer = pole_a * pole_b;
    bottom_answer = pole_a + pole_b;
    answer = (pole_a * pole_b)/(pole_a + pole_b);
    
    return_arr = [pole_a, pole_b, top_answer, bottom_answer, answer];
    return return_arr;
}


let poles = two_pole_problem();
let answer = poles[2].toString() + "/" + poles[3].toString();
let alt_answer = poles[4].toString();

let poles_a = document.getElementById('poles_a');
poles_a.innerHTML = "Pole A = " + poles[0];

let poles_b = document.getElementById('poles_b');
poles_b.innerHTML = "Pole B = " + poles[1];


function check_answer() {
    var input = document.getElementById('input_answer').value;
    if (input == answer) {
        return true;
    } else if (input == alt_answer) {
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
    poles = two_pole_problem();
    answer = poles[2].toString() + "/" + poles[3].toString();
    alt_answer = poles[4].toString();
    poles_a.innerHTML = "Pole A = " + poles[0];
    poles_b.innerHTML = "Pole B = " + poles[1];
    document.getElementById('display_result').textContent = '';
}


      