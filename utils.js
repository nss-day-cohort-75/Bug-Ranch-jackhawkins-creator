const randomize = (array) => {
    return array.sort(() => Math.random() - 0.5) //returns randomized order of a given array
}

module.exports = { randomize }
