const events = require('../mocks/events')
const people = require('../mocks/people')

module.exports = {
    Query: {
        allEvents: () => new Promise(resolve => setTimeout(
            () => resolve(Object.values(events))
        , 500)),
        event: (_, { id }, context) => new Promise(resolve => setTimeout(
            () => resolve(events[id])
        , 500)),
    },
    Person: {
        id: ({ _id }) => _id
    },
    Event: {
        people: ({ peopleIds }) => peopleIds
            && peopleIds.map(id => people.find(person => person._id === id))
    }
}
