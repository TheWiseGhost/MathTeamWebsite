function reroll(xa, xb, xc, ya, yb, yc) {
    var nxa, nxb, nxc, nya, nyb, nyc;
    nxa = xa;
    nxb = xb;
    nxc = xc;
    nya = ya;
    nyb = yb;
    nyc = yc;
    var should_reroll = true;
    var failed = false;
    
    while (should_reroll == true){
        failed = false;
        if (nxa == nxb == nxc) {
            nxa = Math.round(Math.random() * 19) + 1;
            nxb = Math.round(Math.random() * 19) + 1;
            nxc = Math.round(Math.random() * 19) + 1;
            failed = true;
        } 
        if (nya == nyb == nyc) {
            nya = Math.round(Math.random() * 19) + 1;
            nyb = Math.round(Math.random() * 19) + 1;
            nyc = Math.round(Math.random() * 19) + 1;
            failed = true
        } 
        should_reroll = failed;
    }
    
    var return_arr = [nxa, nya, nxb, nyb, nxc, nyc];
    return return_arr;
}


function get_answer(xa, xb, xc, ya, yb, yc) {
    var x_coord = (xa+xb+xc) / 3;
    var y_coord = (ya+yb+yc) / 3;
    
    var return_arr = [x_coord, y_coord];
    return return_arr;
}


function make_coordinate(x, y) {
    var coordinate = "(" + x + "," + y + ")";
    return coordinate;
}


function centroid_func() {
    var x_coord_a, x_coord_b, x_coord_c, y_coord_a, y_coord_b, y_coord_c;
    x_coord_a = Math.round(Math.random() * 19) + 1;
    x_coord_b = Math.round(Math.random() * 19) + 1;
    x_coord_c = Math.round(Math.random() * 19) + 1;
    y_coord_a = Math.round(Math.random() * 19) + 1;
    y_coord_b = Math.round(Math.random() * 19) + 1;
    y_coord_c = Math.round(Math.random() * 19) + 1;
    
    var new_coords = reroll(x_coord_a, x_coord_b, x_coord_c, y_coord_a, y_coord_b, y_coord_c);
    
    x_coord_a = new_coords[0];
    x_coord_b = new_coords[2];
    x_coord_c = new_coords[4];
    y_coord_a = new_coords[1];
    y_coord_b = new_coords[3];
    y_coord_c = new_coords[5];
    
    var answer_arr = get_answer(x_coord_a, x_coord_b, x_coord_c, y_coord_a, y_coord_b, y_coord_c);
    var answerx = +answer_arr[0].toFixed(2);
    var answery = +answer_arr[1].toFixed(2);
    
        
    var answer = make_coordinate(answerx, answery);
    
    var return_arr = [answer, x_coord_a, x_coord_b, x_coord_c, y_coord_a, y_coord_b, y_coord_c];
    return return_arr;
}


var centroid = centroid_func();
var answer = centroid[0];

var coord_a, coord_b, coord_c;
coord_a = make_coordinate(centroid[1], centroid[4]);
coord_b = make_coordinate(centroid[2], centroid[5]);
coord_c = make_coordinate(centroid[3], centroid[6]);

var coordinate_ab = document.getElementById('coordinate_ab');
var coordinate_c = document.getElementById('coordinate_c');
coordinate_ab.innerHTML = "Coordinate A = " + coord_a + " and Coordinate B = " + coord_b;
coordinate_c.innerHTML = "Coordinate C = " + coord_c;


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
    centroid = centroid_func();
    answer = centroid[0];
    
    coord_a = make_coordinate(centroid[1], centroid[4]);
    coord_b = make_coordinate(centroid[2], centroid[5]);
    coord_c = make_coordinate(centroid[3], centroid[6]);
    
    coordinate_ab.innerHTML = "Coordinate A = " + coord_a + " and Coordinate B = " + coord_b;
    coordinate_c.innerHTML = "Coordinate C = " + coord_c;

    document.getElementById('display_result').textContent = '';
}
