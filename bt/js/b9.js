let t;
let h = 0;
let f = 0;
let g = 0;
let x = 0;
do {
    t = +prompt("Nhập số")
}while (t % 50000 != 0);

while(t>0){
    if (t >= 500000) {
        t -=500000
        h++
    }
    else if (t >= 200000){
        t -=200000
        f++
    }
    else if (t >= 100000){
        t -=100000
        g++
    }
    else {
        t -=50000
        x++
    }
}

console.log(`500000 - ${h}`);
console.log(`200000 - ${f}`);
console.log(`100000 - ${g}`);
console.log(`50000 - ${x}`);