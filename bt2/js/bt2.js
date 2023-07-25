for (let i = 1; i <= 20; i++) {
    if(i == 1 || i == 20) {
        for(j = 1; j <= 100; j++) {
            document.write("*")
        }
    } else {
        for(j = 1; j <= 100; j++) {
            if ( j == 1 || j == 100) {
                document.write("*")
            } else {
                document.write(" ")
            }
        }
    }
    document.writeln()
}
