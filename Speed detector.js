//Speed detector

/*
    
    Speed is input an integer
    the input is enumearated as follows:
    Speed < 70; print OK!
    Speed < 70, deduct 1 point for every 5 km and print total number of demerit point
    suspend licence on more than 12 point
*/

let demeritPoints = 0;
let speedTracker = 0;
//this function calculates the demerit points earned depending on the speed given

function speedDetector(speed){
    //validate

    if (speed <=70){
        console.log("Speed Ok");
    }else{ 
        let newspeedPoints = (speed - 70)/5;

        //this will check if the demerit points are over 12. if they are print license suspended if not print the amount of points
        if(newspeedPoints <=12) {
            console.log("Demerit Point" + newspeedPoints);
        }else{
            console.log("License suspended!!")
        }
    }
    return speed
}
console.log(speedDetector(90));
