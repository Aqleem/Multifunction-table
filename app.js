function table() {

    var num1 = parseInt(document.querySelector("#num").value);
    for (i = 1; i <= 20; i++) {
        document.write(num1 + " X " + i + " = " + num1 * i + "<br>")
    }

}