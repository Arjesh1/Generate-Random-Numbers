function pick() {
    let result = document.getElementById("result")
    let min = document.getElementById("minValue").value
    let max = document.getElementById("maxValue").value
    if (min && max) {
        if (min > max) {
            let a1 = min
            let a2 = max
            max = a1
            min = a2
        }
        min = Math.ceil(min)
        max = Math.ceil(max) + 1
        resultFinal = Math.floor(Math.random() * (max - min)) + min
        result.innerHTML = resultFinal
    }
}
