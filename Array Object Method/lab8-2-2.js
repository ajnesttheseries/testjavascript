function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));