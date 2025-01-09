const { randomize } = require("./utils.js")

const createRivers = () => {
    const rivers = Math.floor(Math.random() * 3) + 1 //3 max
    return rivers
}

const createMountains = () => {
    const mountains = Math.floor(Math.random() * 2) + 1 //2 max
    return mountains
}

const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1 //2 max
    return forests
}

const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1 //4 max
    return plains
}

const journeyMaker = () => {
    const journey = []

    const areas = {
        rivers: createRivers(), //3
        forests: createForests(), //2
        mountains: createMountains(), //2
        plains: createPlains() //4
    }

    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) { //loops max 3 times
        journey.push("river")
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) { //loops max 2 times
        journey.push("forest")
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountains; mountainNumber++) { // loops max 2 times
        journey.push("mountain")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) { // loops max 4 times
        journey.push("plain")
    }

    return randomize(journey)
}

module.exports = {
    createRivers, createForests,
    createMountains, createPlains,
    journeyMaker
}