console.log("One more hour, you can do it!")

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((sentence, currentWord) => sentence += ` ${currentWord}`)

console.log(sentence)