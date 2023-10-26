function binary_search(list, target) {
    let first = 0
    let last = list.length

    while (first <= last) {
        let midpoint = (first + last) / 2

        if (list[midpoint] === target) {
            return midpoint
        } else if (list[midpoint] < target) {
            first = midpoint + 1
        } else last = midpoint - 1;
    }
    return null

}

function verify(index) {
    if (index !== null) {
        console.log("Target found at index", index);
    } else console.log("Target not found in list")
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = binary_search(numbers, 6)
verify(result)