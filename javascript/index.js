const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const formattedMinutes = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerText = formattedMinutes[0]; // Tens place
  minUniElement.innerText = formattedMinutes[1]; // Units place
}

function printSeconds() {
  const seconds = chronometer.getSeconds();

  const formattedSeconds = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerText = formattedSeconds[0]; // Tens place
  secUniElement.innerText = formattedSeconds[1]; // Units place
}

n
function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement("li") // creates list to save split time
  li.className = "list-item";
  li.innerText = splitTime;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime); // pass printTime as callback

  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime(); // update display after reset
    clearSplits();
  } else {
    printSplit();
  }
});
