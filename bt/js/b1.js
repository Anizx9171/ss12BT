let n = +prompt("Nhập vào một số")
let sum = 0;
if (n > 0){
    for (let i = 0; i < n; i++) {
        sum += i
    }
    console.log(sum);
}