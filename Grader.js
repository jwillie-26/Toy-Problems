//Student Grade Generator

/*
    Grade student marks as input by a user 
    
    A user inputs marks as an integer, a value btn 0-100
    the input should be graded as follows:
    A ==>79 B ==>60 C ==>49 D ==>40 E ==>39
*/

function marksChecker(x, min, max) {
  return x >= min && x <= max;
}
function marksGenerator(marks) {

  if (marksChecker(marks, 0, 100)) {
      if (marks > 79) {
          console.log("Your grade is : A");
      } else if (marksChecker(marks, 60, 79)) {
          console.log("Your grade is :B");
      } else if (marksChecker(marks, 50, 59)) {
          console.log("Your grade is :C");
      } else if (marksChecker(marks, 40, 49)) {
          console.log("Your grade is :D");
      } else {
          console.log("Your grade is :E");
      }
  }
  return marks;
}
let result = marksGenerator(80);
console.log(result);