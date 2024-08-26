class Chronometer {
  constructor() {
    this.currentTime = 0; //stores time in secnds
    this.intervalId = null; // stores id of interval so we can clear it out later



  }


  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) callback(); //gets called every second and increments
    }, 1000) //increments every second
  }
  
getMinutes() {
    return Math.floor(this.currentTime / 60); // Minutes are the number of full 60 seconds
}

getSeconds() {
    return this.currentTime % 60; // Seconds are the remainder after dividing by 60
}


  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`; // takes a number an returns it as two-digit 
    //if num is less than 10, pad it with 0;
  }

  stop() {
    clearInterval(this.intervalId); //clears interval so it stops counting
  }

  reset() {
    this.currentTime = 0; //resets time to 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`; //returns time in format MM:SS
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
