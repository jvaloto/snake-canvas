var canvas = document.getElementById("screen")
var ctx = canvas.getContext("2d")
var currentX = 0
var currentY = 0
var blocksToMove = 10
var food = { x: 50, y: 50, color: "red" }
var snake = { x: 0, y: 0, color: "#000", direction: "right" } 
var blockSize = 20

function doIt(){
    clear()
    updateDirection()
    drawnFood()
    drawnSnake()
}

function drawnFood(){
    drawnItem(food);
}

function drawnSnake(){
    drawnItem(snake);
}

function drawnItem(i){
    ctx.beginPath()
    ctx.rect(i.x, i.y, blockSize, blockSize)
    ctx.fillStyle = i.color
    ctx.fill()
    ctx.closePath()
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function updateDirection(){
    if(snake.direction == "up") snake.y -= blocksToMove
    else if(snake.direction == "right") snake.x += blocksToMove
    else if(snake.direction == "down") snake.y += blocksToMove
    else if(snake.direction == "left") snake.x -= blocksToMove
}

function keyHandler(e){
    if(e.key == "ArrowUp"){
        snake.direction = "up"
    }else if(e.key == "ArrowRight"){
        snake.direction = "right"
    }else if(e.key == "ArrowDown"){
        snake.direction = "down"
    }else if(e.key == "ArrowLeft"){
        snake.direction = "left"
    }
}

document.addEventListener("keydown", keyHandler)

setInterval(doIt, 100);