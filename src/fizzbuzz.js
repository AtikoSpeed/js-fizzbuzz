// TODO: Write your function in this file

function fizzBuzz(lower, upper) {
  const finalArray = []
  for (let i = lower; i <= upper; i++) {
    let singleAnswer = ''
    if (i % 3 === 0) {
      singleAnswer += 'Fizz'
    }
    if (i % 5 === 0) {
      singleAnswer += 'Buzz'
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      singleAnswer = i
    }
    finalArray.push(singleAnswer)
  }
  return finalArray
}
console.log(fizzBuzz(1, 15))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
