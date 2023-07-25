let n = +prompt("Nhập vào")
let a = 0;
let b = 1;
for (let i = 0; i < n; i++) {
    if (i==0) {
        console.log(a)
    }
    else if (i==1) {
        console.log(b)
    }
    else{
        let c = a+b
        a = b
        b = c
        console.log(c)
    }
    
}