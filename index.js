//HOME variables a funtions

let home = document.getElementById("home");
let home_count = parseInt(home.innerHTML);


function plusoneHome() {
    home_count += 1;
    home.textContent = home_count;
}

function plustwoHome() {
    home_count += 2;
    home.textContent = home_count;
}

function plusthreeHome() {
    home_count += 3;
    home.textContent = home_count;
}

//GUEST variables a funtions

let guest = document.getElementById("guest");
let guest_count = parseInt(guest.innerHTML);

function plusoneGuest() {
    guest_count += 1;
    guest.textContent = guest_count;
}

function plustwoGuest() {
    guest_count += 2;
    guest.textContent = guest_count;
}

function plusthreeGuest() {
    guest_count += 3;
    guest.textContent = guest_count;
}

// OTHER FUNCTIONS

//New game

async function newgame() {
    home.textContent = 0;
    guest.textContent = 0;
    home_count = 0;
    guest_count = 0;
    totalSeconds = 0;
    minutesLabel.textContent = "00";
    secondsLabel.textContent = "00";
    sets.textContent = "1/3";
    totalSeconds = 0;
    clearInterval(times);
    times = setInterval(setTime, 10);
    enhableButtons();
}

// Timer

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let times = setInterval(setTime, 10);

// SETS Pondre que cada set dure 1 minuto
let sets = document.getElementById("sets");
function setTime() {
  ++totalSeconds;
  secondsLabel.textContent = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  if (totalSeconds == 60) {
    sets.innerText = "2/3";
  }
  if (totalSeconds == 120) {
    sets.innerText = "3/3";
  }

  if (totalSeconds == 180) {
    clearInterval(times);
    disableButtons();
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

// Habilitar y deshabilitar botones

// Cantidad de botones de la clase a habilitar/deshabilitar
let longer = document.getElementsByClassName("bt_score").length;

function disableButtons() {
    /*
    document.getElementsByClassName("bt_score").array.forEach(element => {
        element.disabled = true
    });
    */
    for (let i = 0; i < longer; i++) {
        let revoked = document.getElementsByClassName("bt_score")[i];
        revoked.disabled = true;
    }
}

function enhableButtons() {
    /*
    document.getElementsByClassName("bt_score").array.forEach(element => {
        element.disabled = true
    });
    */
    for (let i = 0; i < longer; i++) {
        let revoked = document.getElementsByClassName("bt_score")[i];
        revoked.disabled = false;
    }
}

