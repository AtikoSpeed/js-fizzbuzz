// TODO: Write your function in this file

function fizzBuzz(lower, upper) {
  finalArray = []
  for (let i = lower; i <= upper; i++) {
    let pushIntoArray = ''
    if (i % 3 === 0) {
      pushIntoArray += 'Fizz'
    }
    if (i % 5 === 0) {
      pushIntoArray += 'Buzz'
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      pushIntoArray = i
    }
    finalArray.push(pushIntoArray)
  }
  return finalArray
}
console.log(fizzBuzz(1, 15))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
