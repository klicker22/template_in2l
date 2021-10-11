/**
*
*  Put your code here for adding your name to the front of the page title
*
*/
var title = document.title;
document.title = "Drew " + title;


runFirstQuestion();
runSecondQuestion();


function runFirstQuestion() {
var output = 0;

var numArray = [5, 6, 4, 6, 7, 0, 1, 3, 5, 2, 3];

for (var i = 0; i < numArray.length; i++) {
  output += numArray[i];
}
  /**
  *
  *  Put your code here for the first question
  *  Use an array named numArray with the following numbers
  *  5, 6, 4, 6, 7, 0, 1, 3, 5, 2, 3
  *
  */


  document.getElementById("first-question").innerHTML = "Output is: " + output;
}

function runSecondQuestion() {

  /**
  *
  *  Put your code here for the second question
  *  Use an array named numArray with the following numbers
  *  10, 5, 7, 2, 5, 5, 4, 88, 1, 0, 64, 23, 9
  *
  */

}
