function addNumbers() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    a = Number(a);
    b = Number(b);

    let sum = a + b;

    document.getElementById("result").innerHTML = sum;
}