const BUTTON = document.querySelectorAll('button');
const BODY = document.querySelector('body'); const FILTER = document.querySelector('select');
const OPTION = document.querySelector('option');
const IMG = document.querySelectorAll('img');


FILTER.addEventListener('change', filterfunc );
BUTTON.forEach(each => each.addEventListener('click', displayImage));

function filterfunc(){
    let filterValue = event.target.value;
    IMG.forEach(each => {
        if(filterValue === "All"){
            each.parentElement.style.display = "flex";
        }
        else{
            if(each.src.includes(filterValue.toLowerCase())){
                each.parentElement.style.display = "flex";
            }
            else{
                each.parentElement.style.display = "none";
            }
        }
    });
}
function displayImage(){
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('display');
    const button = event.target;
    const imageSrc = button.parentElement.firstElementChild.src;
    let image = document.createElement('img');
    image.src = imageSrc;
    image.classList.add('display-image');
    imageContainer.appendChild(image)
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    imageContainer.appendChild(closeButton);
    closeButton.classList.add('close');
    BODY.appendChild(imageContainer);
    closeButton.addEventListener('click', closeImage);
    function closeImage(){
        this.parentElement.remove();
    }
}
