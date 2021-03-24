function climbStairs(n) {
    let p = 0, q = 0, r = 1
    for (let i = 0; i < n; i++) {
        p = q
        q = r
        r = p + q
    }
    return r
}

console.log(climbStairs(5))
