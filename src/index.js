import createHome from "./home.js";    
import menu from "./menu.js";
import contact from "./contactus.js"

createHome()
 
const menulink=document.getElementById("menu");
menulink.addEventListener('click',()=>{
    menu();
});
const home=documnet.getElementById("home")
home.addEventListener('click',()=>{
    createHome()
})

const contactus=document.getElementById("contactus");
contactus.addEventListener('click',()=>{
    contact();
})
