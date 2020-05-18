const doorImage1 = document.getElementById('door1')
const doorImage2 = document.getElementById('door2')
const doorImage3 = document.getElementById('door3')
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let numClosedDoors = 3
let openDoor1
let openDoor2
let openDoor3
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
const startButton = document.getElementById('start')
let currentlyPlaying = true;

function playDoor(door) {
    numClosedDoors--;
    if (numClosedDoors===0) {
        gameOver('win');
    } else if (isBot(door)===true) {
        gameOver();
    }
}

function isBot(door) {
    if(door.src===botDoorPath) {
        return true;
    } else {
        return false;
    }
}

function isClicked(door) {
    if (door.src === closedDoorPath) {
        return false;
    } else{
        return true;
    }
}

function randomChoreDoorGenerator() {
    let choreDoor = Math.floor(Math.random()*numClosedDoors+1)
    console.log("choredoor", choreDoor)
    switch(choreDoor) {
        case 1:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 2:
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            openDoor1 = spaceDoorPath;
            break;
        case 3:
            openDoor3 = botDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor1 = beachDoorPath;
            break;
    }
}



doorImage1.onclick = () => {
    if(isClicked(doorImage1)===false && currentlyPlaying===true) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if(isClicked(doorImage2)===false && currentlyPlaying===true) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if(isClicked(doorImage3)===false && currentlyPlaying===true) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}


startButton.onclick = () => {
    if(currentlyPlaying===false) {
        startRound();
    }
}



function startRound() {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    currentlyPlaying = true;
    numClosedDoors = 3;
    startButton.innerHTML = "Good Luck!";
    randomChoreDoorGenerator();
}

function gameOver(status) {
    if(status==='win') {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
}

startRound();