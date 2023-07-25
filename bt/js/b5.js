// let n = +prompt("Nhập vào bảng cửu chương bạn muốn xem")
// if (n < 10 && n > 2) {
//   for (let i = 1; i <= 10; i++) {
//     if (i == n) {
//         let std = ""
//         for (let j = 1; j <= 10; j++) {
//            console.log(`${i} x ${j} = ${i * j}`)
//         }
//         }
//     }
// }

let a;
do {
    a = +prompt(`Nhập vào một số từ 1 đến 9:`)
}while(a<1 || a>9)
let b;
for (i=1; i <=10; i++){
    b = a * i;
    console.log(`${a}x${i}=${b}`)
}