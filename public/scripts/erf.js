fuction checkbox_validate(){
    var checkbox=document.getElementsByName("prefDate");
    var check=false;
    for(var i=0;i<checkbox.length;i++){
        if(checkbox[i].checked){
            check=true;
            break;
        }
    }
    
    if(check){return true;}
    else{return false;}
}