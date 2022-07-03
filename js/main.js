class Slider{
    constructor({wrapper,elements,speed=1000,activeSlides='fadeIn',startSlides='fadeOut',endSlides='fadeOut2'}){
    this.wrapper=document.querySelector(wrapper);
    this.elements=this.wrapper.querySelectorAll(elements);
    this.speed=speed;
    this.activeSlides=activeSlides;
    this.startSlides=startSlides;
    this.endSlides=endSlides;
    this.currentSlide=0;

    }
    autoPlaySlide(){

       this.prevSlide(this.currentSlide);

        this.currentSlide++;

        if(this.currentSlide>=this.elements.length)
        {
            this.currentSlide=0;
        }
        this.nextSlide(this.currentSlide);
         
    }
    prevSlide(index){
        this.elements[index].classList.remove(this.activeSlides);
        this.elements[index].classList.add(this.endSlides);
        setTimeout(()=>{
            this.elements[index].classList.remove(this.endSlides);
            this.elements[index].classList.add(this.startSlides);

            },500);
    }
    nextSlide(index){
        this.elements[index].classList.remove(this.startSlides);
        this.elements[index].classList.add(this.activeSlides);
    }

    startSlide(){

        setInterval(this.autoPlaySlide.bind(this),this.speed);

    }
    defaultSettings(){
        let style=document.createElement('link');
        style.setAttribute('rel','stylesheet');
        style.setAttribute('href','css/slider.css');
        document.head.append(style);
        this.elements.forEach(item => item.classList.add(this.startSlides));
        this.elements[0].classList.remove(this.startSlides);
        this.elements[0].classList.add(this.activeSlides);

    }
    init(){
        // console.dir(this);
        this.defaultSettings();
      //  this.startSlide();
      let prev=document.querySelector('.prev');
      prev.addEventListener('click',()=>{
        this.prevSlide(this.currentSlide);
            this.currentSlide--;

            if(this.currentSlide<0)
            {
                this.currentSlide=0;
            }
            this.nextSlide(this.currentSlide);

       
      })
        let next=document.querySelector('.next');
        next.addEventListener('click',()=>{
            this.prevSlide(this.currentSlide);
            this.currentSlide++;

            if(this.currentSlide>=this.elements.length)
            {
                this.currentSlide=0;
            }
            this.nextSlide(this.currentSlide);

        })
    }
}

let param={
    wrapper:'.slider__items',
    elements:'.slider__item',
    speed:2000,
    // activeSlides:'moveIn',
    // startSlides:'moveOut',
    // endSlides:'moveOut2'
     activeSlides:'moveActive',
     startSlides:'moveUp',
     endSlides:'moveDown'
}
let slider=new Slider(param);
slider.init();