//Student Grade Generator

/*
    Grade student marks as input by a user 
    
    A user inputs marks as an integer, a value btn 0-100
    the input should be graded as follows:
    A ==>79 B ==>60 C ==>49 D ==>40 E ==>39
*/

function rangeChecker(x,min,max){
       return x >= min && x <= max;
}

function gradeGenerator(marks){
    //validate if entry falls within range
    if(rangeChecker(marks,0,100)){
     //print out marks grades
     if(marks > 79){
        console.log("A");
    } else if(rangeCheker(marks,60,79)){
      console.log("B");
    } else if(rangeChecher(marks,50,59)){
      console.log("C");
    } else if(rangeChecker(marks,40,49)){
      console.log("D");
    } else {
        console.log("E");
    }
 }
}        


