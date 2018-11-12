var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// ctx.beginPath(); Début du chemin
// ctx.moveTo(50,50); Le tracé part du point 50,50
// ctx.lineTo(200,200); Un segment est ajouté vers 200,200
// ctx.moveTo(200,50);  Puis on saute jusqu'à 200,50
// ctx.lineTo(50,200);  Puis on trace jusqu'à 50,200
// ctx.closePath();  Fermeture du chemin (facultative)

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(300,300);
ctx.lineTo(100,300);
ctx.lineTo(100,100);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,0);
ctx.lineTo(300,100);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(175,300);
ctx.lineTo(175,225);
ctx.lineTo(225,225);
ctx.lineTo(225,300);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(120,120);
ctx.lineTo(170,120);
ctx.lineTo(170,170);
ctx.lineTo(120,170);
ctx.fillStyle = "gold";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(220,120);
ctx.lineTo(270,120);
ctx.lineTo(270,170);
ctx.lineTo(220,170);
ctx.fillStyle = "orange";
ctx.fill();
ctx.closePath();