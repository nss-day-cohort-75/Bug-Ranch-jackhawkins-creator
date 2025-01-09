const { database } = require("./database.js")

const hireDrovers = (herdSize) => { // remember, we're inputting a number in here - 50
    const drovers = []
    const allDrovers = database.drovers // indexes the drover object array
    const numberNeeded = herdSize / 10 // ERROR: should not be cattleToDrive; they're not inputting the parameter; fixed to herdSize

    for (let counter = 0; counter < numberNeeded; counter++) { //in this case numberNeeded is 5, so we cycle through 5 times
        const randomHerderId = Math.floor(Math.random() * allDrovers.length) // max 49
        drovers.push(allDrovers[randomHerderId]) // Basically, we're trying to pick 5 random herders for the job based on their id values
    }
    return drovers
}

module.exports = { hireDrovers }