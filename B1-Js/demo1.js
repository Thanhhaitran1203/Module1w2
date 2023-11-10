// function show() {
//     alert('xin chao');
// }
// let person = prompt("Mời bạn nhập tên của mình", "Harry Potter");
// let text;
// if (person == null || person == "") {
//     text = "Buồn quá, bạn không muốn nhập tên!";
// } else {
//     text = "Xin chào " + person + "!";
// }
// document.write(text);
let diemtoan = prompt('diem toan');
let diemly  = prompt('diem ly');
let diemhoa = prompt('diem hoa');
let diemtb = (Number(diemtoan) + Number(diemly) + Number(diemhoa)) / 3;
alert("diem trung binh:" + diemtb);
console.log(diemhoa);
document.write(diemtb.toFixed(1));
// let diemToan = prompt("Mời nhập điểm Toán");
// let diemVan = prompt("Mời nhập điểm Văn");
// let diemAnh = prompt("Mời nhập điểm Anh");
//
// // Ép kiểu từ String sang Number
// let diemTrungBinh = (Number(diemToan) + Number(diemVan) + Number(diemAnh)) / 3;
//
// // Lấy chữ số thập phân đầu tiên sau dấu phẩy
// console.log(diemTrungBinh.toFixed(1));