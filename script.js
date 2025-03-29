const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const testWrapper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset");
//variables
let timer = [0, 0, 0, 0];
let timerRun = false;
let interval ; 
let originText;  
//show random messages from messages array
function randomMessage()
{
    messages = [
    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
        , "ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
        , "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
        ,"Duis aute irure dolor in"
        , " pariatur. Excepteur sint occaecat cupidatat"
    originText = messages[floor(math.random()*messages.length)];
    document.querySelector("#origin-text p").innerHTML = originText;
]
}
//function for spellCheck
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        testWrapper.style.borderColor="green";
        clearInterval(interval);
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor="yellow";
        } else {
            testWrapper.style.borderColor="red";
        }
    }
}
//function for reset 
function reset (){
    clearInterval(interval);
    interval= null;
    timer=[0,0,0,0];
    timerRun=false;
    testArea.value="";
    theTimer.innerHTML="00:00:00";
    testWrapper.style.borderColor="grey";

    randomMessage();
}
//function for adding 0 to single-digit numbers
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}
//run Timer function
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

    theTimer.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor(timer[3] / 100 / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000))
}
//start the Game
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength == 0 && !timerRun) {
        timerRun = true;
        interval = setInterval(runTimer, 10);

    }
}
//eventListeners
window.addEventListener("load",randomMessage);
testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup" , spellCheck);
resetButton.addEventListener("click" , reset);
