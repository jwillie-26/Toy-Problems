//Student Grade Generator

/*
    Grade student marks as input by a user 
    
    A user inputs marks as an integer, a value btn 0-100
    the input should be graded as follows:
    A ==>79 B ==>60 C ==>49 D ==>40 E ==>39
*/

let marks = window.prompt('Enter marks!')
function studentGrader(marks) {
  let grade;
  if (marks != null) {
    if (marks > 100) {
      return (grade = "Out of Range");
    } else if (marks > 79) {
      return (grade = "A");
    } else if (marks > 59) {
      return (grade = "B");
    } else if (marks > 48) {
      return (grade = "C");
    } else if (marks > 39) {
      return (grade = "D");
    } else {
      return (grade = "E");
    }
  } else {
    console.log("No marks entered!");
  }
};

studentGrader(marks)