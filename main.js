const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const snakeImg = new Image();
const food = new Image();
const cnvWidth = canvas.width;
const cnvHeight = canvas.height;
let tail = [];
let snakePosX = 150;
let snakePosY = 150;
let foodPosX = 200;
let foodPosY = 200;
let direction = "";
let animID = 0;

snakeImg.src = "images/snake.png";
food.src = "images/red.png";

let points = {
	x: 0,
	y: 0
};


tail.push(points, points, points);

/*
** arrow up - 38, 87
** arrow down - 40, 83
** arrow left - 37, 65
** arrow right - 39, 68
*/

document.addEventListener("keydown", event => {
	const keyNum = event.keyCode;
	if(keyNum == 38 || keyNum == 87) {
		// turnUp();
		direction = "up";
		// for(let i = 0; i < tail.length; i++){
		// 	setInterval(() => {
		// 		ctx.drawImage(snakeImg, snakePosX, snakePosY + (30 * i), 30, 30); // snake tail
		// 		console.log(i);
		// 	}, 1000);
		// }
		// tail.map((part, index) => {
		// 	setTimeout(() => {
		// 		ctx.drawImage(snakeImg, snakePosX, snakePosY + (30 * index), 30, 30); // snake tail
		// 		console.log(index);
		// 	}, 1000);
		// });
		// draw();
	} 
	if(keyNum == 40 || keyNum == 83) direction = "down"; 
	if(keyNum == 37 || keyNum == 65) direction = "left";
	if(keyNum == 39 || keyNum == 68) direction = "right"; 
});

window.onload = function () {
	if(canvas.getContext){
		startGame();
	}
	else{
		console.error("UPDATE YOUR BROWSER!");
	}
};

function startGame(){
	ctx.drawImage(snakeImg, snakePosX, snakePosY, 30, 30);
	draw();
}


function draw(){
	ctx.clearRect(0, 0, 500, 500);
	// ctx.drawImage(snakeImg, snakePosX, snakePosY, 30, 30); // snake head
	ctx.drawImage(food, foodPosX, foodPosY, 30, 30);
	switch (direction) {
		case "up":
			// head turning up followed by two tails points
			ctx.drawImage(snakeImg, snakePosX, snakePosY - (30 * 1), 30, 30); // snake head
			// ctx.drawImage(snakeImg, snakePosX, snakePosY, 30, 30); // snake tail first
			// ctx.drawImage(snakeImg, snakePosX - 30, snakePosY, 30, 30); // snake tail second
			snakePosY -= 1;

			tail.forEach((part, index) => {
				ctx.drawImage(snakeImg, snakePosX, snakePosY - (30 * index), 30, 30); // snake head

				// ctx.drawImage(snakeImg, snakePosX, snakePosY + (30 * index), 30, 30); // snake tail
			});
			break;
		case "down":
			snakePosY += 1;
			tail.forEach((part, index) => {
				ctx.drawImage(snakeImg, snakePosX, snakePosY - (30 * index), 30, 30); // snake tail
			//ctx.drawImage(snakeImg, snakePosX - (30 * 1), snakePosY, 30, 30); // snake tail
			});
			break;
		case "left":
			snakePosX -= 1;
			tail.forEach((part, index) => {
				ctx.drawImage(snakeImg, snakePosX + (30 * index), snakePosY, 30, 30); // snake tail
			});
			break;
		case "right":
			snakePosX += 1;
			tail.forEach((part, index) => {
				ctx.drawImage(snakeImg, snakePosX - (30 * index), snakePosY, 30, 30); // snake tail
			});
			break;
	}
	// if(snakePosX === foodPosX && snakePosY === foodPosY) tail.push(points);
	animID = requestAnimationFrame(draw);
	// requestAnimationFrame(draw);
}

function turnUp(){
	ctx.drawImage(snakeImg, snakePosX, snakePosY + (30 * 0), 30, 30); // snake head
	ctx.drawImage(snakeImg, snakePosX, snakePosY + (30 * 1), 30, 30); // snake tail first
	ctx.drawImage(snakeImg, snakePosX - 5, snakePosY + (30 * 1), 30, 30); // snake tail second

	// tail.map((part, index) => {
	// 	ctx.drawImage(snakeImg, snakePosX, snakePosY + (30 * index), 30, 30); // snake tail
	// });
	direction = "up";
}
