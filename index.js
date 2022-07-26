
let homePoints = 0;
let guestPoints = 0;

document.getElementById("home-points").textContent = homePoints;
document.getElementById("guest-points").textContent = guestPoints;


document.getElementById("plus1Home").addEventListener("click", function(){ addPoints("Home", 1) });
document.getElementById("plus2Home").addEventListener("click", function(){ addPoints("Home", 2) });
document.getElementById("plus3Home").addEventListener("click", function(){ addPoints("Home", 3) });

document.getElementById("plus1Guest").addEventListener("click", function(){ addPoints("Guest", 1) });
document.getElementById("plus2Guest").addEventListener("click", function(){ addPoints("Guest", 2) });
document.getElementById("plus3Guest").addEventListener("click", function(){ addPoints("Guest", 3) });

function addPoints(side, pointAmmonut) {
    let x = 10;
    if (pointAmmonut === 2) {
        x = 2;
    } else if (pointAmmonut === 1) {
        x = 1;
    } else if (pointAmmonut === 3){
        x = 3;
    }
    if (side === "Home") {
        homePoints += x;
    } else {
        guestPoints += x;
    }
    document.getElementById("home-points").textContent = homePoints;
    document.getElementById("guest-points").textContent = guestPoints;
}