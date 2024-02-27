//Create a function that checks if the input/parameter is an even number.
//Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
//Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.
 
//Question 1. if the input/parameter is an even number.
function checkEven(number) {

    return (number | 2) === number ? 'even number' : 'odd number'
    
}
console.log(checkEven(14));
console.log(checkEven(21));


//Question 2

    function printNum(n1, n2) {
    if (n1 < n2) {
      for (let i = n1; i <= n2; i++) {
        console.log(i);
      }
    } else if (n1 > n2) {
      for (let i = n1; i >= n2; i--) {
        console.log(i);
      }
    } else {
      console.log(n1());
      console.log(n2);
    }
  }printNum(3, 20)


//Question 3 Create a function that sum the values in-between two numbers
function addSum(start1, end2) {
    let sum = 0;
    for (let i=start1; i <=end2; i++) {
        sum +=i;
    }
    return sum;
    }
    let answer = addSum(5, 30);
    console.log(answer);







