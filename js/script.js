var hcounter = 0;
let isRemoverRunning = false;
let interval0;
let interval1;
let allIsRemove = false;
let backCounter = 0;

let alreadyTapped = false;

function HeartGenerator(x,y) {
   

    var heart = $(`<svg class="heart" style="left:${x * window.innerWidth - 100}px ;top:${y* window.innerHeight}px"

    xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><g fill="#fdcfdf" stroke-width="25" stroke="#fbbedf" id="heart"><path d="M400 200C731.0055871114243 -11.173184429161978 889.3854748672842 469.83241362899366 400 700 -89.38547486728423 469.83241362899366 68.99441288857565 -11.173184429161978 400 200Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`);             
    
    $('body').append(heart);
    
}




function remover(cb){
    interval1 = setInterval(x=>{
        
        if($('.heart').length==0){
            
            if(!allIsRemove){
                allIsRemove = true;
                clearInterval(cb);
                alreadyTapped = false;
                hcounter = 0;
                isRemoverRunning = false;
                clearInterval(interval1)
                
            }
            return;
        }
        $('.heart')[$('.heart').length-1].remove()
        
    },0.5)
    
}



function spawner(cb){
    interval0 = setInterval(x=>{
        allIsRemove = false;
        if(hcounter > 500){
            
            if($(".heart").length >= 450 && !isRemoverRunning){
                isRemoverRunning= true;
                cb();
                remover(interval0)
            }
            return;
        }
        
        setTimeout(()=>{
            var x = Math.random(1)
            var y = Math.random(1)
            HeartGenerator(x,y);    
            
        },1000)
        hcounter+=1;
    },5)

    
}

function SpawnFlower(posX,posY){
    var flower = `<div class="f-wrapper--2"
    >
                
                <div class="flower__line"></div>
                
                <div class="f">
                    
                    <div class="flower__leaf flower__leaf--1"></div>
                    <div class="flower__leaf flower__leaf--2"></div>
                    <div class="flower__leaf flower__leaf--3"></div>
                    <div class="flower__leaf flower__leaf--4"></div>
                    <div class="flower__leaf flower__leaf--5"></div>
                    <div class="flower__leaf flower__leaf--6"></div>
                    <div class="flower__leaf flower__leaf--7"></div>
                </div>
                
            </div>`;
    $('.garden').append(flower);
}

let x = 0;
let text1= "She had a high pitch voice that makes it stand out even in a crowd. Others may hate it but i loved it and if she let me record it, i would loved to hear it everyday."
let text2 = "She's a smart girl no boy could easily breaks her wall. Lucky for you if she'll let you (*I envy you*)"
let text3 = "For me she's like an idol (second to Mina HAHAHAHA). She got looks and talent as well, i can't believe she nailed the competition for muses (*YOU MUST BE THE CHAMPION*).";
let text4 = "She got a smile that can brightens my day. I'm so sorry if i make my way to see you because i wanted to witness this firsthand."
function animate1() {
    if(x < text1.length){
        document.getElementById("effect1").innerHTML += text1.charAt(x);
        x++;
        setTimeout(animate1, 80);
    }
}
function animate2() {
    if(x < text2.length){
        document.getElementById("effect2").innerHTML += text2.charAt(x);
        x++;
        setTimeout(animate2, 80);
    }
}
function animate3() {
    if(x < text3.length){
        document.getElementById("effect3").innerHTML += text3.charAt(x);
        x++;
        setTimeout(animate3, 80);
    }
}
function animate4() {
    if(x < text4.length){
        document.getElementById("effect4").innerHTML += text4.charAt(x);
        x++;
        setTimeout(animate4, 80);
    }
}



function clickedFly(flyClass) {
    
    if(!alreadyTapped){
        alreadyTapped = true;
        switch (flyClass) {
            case ".fly-1":
                $(flyClass).addClass('fly1Move')       
                setTimeout(()=>{
                    spawner(()=>{
                        $('.pic3').css({display:"flex"})
                        //animate3();
                    })
                 },1500)
                break;
            case ".fly-4":
                $(flyClass).addClass('fly4Move')       
    
                setTimeout(()=>{
                    spawner(()=>{
                        $('.pic4').css({display:"flex"})
                        
                        //animate4();
                    })
                 },1500)
                break;
            case ".fly-2":
                $(flyClass).addClass('fly2Move')       
                setTimeout(()=>{
                    spawner(()=>{
                        
                        $('.pic1').css({display:"flex"})
                        //animate1();
                    })
                 },1500)
                break;
            case ".fly-3":
                $(flyClass).addClass('fly3Move')
                setTimeout(()=>{
                    
                    spawner(()=>{
                        $('.pic2').css({display:"flex"})
                        //animate2();
                        
                    })
                 },1500)
                break;
            default:
                break;
        }
    }
     
     
}



function BackToMain(params) {
    x = 0;
    switch (params) {
        case ".pic1":
            $('.pic1').css({display:"none"})
            $('.star').css({display:"block"})        
            break;
        case ".pic2":
            $('.pic2').css({display:"none"})
            $('.star1').css({display:"block"})        
            break;
        case ".pic3":
            $('.pic3').css({display:"none"})
            $('.star2').css({display:"block"})        
            break;
        case ".pic4":
            $('.pic4').css({display:"none"})
            $('.star3').css({display:"block"})        
            break;
        
        default:
            break;
    }
    backCounter++;
    if(backCounter==4){
        
        let opacity = 0;        
        $('.crown').css({display:"block"})
        $('.title').text("You dropped your crown my Queen!!")
        $('.message').css({display:"block"})
        setTimeout(async ()=>{
            $('.title').text("Shake your phone")
            const myShakeEvent = new Shake({
                threshold: 0.3, // optional shake strength threshold
                timeout: 1000, // optional, determines the frequency of event generation
                handler: () => // required, called when shake is detected
                {
                    opacity++;
                    $('.message').css({opacity: opacity})
                    console.log('Shake detected !');
                }
            });
            const approved = await myShakeEvent.start();

        },5000)
        setTimeout(()=>{
            $('.lights').css({display:"block"})    
            var audio = new Audio('./audio/audio1.mp3')
            audio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            audio.play();
        },2000);

    }
    
    


}
// ;

// let x = 0;
// function animate(text,elem){
//     if(x < text.length){
//         elem.append(document.createTextNode(text.charAt(x)))
//         x++;
//         setTimeout(animate(text,elem), 1000);
//     }
// }



this.onload = () =>{
    
 
    


    
    
   
 //   animate(text1,$('.p1'))
    
    
    $('input').keypress(e=>{
        
        if(e.keyCode==13 && $('#openerInput').val()=="💓"){
            $('#opener').hide()
            spawner(()=>{
                setTimeout(()=>{
                    $('body').css({backgroundColor:"#1a233a"})
                    $('.main').css({display:"block"})
                },2000)
            })
            
        }
    })
    

    





    
}
