function Chuyendoi() {
    let sotien = document.getElementById('st').value;
    let FormM = document.getElementById('Form').value;
    let ToM  =   document.getElementById('To').value;
    let Result;
    if (FormM == "vnd"){
        if (ToM == 'usd'){
            Result = "Result:" + (sotien) / 23000 + " USD";
        }
        else if (ToM == 'ndt'){
            Result = "Result:" + (sotien) / 3300 + " Tệ";
        }
        else{
            Result = "Result:" + (sotien) + " VND";
        }
    }
    else if (FormM == 'usd'){
        if (ToM == 'vnd'){
            Result = "Result:" + (sotien) * 23000 + " USD";
        }
        else   if (ToM == 'ndt'){
            Result = "Result:" + (sotien) * 23000 / 3300 + " Tệ";
        }
        else{
            Result = "Result:" + (sotien)+ " USD";
        }
    }
    else if (FormM == 'ndt'){
        if (ToM == 'usd'){
            Result = "Result:" + (sotien) * 3300 / 23000 + " USD";
        }
        else if (ToM == 'vnd'){
            Result = "Result:" + (sotien) * 3300 + " VND";
        }
        else {
            Result = "Result:" + (sotien) + " Tệ";
        }
    }
    document.getElementById('Result').innerHTML= Result;
}
