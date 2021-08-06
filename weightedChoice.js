function weightedChoice(weightedElements) {
    const weightSum = weightedElements.reduce((sum, e) => sum + e[1], 0)
    let choice = Math.floor(Math.random() * weightSum) + 1
    let idx = weightedElements.length - 1
    while ((choice -= weightedElements[idx][1]) > 0) {
      idx -= 1
    }
    return weightedElements[idx][0]
}

export { weightedChoice }
