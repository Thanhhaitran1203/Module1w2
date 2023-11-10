function findLeapYear() {
let year = document.getElementById('year').value;
    if (year % 4 == 0){
        if(year %100 == 0) {
            if (year%400 == 0){
                alert("Năm "+year+"là năm nhuận");
            }else{
                alert("Năm "+year+"không là năm nhuận");
            }
        }else{
            alert("Năm "+year+"là năm nhuận");
        }
    }else {
        alert("Năm "+year+"không là năm nhuận");
    }
}
