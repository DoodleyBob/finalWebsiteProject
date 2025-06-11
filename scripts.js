function visibilityToggle(){
    const element = document.getElementById("visiText");
    if(element.style.visibility === "hidden" || element.style.visibility === "") {
        element.style.visibility = "visible";
        element.style.opacity = "1";
    } else {
        element.style.visibility = "hidden";
        element.style.opacity = "0";
    }
}