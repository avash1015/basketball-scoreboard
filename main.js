let homePoints = document.getElementById("home-points");
let homeScore = 0;

function homeOnePoint() {
    homeScore += 1;
    homePoints.textContent = homeScore; 
}

function homeTwoPoint() {
    homeScore += 2;
    homePoints.textContent = homeScore; 
}

function homeThreePoint() {
    homeScore += 3;
    homePoints.textContent = homeScore; 
}

let guestPoints = document.getElementById("guest-points");
let guestScore = 0;

function guestOnePoint() {
    guestScore += 1;
    guestPoints.textContent = guestScore; 
}

function guestTwoPoint() {
    guestScore += 2;
    guestPoints.textContent = guestScore; 
}

function guestThreePoint() {
    guestScore += 3;
    guestPoints.textContent = guestScore; 
}
