
let homePoints = 0;
let guestPoints = 0;

document.getElementById("home-points").textContent = homePoints;
document.getElementById("guest-points").textContent = guestPoints;


document.getElementById("plus1Home").addEventListener("click", function(){ addPoints(true, 1) });
document.getElementById("plus2Home").addEventListener("click", function(){ addPoints(true, 2) });
document.getElementById("plus3Home").addEventListener("click", function(){ addPoints(true, 3) });

document.getElementById("plus1Guest").addEventListener("click", function(){ addPoints(false, 1) });
document.getElementById("plus2Guest").addEventListener("click", function(){ addPoints(false, 2) });
document.getElementById("plus3Guest").addEventListener("click", function(){ addPoints(false, 3) });

function addPoints(isHome, pointAmmonut) {
    if (isHome) {
        homePoints += pointAmmonut;
        document.getElementById("home-points").textContent = homePoints;
    } else {
        guestPoints += pointAmmonut;
        document.getElementById("guest-points").textContent = guestPoints;
    }
}