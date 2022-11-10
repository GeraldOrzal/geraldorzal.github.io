const projects = [
    {
        title:"Capstone Project",
        desc:"This system is a logistic type of system that handles the monitoring and managing the client drivers.A system consist of two application a web and mobile app. This one is a web app that has these features:",
        list:"<ul><li>Tracking the geolocation of drivers</li><li>Monitor the messages that has been sent by the mobile app</li><li>Creating and Dispatching of schedule to mobile app</li><li>Can be able to send notifications to the mobile app</li></ul>",
        techstack:[
            "./assets/svg/nextjs.svg",
            "./assets/images/javascript.png",
            "./assets/svg/supabase.svg"
        ],
        img:"project1.png"

    },
    {
        title:"Science Project",
        desc:"This is not a system but my science project that promotes the preservation of the environment to combat the effects of climate change",
        list:"<ul><li>Has a mini game</li><li>Masking effect</li></ul>",
        link:"https://scienceproj.vercel.app/",
        techstack:[
            "./assets/images/javascript.png",
            "./assets/svg/pixijs.svg"
        ],
        img:"project2.png"

    }
    
]

const projectElem = document.getElementById("projects");
const contData = document.getElementById("data");
projects.forEach((data)=>{
    const img = document.createElement("img");
    img.src = `./assets/images/${data.img}`;
    img.classList.add("allProjects");
    projectElem.append(img);
    img.addEventListener("mouseover",(elem)=>{
        document.getElementById("default").style.left = "-100%";
        ChangeData(data.title,data.desc,data.techstack,`./assets/images/${data.img}`,data.list);
        contData.style.opacity = 1;
    })
    img.addEventListener("mouseleave",()=>{
        document.getElementById("default").style.left = "0%";
        contData.style.opacity = 0;
        contData.style.zIndex = -1;
        $('#tech').empty();
    })
});
function ChangeData(title,desc,techstack,image,list){
    document.getElementById("image").src=image;
    document.getElementById("title").textContent = title;
    const description = document.getElementById('desc');
    description.textContent = desc;
    $('#desc').append(list);
    const cont = document.getElementById("tech");
    techstack.forEach((data)=>{
        const img = document.createElement("img");
        img.src = data;
        img.style.height = "30px";
        img.style.backgroundColor="white";
        img.style.padding = "5px";
        img.style.borderRadius = "5px"
        cont.append(img);
    })
}
// const allImages = document.getElementsByClassName("allProjects");
// for (let index = 0; index < allImages.length; index++) {
//     const element = allImages[index];
    
// }
// console.log(allImages);




