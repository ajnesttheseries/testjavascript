const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0]
console.log(firstFruit)
console.log(fruits[2])

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit)

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)
console.log(thirdList.indexOf(3))

const webTechs = ['HTML', 'CSS', 'JavaScript',
    'React', 'Node', 'MongoDB']
console.log(webTechs.includes('Node'))
console.log(webTechs.includes('C'))

for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark',
    'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(countries)
console.log(newArr)