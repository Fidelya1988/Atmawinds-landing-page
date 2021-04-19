const images = document.querySelectorAll('.carousel-images_item');
let i = 0;
// images[i].style.display = 'none'; 
i++;
if (i >= images.length) {
    i = 0;
}



const moveImg = () => {
   
    
 images[i].style.display = 'none';
    
    i = i - 1;
    
    
    if (i < 0) {
        i = images.length - 1;
    }
    
    images[i].style.display = 'block';
    
}

setInterval(moveImg, 4000);
