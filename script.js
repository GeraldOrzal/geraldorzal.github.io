let multiplier = -0.7
let bg = document.getElementsByClassName("tblock")
let bg1 = document.getElementsByClassName("sblock")
let quote = document.getElementById("quote");
$(window).scroll(function() {
    
    
    
    
    if($(window).scrollTop() == 0) {
        
        document.getElementById("myNav").style.backgroundColor = "transparent";     
        document.getElementById("mypic").style.transform = `rotate(-20deg)`  
        bg1[0].style.opacity = "0";

    }else{
        console.log("SCROLLING",$(window).scrollTop()+ $(window).height(),$(document).height())
        bg[0].style.opacity = "0";
        quote.classList.remove("animate");
        if($(window).scrollTop()+ $(window).height()>=747){
            bg1[0].style.opacity = "1";

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


