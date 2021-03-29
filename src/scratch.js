const x = ["hello", "there", "bee"]
const y = "henlo"

// console.log(x.indexOf(y))

function arrayContains(arr, elem) {
    return arr.indexOf(elem) !== -1
}

console.log(
    arrayContains(x, y)
)