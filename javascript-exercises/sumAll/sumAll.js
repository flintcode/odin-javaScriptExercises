

const sumAll = function(num1,num2) {
    let finalSum = 0;
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || Math.sign(num1)== -1 || Math.sign(num2) == -1){
        return 'ERROR';
    }
    else if (num1 < num2){
        for (let i = num1; i <= num2; i++){ 
            finalSum += i;
        }
        return finalSum;
    }
    else if (num1 > num2){
        for (let i = num2; i <= num1; i++){ 
            finalSum += i;
        }
        return finalSum;
    }
    
 }
    
module.exports = sumAll
