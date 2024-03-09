export default function menu(){
    const content=document.getElementById("content");
    content.innerHTML="Menu";

    const contentbody=document.createElement("div")
    contentbody.setAttribute("id","content-body")
    contentbody.innerHTML="Espresso</br>Latte</br>Cappuccino"
    
    content.appendChild(contentbody)
    
    
}