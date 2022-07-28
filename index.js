
let homePoints = 0;
let guestPoints = 0;

document.getElementById("home-points").textContent = homePoints;
document.getElementById("guest-points").textContent = guestPoints;


for(let i = 1; i <= 3; i++) {
    document.getElementById("plus" + i + "Home").addEventListener("click", function(){ addPoints(true, i) });
    document.getElementById("plus" + i + "Guest").addEventListener("click", function(){ addPoints(false, i) });
}

function addPoints(isHome, pointAmmonut) {
    if (isHome) {
        homePoints += pointAmmonut;
        document.getElementById("home-points").textContent = homePoints;
    } else {
        guestPoints += pointAmmonut;
        document.getElementById("guest-points").textContent = guestPoints;
    }
}