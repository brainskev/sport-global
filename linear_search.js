function linear_search(list, target) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target)
            return i
    }
    return null;
}

function verify(index) {
    if (index !== null) {
        console.log("Target found at index", index)
    } else console.log("Target not found in list")

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = linear_search(numbers, 17)
verify(result)

