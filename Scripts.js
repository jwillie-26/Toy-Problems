//Speed detector
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
