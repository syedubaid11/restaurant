export default function menu(){
    const content=document.getElementById("content");
    content.innerHTML="Menu";

    const contentbody=document.createElement("div")
    contentbody.setAttribute("id","content-body")
    contentbody.innerHTML="Veg Pizza</br>Non Veg Pizza</br>"
    
    content.appendChild(contentbody)
    
    
}