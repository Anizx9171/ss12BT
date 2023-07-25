let n = +prompt("Nhập vào số n")
let sum = 1
if (n > 0){
    for (let i = 1; i < n; i++) {
    sum *= i
    }
    console.log(sum);
}