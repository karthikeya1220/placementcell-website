function open_dd(id,title_id,rotate_icon,degree){
    // console.log(id,title_id,rotate_icon);
    var state=document.getElementById(id);
    // console.log(state.style.display);
    var mode= window.getComputedStyle(state).display;
    if(mode=="none"){
        state.style.display="flex";
        document.getElementById(rotate_icon).style.transform="rotate("+degree+"deg)";
        document.getElementById(rotate_icon).style.color="var(--custom-light)";
        document.getElementById(title_id).style.color="var(--custom-light)";
    }
    else{
        state.style.display="none";
        document.getElementById(rotate_icon).style.transform="rotate(0deg)";
        document.getElementById(rotate_icon).style.color="var(--custom-nav-color)";
        document.getElementById(title_id).style.color="var(--custom-nav-color)";
    }
}
window.onload=function(){
    var x= document.getElementsByClassName("top-navbar")[0].clientHeight
    document.getElementById("in-spacing").style.marginTop=String(x)+"px";
}