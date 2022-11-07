homeScoreEl = document.getElementById("home_score")
guestScoreEl = document.getElementById("guest_score")

let homeScore = 0
let guestScore = 0

function newGame(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}

function highlightLeader() {
    if (homeScore > guestScore){
        homeScoreEl.style.color = "yellow";
        guestScoreEl.style.color = "#F94F6D";
    } else if (homeScore < guestScore){
        guestScoreEl.style.color = "yellow";
        homeScoreEl.style.color = "#F94F6D";
    }
}

function homeOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function homeTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function homeThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function guestOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function guestTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function guestThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlightLeader()
}