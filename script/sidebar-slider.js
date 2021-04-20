const pages = document.querySelectorAll('.slider-page');
const arrowRigth = document.querySelector('.arrow-left');
const arrowLeft = document.querySelector('.arrow-right');

let j = 0;
pages[j].style.display = 'block';
j++;

if (j >= pages.length) {
    j = 0
}

const moveRight = () => {

    pages[j].style.display = 'none';

    j = j - 1;

    if (j < 0) {
        j = pages.length - 1;

    }
    pages[j].style.display = 'block';


}

const moveLeft = () => {
    pages[j].style.display = 'none';

    j = j + 1;

    if (j >= pages.length) {
        j = 0;

    }
    pages[j].style.display = 'block';
    console.log(j)
}

arrowRigth.addEventListener('click', () => {
    moveRight();



})
arrowLeft.addEventListener('click', () => {
    moveLeft(); 
})


