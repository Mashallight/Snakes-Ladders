var pos = [0,0];

var snake1 = 15;
var downtopos1 = 5;
var snake2 = 23;
var downtopos2 = 16;

var ladder1 = 8;
var uptopos1 = 15;
var ladder2 = 19;
var uptopos2 = 24;

function Roll(player)
{
 out = document.getElementById("output");
 rolldie =parseInt(Math.random() * 6) + 1;
 pos[player-1] += rolldie;

 var move = "";

 switch(pos[player-1]){
 case snake1:
 pos[player-1] = downtopos1;
 move = ", Oops there is a snake, go back to position ";
 break;
 case snake2:
 pos[player-1] = downtopos2;
 move = ", Oops there is a snake, go back to position ";
 break;
 case ladder1:
 pos[player-1] = uptopos1;
 move = ", Yay there is a ladder, advance to postion ";
 break;
 case ladder2:
 pos[player-1] = uptopos2;
 move = ", Yay there is a ladder, advance to postion ";
 break;
 default : move = ", so move to position ";
 break; }
 if(pos[player-1] > 25)
 {
    out.textContent += "Player "+player+" WON!!!\n...Game Over...";
    inps = document.getElementById("btn1");
    inps.disabled = true;
    inps = document.getElementById("btn2");
    inps.disabled = true;
  }
    else
     out.textContent += "Player "+ player + " rolls die and gets: " + rolldie + move + pos[player-1] + "\n"; }
