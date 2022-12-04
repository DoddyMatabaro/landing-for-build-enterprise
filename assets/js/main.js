(function (){

    const scrollY  = ()=>{
        const supportPageOffset = window.pageXOffset !== undefined;
        const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }


const element = document.getElementById("menu");
let rect = element.getBoundingClientRect();
let top = rect.top + scrollY()
let fake = document.createElement('div');
fake.style.width = rect.width + "px";
fake.style.height = rect.height + "px";

const onScroll = ()=> {
    const hasScrollClass = element.classList.contains('fixed');
    if(scrollY() > top && !hasScrollClass){
        element.classList.add('fixed');
        // element.style.width = rect.width + 'px';
        // element.style.alignSelf = 'center';
        element.style.justifySelf= "center"
        element.parentNode.insertBefore(fake, element);
    }else if(scrollY() < top && hasScrollClass){
        element.classList.remove('fixed');
        element.parentNode.removeChild(fake);
    }
}

const onResize = ()=>{
    element.style.width = 'auto';
    element.classList.remove('fixed');
    fake.style.display = 'none';
    rect = element.getBoundingClientRect();
    top = rect.top + scrollY();
    fake.style.width = rect.width + 'px';
    fake.style.height = rect.height + 'px';
    fake.style.display = "block";
    onScroll();
}

    window.addEventListener('scroll', onScroll);
    // window.addEventListener('resize', onResize);
})()