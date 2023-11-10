function show() {
    alert('xin chao');
}
let person = prompt("Mời bạn nhập tên của mình", "Harry Potter");
let text;
if (person == null || person == "") {
    text = "Buồn quá, bạn không muốn nhập tên!";
} else {
    text = "Xin chào " + person + "!";
}
document.write(text);
