let userName = prompt("Mời nhập user");
if (userName == "Hai"){
    let passWord=prompt("Nhập passcode:");
    if(passWord == "deptrai"){
        alert("Wellcome Boss");
    }else{
        alert("Sai pass rồi nhập lại đi");
    }
}else if(userName == null){
    alert("Không nhập thì thôi!");
}else{
    alert("Cậu là ai, mình không biết cậu, cậu đi ra đi");
}