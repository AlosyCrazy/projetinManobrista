var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var larguraCar = 75;
var alturaCar = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

var Xcar = 5;
var Ycar = 225;

function add() {
	var novaImgWpp = new Image();
	novaImgWpp.onload = uploadBackground;
	novaImgWpp.src = backgroundImage;

	var novaImgVrumVrum = new Image();
	novaImgVrumVrum.onload = uploadGreenCar;
	novaImgVrumVrum.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(novaImgWpp, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	ctx.drawImage(novaImgVrumVrum, Xcar, Ycar, larguraCar, alturaCar);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(Ycar<=0){
		Ycar = Ycar-10;
		console.log("YOU DIDNT PRESSED THE UP KEY DID YOU?!");
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(Ycar<=350){
		Ycar = Ycar+10;
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(Xcar<=0){
		Xcar = Xcar-10;
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	if(Xcar<=750){
		Xcar = Xcar+10;
		uploadBackground();
		uploadGreenCar();
	}
}
