require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('build'))
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
const Person = require('./models/person')

app.get('/info', (req, res) => {
    Person.count({})
        .then(count => {
            res.send(`<p>Phonebook has info for ${count} people</p>
        <p>${new Date().toString()}</p>`)
        })
})


app.get('/api/persons', (req, res) => {
    Person.find({}).then(people => {
        res.json(people.map(person => person.toJSON()))
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        if (person) {
            res.json(person.toJSON())
        } else {
            res.status(404).end()
        }
    }).catch(error => { next(error) })
})


app.delete('/api/persons/:id', (req, res, next) => {
    console.log('DELETE')
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        }).catch(error => next(error))

})


app.post('/api/persons/', (req, res, next) => {
    const body = req.body
    console.log(req.body);

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person
        .save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
            res.json(savedAndFormattedPerson)
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    console.log('PUT')
    const body = req.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true, context: 'query' })
        .then(updatedPerson => {
            res.json(updatedPerson.toJSON())
        }).catch(error => next(error))
})

const unknownEndpoint = (req, res, next) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    console.log(error.name)
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})