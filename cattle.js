const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes // gets our four cows array of objects (ids & breeds)

    for (let counter = 0; counter < herdSize; counter++) { //size not defined, so we do herdSize, will run 50 times
        let randomType = Math.floor(Math.random() * types.length) //max value 3
        let animal = types[randomType].breed // ERROR: This is giving us the OBJECT not the COW BREED - added .breed
        cattle.push(animal) // pushes a randomly indexed member of cattle into the cattle array - again, does this 50 times
    }

    return cattle
}

module.exports = { roundup }