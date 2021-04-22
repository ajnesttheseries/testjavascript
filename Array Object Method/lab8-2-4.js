const person = {
    firstName: 'Aj.NesT',
    lastName: 'the Series',
    age: 33,
    country: 'Thailand',
    city: 'Bangkok',
    skills: [
        'HTML',
        'JavaScript',
        'React',
        'Node',
        'Python',
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '0895369999'
}
// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.country)
console.log(person.city)
console.log(person.skills)
// accessed using square bracket
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['country'])
console.log(person['city'])
console.log(person['skills'])
console.log(person['phone number'])
// access function
console.log(person.getFullName())