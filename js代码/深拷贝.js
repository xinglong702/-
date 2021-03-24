function deepClone(target) {
    let res
    if (Object.prototype.toString.call(target) === '[object Object]') {
        res = {}
    } else if (Array.isArray(target)) {
        res = []
    } else {
        return target
    }

    console.log(target.keys())
}

deepClone([1, 2, 2])
