//Speed detector

/*
    
    Speed is input an integer
    the input is enumearated as follows:
    Speed < 70; print OK!
    Speed < 70, deduct 1 point for every 5 km and print total number of demerit point
    suspend licence on more than 12 point
*/

const checkspeed = () => {

  let speed = document.getElementById('speed') .value;

  if(speed >= 1 && speed <= 70) {
    document.getElementById("answer").innerHTML = "Your speed is OK";
  }

  else if (speed >= 70) {
    if (points >= 12) {
      document.getElementById("answer").innerHTML = "You exided 12 points : License suspended";

    }
    else {
      document.getElementById("answer").innerHTML = points + "points";

      
    }
  }
}
