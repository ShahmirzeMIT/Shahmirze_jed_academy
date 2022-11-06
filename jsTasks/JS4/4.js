function show(callback) {
    let eded = +prompt('edediniz daxil edin')
    let ust = +prompt('quvveti dxil edin')
    let netice = result(eded, ust)
    callback(netice)
}

function result(eded, ust) {
    return Math.pow(eded, ust)
}

show(function(_netice) {
    console.log(_netice)
})