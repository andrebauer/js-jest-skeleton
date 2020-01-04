function add(a, b) {
    return a + b
}




function max(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a
        } else {
            return c
        }
    } else {
        if (b > c) {
            return b
        } else {
            return c
        }
    }
}

let max2 = (a, b, c) => {
    if (a > b && a > c) return a
    if (a > b && c >= a) return c
    if (a <= b && b > c) return b
    if (a <= b && c >= b) return c
}

function max3() {
    return 3
}

module.exports = {
    add,
    max3
}