import createHome from "./home.js";    

createHome()

home=document.getElementById("home")
home.addEventListener(click,createHome())

location=document.getElementById("location")
location.addEventListener(click,location())

menu=document.getElementById("menu")
menu.addEventListener(click,menu())


console.log("check")