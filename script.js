const imagemodal = document.querySelector('.modal');
const image = document.getElementById('modalImage');
const closebtn = document.querySelector('.close');
const  prevbtn = document.querySelector('.prev')
const nextbtn =  document.querySelector('.next');
const galleryImages = document.querySelectorAll('.gallery img');

let currIndex = 0;

galleryImages.forEach((img ,index)=>{
img.addEventListener('click', ()=>{
imagemodal.style.display = 'flex';
image.src = img.src;
currIndex = index;
});
});

///CLOSE BTN
closebtn.addEventListener('click' , ()=>{
    imagemodal.style.display= 'none';
})

///PREV BTN
prevbtn.addEventListener('click' , ()=>{
    currIndex = (currIndex-1 + galleryImages.length)%galleryImages.length;
    image.src = galleryImages[currIndex].src;
})

///NEXT BTN
nextbtn.addEventListener('click' , ()=>{
    currIndex = (currIndex + 1)%galleryImages.length;
    image.src = galleryImages[currIndex].src;
});

/// CLOSE MODAL
imagemodal.addEventListener('click' , (event)=>{
 if(event.target === imagemodal){
    imagemodal.style.display = 'none';
 };
});



















































