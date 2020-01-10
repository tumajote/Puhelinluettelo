const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}
const password = process.argv[2]
const url = `mongodb+srv://tumajote:${password}@cluster0-cqaqg.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`
console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] && process.argv[4]) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })

    person.save().then(() => {
        console.log(`added ${person.name} number ${person.number} to puhelinluettelo`)
        mongoose.connection.close()
    })

} else {
    Person.find({}).then(result => {
        console.log('puhelinluettelo:')
        result.forEach(person => console.log(person.name, person.number))
        mongoose.connection.close()
    })
}