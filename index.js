
//fill in the circle whenever the slide is changed
//make a function to cycle through the array automatically




const img0 = new Image();
img0.src="./images/FD97CB56-D825-4E4E-8DB4-6157661138E5_1_105_c.jpeg";
const img1= new Image();
img1.src="images/C15FBB18-1CB1-4C36-860E-532B9B46CD50.jpeg";
const img2= new Image();
img2.src="images/ACA3A04C-77CE-405B-BBC2-902AE6936E97_1_105_c.jpeg";
const img3 = new Image();
img3.src="images/73B6C093-0F82-41F1-895E-BD88E6BA5397_1_105_c.jpeg";
const img4 = new Image();
img4.src="images/45BA2D6A-8EDC-4794-AC1F-02FD10F9E49F_1_105_c.jpeg"
const img5 = new Image();
img5.src="images/7A3458BD-8F8F-4578-A499-4FCCD093BD7D.jpeg";

const imageArray = [img0, img1, img2, img3, img4, img5];
const next= document.querySelector('#next');
const prev = document.querySelector('#prev');


let currentIndex = 0;

const slider = document.querySelector('.slider');

slider.style.backgroundImage = `url(${img0.src})`;

const createImageNav = function(){
    const navigation = document.querySelector('#navigation');
    for(let i = 0; i<imageArray.length; i++){
        //create circle button
        let btn = document.createElement('div');
        btn.classList.add('circle');
        btn.dataset.index=i;
        navigation.appendChild(btn);
        btn.addEventListener('click', ()=>{
            slider.style.backgroundImage=`url(${imageArray[parseInt(btn.dataset.index)].src})`
        })
        
    }
}

createImageNav()


const nextPicture = function(){
    const nav = document.querySelectorAll('.circle');
    if(currentIndex===imageArray.length-1){
        currentIndex=0;
    }else{
        currentIndex+=1
    }
    slider.style.backgroundImage=`url(${imageArray[currentIndex].src})`
    nav.forEach((btn)=>{
        if(parseInt(btn.dataset.index)===currentIndex){
            btn.classList.add('active');
        }else{
            btn.classList.remove('active');
        }
       
       
    })

    

}

const prevPicture = function(){
    const nav = document.querySelectorAll('.circle');
    if(currentIndex===0){
        currentIndex=imageArray.length-1;
    }else{
        currentIndex-=1;
    }
    slider.style.backgroundImage=`url(${imageArray[currentIndex].src})`
    nav.forEach((btn)=>{
        if(parseInt(btn.dataset.index)===currentIndex){
            btn.classList.add('active');
        }else{
            btn.classList.remove('active');
        }
    })
}

next.addEventListener('click', nextPicture);
prev.addEventListener('click', prevPicture);






//automatic slideshow function
function slideshow(){
    nextPicture()
    setTimeout(slideshow, 1000)
}


//slideshow()