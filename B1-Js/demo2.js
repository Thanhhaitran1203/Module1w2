let demo = document.getElementById("demo");
    demo.addEventListener("mouseout",mouseout);
    demo.addEventListener("mouseover",mouseover);
function mouseout(){
    document.getElementById("demo").style.color="black";
}
function mouseover() {
    document.getElementById("demo").style.color="red";
}
function showinput() {
    var name = document.getElementById("name");
    var show = document.getElementById("show");
    show.innerHTML = name.value;
}