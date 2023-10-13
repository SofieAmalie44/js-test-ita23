/**
 * This function returns an array of numbers from the specified start to finish counting up
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} finish - The ending number of the range (inclusive).
 * @returns {Array<number>} - An array containing numbers from start to finish.
 *
 * Usage:
 * const numbers = returnNumbers(2, 7);
 * console.log(numbers); // [2, 3, 4, 5, 6, 7]
 * const numbers = returnNumbers(10, 11);
 * console.log(numbers); // [10, 11]
 * const numbers = returnNumbers(5, 5);
 * console.log(numbers); // [5]
 */
function returnNumbers(start, finish) {
    let newArray = [];
    for (let i = start; i <= finish; i++) {
        newArray.push(i);
    }
    return newArray;
}
    const numbers1 = returnNumbers(2, 7);
    console.log(numbers1); // [2, 3, 4, 5, 6, 7]
    const numbers2 = returnNumbers(10, 11);
    console.log(numbers2); // [10, 11]
    const numbers3 = returnNumbers(5, 5);
    console.log(numbers3); // [5]

    /**
     * This function sums up all the values in an array.
     *
     * @param {number[]} array - Array of numbers.
     * @returns {number} - The sum of all numbers in the array.
     *
     * Usage:
     * const total = sumArray([1, 2, 3]); // total will be 6
     * const anotherTotal = sumArray([-1, -2, 3]); // anotherTotal will be 0
     */
    function sumArray(array) {
        let sum = 0
        array.forEach(array => {
            sum += array});
            return sum;
        }

const total = sumArray([1, 2, 3]);
console.log(total);// total will be 6
const anotherTotal = sumArray([-1, -2, 3]);
console.log(anotherTotal);

    /**
     * This function adds a new element to the end of an array.
     *
     * @param {Array} arr - The array to which the element will be added.
     * @param {any} elem - The element to be added to the array.
     * @returns {Array} - The updated array with the new element.
     *
     * Usage:
     * const myArray = [1, 2, 3];
     * const updatedArray = pushElement(myArray, 4); // updatedArray will be [1, 2, 3, 4]
     */
function pushElement(arr, elem) {
        if (arr.includes(elem)) return arr;
        else return [...arr, elem];
    }
const myArray = [1, 2, 3];
const updatedArray = pushElement(myArray, 4);
console.log(updatedArray);