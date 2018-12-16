/*
    División Entera

    13 / 4
    13 - 4 = 9  1
    9 - 4 = 5   1
    5 - 4 = 1   1
    1 - 4 = -3  
*/
const divisionEntera = (dividendo, divisor) => {
    if (dividendo < divisor) {
        return 0;
    }
    return 1 + divisionEntera(dividendo - divisor, divisor);
}
// Memoización forma 1
function factorial(n) {
    if (n < 0) {
        return 'Entrada no válida, solo numeros positivos';
    }
    if (!this.cache) {
        this.cache = {};
    }
    if (this.cache[n]) {
        return this.cache[n];
    }
    if (n === 1 || n === 0) {
        this.cache[n] = 1;
        returnthis.cache[n];
    }
    this.cache[n] = n * factorial(n - 1);
    return this.cache[n];
}
//memoización funciones generadoras
function* countAppleSales() {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
        yield saleList[i];
    }
}
var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }