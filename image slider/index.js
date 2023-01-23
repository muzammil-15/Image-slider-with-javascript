let slides = document.getElementsByClassName('slide');

let flag = 0 ;

function controler(x){
    flag = flag + x ;
    if(flag==slides.length){
        flag=0
    }else if(flag<0){
        flag = slides.length -1
    }
    slideshow(flag)
}

slideshow(flag)

function slideshow(num){
    for(let i of slides){
       i.style.display = "none"
    }
    slides[num].style.display = "block";
}