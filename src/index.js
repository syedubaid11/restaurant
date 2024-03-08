import createHome from "./home.js";    
import menu from "./menu.js";

createHome()
 
const menulink=document.getElementById("menu");
menulink.addEventListener('click',menu());
