var headImage = document.querySelector("#image");
const icon = document.querySelector("#item");

function HideImage(){
    headImage.classList.add("hidden");
}
function Open(){
    icon.classList.remove("hidden");
}
function Close(){
    icon.classList.add("hidden");
}