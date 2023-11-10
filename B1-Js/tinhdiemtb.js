let diemtoan = prompt('diem toan');
let diemly  = prompt('diem ly');
let diemhoa = prompt('diem hoa');
let diemtb = (Number(diemtoan) + Number(diemly) + Number(diemhoa)) / 3;
alert("diem trung binh:" + diemtb);
console.log(diemhoa);
document.write(diemtb.toFixed(1));