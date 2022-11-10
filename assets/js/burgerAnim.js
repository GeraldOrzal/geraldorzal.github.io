const nav = document.getElementsByClassName("nav");
document.getElementById("burger").addEventListener('click',()=>{
    nav[0].style.left = "0%";
})
document.getElementById("arrow").addEventListener('click',()=>{
    nav[0].style.left = "-100%";
});