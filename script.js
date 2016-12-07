//Write your function calls below this line
function fourCorners(){
    setColor(0,0, "Black");
    setColor(9,0, "Black");
    setColor(0,9, "Black");
    setColor(9,9, "Black");
}
function smileyFace(){
    setColor(2,2, "Black");
    setColor(2,7, "Black");
    setColor(4,2, "Black");
    setColor(4,7, "Black");
    setColor(5,4, "Black");
    setColor(5,5, "Black");
    setColor(5,3, "Black");
    setColor(5,6, "Black");
}
function s(){
    setColor(2,5, "Black");
    setColor(1,7, "Black");
    setColor(1,6, "Black");
    setColor(3,5, "Black");
    setColor(4,6, "Black");
    setColor(5,7, "Black");
    setColor(6,7, "Black");
    setColor(7,7, "Black");
    setColor(8,6, "Black");
    setColor(8,5, "Black");
    setColor(8,4, "Black");
}
function omanFlag(){
    for(var i = 0; i < 10; i++)
        for(var x = 0; x < 10; x++)
        {
            setColor(i,x, "red");
        }
}
function clearBoard(){
    for(var i = 0; i < 10; i++)
        for(var x = 0; x < 10; x++)
        {
            setColor(i,x, "white");
        }
}
var a;
clearBoard();
a = setTimeout(30000);
omanFlag();

