var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randomInteger(n) {
    return Math.floor(Math.random() * n);
}
var box = document.getElementById("box");
function clickFun(){
    var hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor += hex[randomInteger(16)];
    }
    var x = randomInteger(650);
    var y = randomInteger(450);
    console.log(box);
    box.style.backgroundColor = hexColor;
    box.style.left = x + "px";
    box.style.top = y + "px";
}