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

const OpenProjectDetails = (currentProject) => {
    
    currentProject.children[1].classList.remove('h-0');
    currentProject.children[1].classList.add('h-full');

    currentProject.children[1].classList.add('top-0');
    currentProject.children[1].classList.remove('-top-40');
}

const CloseProjectDetails = (currentProject) => {

    currentProject.children[1].classList.remove('h-full');
    currentProject.children[1].classList.add('h-0');

    currentProject.children[1].classList.add('-top-40');
    currentProject.children[1].classList.remove('top-0');
}
