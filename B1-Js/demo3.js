
function input() {
    var diemtoan = +document.getElementById("diemtoan").value;
    var diemly = +document.getElementById("diemly").value;
    var diemhoa = +document.getElementById("diemhoa").value;
    let diemtb = (diemhoa + diemly + diemtoan) / 3;
    let tb = "diem tb:" +diemtb;
    document.write(tb);
    // document.getElementById('tb') = diemtb;
}
// function show(){
//     document.write("diem tb la " + diemtb);
// }