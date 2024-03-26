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
    
    currentProject.children[1].classList.remove('md:h-0');
    currentProject.children[1].classList.add('md:h-full');

    currentProject.children[1].classList.add('md:top-0');
    currentProject.children[1].classList.remove('md:-top-40');
}

const CloseProjectDetails = (currentProject) => {

    currentProject.children[1].classList.remove('md:h-full');
    currentProject.children[1].classList.add('md:h-0');

    currentProject.children[1].classList.add('md:-top-40');
    currentProject.children[1].classList.remove('md:top-0');
}
