const ftoc = function(Fahrenheit) {
  let celsius =  (Fahrenheit -32) *5/9;
  let roundCelsius = Number(celsius.toFixed(1));
  return roundCelsius;
  
}

const ctof = function(celsius) {
  let fahrenheit =  celsius *9/5 + 32;
  let roundFahrenheit = Number(fahrenheit.toFixed(1));
  return roundFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}

// optimal solution (answerkey)
// var ftoc = function(f) {
//   return Math.round((f - 32) * (5/9) * 10) / 10
//  }
 
//  var ctof = function(c) {
//    return Math.round(((c * 9/5) + 32) * 10) / 10 
//  }