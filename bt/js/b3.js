let a = +prompt("Nhập vào một số")
let sum = 0;
if (a>0) {
    for (let i = 1; i < a; i++) {
        sum += 1/i
    }
    console.log(sum);
}