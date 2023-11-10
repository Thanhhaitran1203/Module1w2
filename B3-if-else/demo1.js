let a =6;
let b =3;
let opera = prompt("nhap phep tinh");
switch (opera) {
    case "+":
        alert("a+b="+(a+b));
    break;
    case "-":
        alert("a-b="+(a-b));
    break;
    case "*":
        alert("a*b="+(a*b));
    break;
    case "/":
        alert("a/b="+(a/b));
    break;
    default:
        alert("khong co phep tinh nao");
        break;
}