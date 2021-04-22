const printFullName = (firstName, lastName) => { return `${firstName} ${lastName}` }
console.log(printFullName('yourname','Yourlast'))

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway','Denmark', 'Iceland']
console.log(changeToUpperCase(countries))