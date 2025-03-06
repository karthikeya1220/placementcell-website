function dd_toggle(){
    var state=document.getElementById("dd-content");
    console.log(state.style.display);
    var mode= window.getComputedStyle(state).display;
    if(mode=="none"){
        state.style.display="flex";
        var height=state.clientHeight;
        console.log(height);
        var spacing=document.getElementById("spacing");
        // spacing.style.margin=String(state.clientHeight)+"px 0 0 0";
    }
    else{
        state.style.display="none";
        var height=state.clientHeight;
        console.log(height);
        var spacing=document.getElementById("spacing");
        // spacing.style.margin=String(state.clientHeight)+"px 0 0 0";
    }
}