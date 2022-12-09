//Speed detector

/*
    
    Speed is input an integer
    the input is enumearated as follows:
    Speed < 70; print OK!
    Speed < 70, deduct 1 point for every 5 km and print total number of demerit point
    suspend licence on more than 12 point
*/

const detectSpeed = (speed) => {
  if (speed < 70) {
    console.log("OK");
  } else {
    let surpass = Math.floor((speed - 70) / 5);
    if (surpass > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${surpass}`);
    }
  }
};
// console.log(detectSpeed(100));
