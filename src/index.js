module.exports = function reverse (n) {
    if (n < 0) { n = n * -1 }
    let num = String(n)
    let result = ''
    for (let i in num) {
        result = num[i] + result
    }
    return result
}
