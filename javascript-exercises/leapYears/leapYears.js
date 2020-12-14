const leapYears = function(leapYears) {

    if (leapYears % 400 === 0 && leapYears% 4 === 0){
        return true;
     }
    else if (leapYears % 100 === 0){
        return false;
     }
    else if (leapYears % 4 ===0) {
        return true;
    }
    else {
        return false;
    }

    } 
    

    

module.exports = leapYears


// function that takes variable leapYears in its parameter
// if statements that test if its divisible by 400 and 4
// if statements that tests if its divisible by 100 and returns false
// if statemnt that tests if it is divisible by 4
// else that tests the rest returning false
// return leapYears boolean valueOf()




// optimal solution
// var leapYears = function(year) {
//     return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
//   }