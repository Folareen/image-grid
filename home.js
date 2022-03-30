

// display images
const BUTTON = document.querySelectorAll('button');
const BODY = document.querySelector('body');
// const FILTER = document.querySelector('select');
// const OPTION = document.querySelector('option')

// FILTER.addEventListener('change', filterfunc );

// function well(){
//     alert('it works!!')
// }

// function filterfunc(){
    // console.log(FILTER);
    // let filterValue = FILTER.V
    // console.log(OPTION.)
    // filter.forEach(a => console.log(a.value)); 
// }
// filter.forEach(option => {
//     switch (option){
//         case "landscape":
//             console.log(option);
//     }
// }); 


BUTTON.forEach(each => each.addEventListener('click', displayImage))


function displayImage(){
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('display');
    const imageSrc = this.parentElement.firstElementChild.src;
    let image = document.createElement('img');
    image.src = imageSrc
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
        console.log(this.parentElement);
        console.log(image)
    }
}
