//Student Grade Generator
//Used arrow function 

const checkGrade = () => {

   let sbl = document.getElementById('mark').Value;

//used if statement to get each grade.
if (sbl >= 80 && sbl <= 100){
   document.getElementById("answer") .innerHTML = "Grade:A";
}
    else if (sbl >= 60 && sbl <= 79) {
      document.getElementById("answer") .innerHTML = "Grade:B";
    }
    else if (sbl >= 50 && sbl <= 59) {
        document.getElementById("answer") .innerHTML = "Grade:C";
      }
      else if (sbl >= 40 && sbl <= 49) {
        document.getElementById("answer") .innerHTML = "Grade:D";
      }
      else if (sbl >= 1 && sbl <= 39) {
        document.getElementById("answer") .innerHTML = "Grade:E";
      } 
      else if (sbl  >= 100) {
        document.getElementById("answer") .innerHTML = "Invalid mark";
      }

}

