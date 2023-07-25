let a = +prompt("Nhập vào một số")
let sum = 0;
if (a > 1) {
    for (let i = 2; i < a; i++) {
        sum += (1/(i-1)*(1/i))
    }
    console.log(sum);
}