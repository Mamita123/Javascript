/* Write a function called even(), which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original table. (3p)
Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
Print both the original array and the new array to the console in the main program after you have called the function.
You can hardcode the array, no need for prompt().*/

const numbers = [1, 4, 5, 12, 15, 16, 20]

function  even(numbers){
  const evenNumbers = []
  for (let number in numbers){
    if (number % 2 === 0){
      evenNumbers.push(number)
    }
  }
  return evenNumbers;
}

console.log("Original numbers : " + numbers);
console.log("New numbers: " + even(numbers));