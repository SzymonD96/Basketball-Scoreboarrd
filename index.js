
let homePoints = 0;
let guestPoints = 0;

document.getElementById("home-points").textContent = homePoints;
document.getElementById("guest-points").textContent = guestPoints;

function plus1Home() {
    homePoints++;
    document.getElementById("home-points").textContent = homePoints;
}
function plus2Home() {
    homePoints += 2;
    document.getElementById("home-points").textContent = homePoints;
}
function plus3Home() {
    homePoints += 3;
    document.getElementById("home-points").textContent = homePoints;
}
function plus1Guest() {
    guestPoints++;
    document.getElementById("guest-points").textContent = guestPoints;
}
function plus2Guest() {
    guestPoints += 2;
    document.getElementById("guest-points").textContent = guestPoints;
}
function plus3Guest() {
    guestPoints += 3;
    document.getElementById("guest-points").textContent = guestPoints;
}