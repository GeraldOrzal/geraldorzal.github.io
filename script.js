let multiplier = -0.7
let bg = document.getElementsByClassName("tblock")
let bg1 = document.getElementsByClassName("sblock")
let quote = document.getElementById("quote");
let midbg = document.getElementsByClassName("midbg");
let bg3 = document.body;

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

card1.addEventListener("mouseover",()=>{
    
    
    midbg[0].classList.add("animbg");
})
card1.addEventListener("mouseleave",()=>{
    midbg[0].classList.remove("animbg");
})

card2.addEventListener("mouseover",()=>{
    
    
    midbg[1].classList.add("animbg");
})
card2.addEventListener("mouseleave",()=>{
    midbg[1].classList.remove("animbg");
})
card3.addEventListener("mouseover",()=>{
    
    
    midbg[2].classList.add("animbg");
})
card3.addEventListener("mouseleave",()=>{
    midbg[2].classList.remove("animbg");
})

$(window).scroll(function() {
    
    
    
    
    if($(window).scrollTop() == 0) {
        
        document.getElementById("myNav").style.backgroundColor = "transparent";     
        document.getElementById("mypic").style.transform = `rotate(-20deg)`  
        

    }else{
        console.log("SCROLLING",$(window).scrollTop()+ $(window).height(),$(document).height())
        bg[0].style.opacity = "0";
        quote.classList.remove("animate");
        if($(window).scrollTop()+ $(window).height()>=1400){
            bg1[0].style.opacity = "1";
            bg3.style.backgroundImage = "none"
            
            
            
        }else{
            
            
            bg1[0].style.opacity = "0";    
        }
        if($(window).scrollTop()+ $(window).height() == $(document).height()){
            bg[0].style.opacity = "1";
            quote.classList.add("animate");
            console.log("reached end")
        }
        
        document.getElementById("mypic").style.transform = `rotate(0deg)`  
        document.getElementById("myNav").style.backgroundColor = "#1a1a1b69"
    }
    
    
    
});


