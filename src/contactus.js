export default function conctact(){
    const content=document.getElementById("content");
    content.innerHTML="Contact Us";

    const contentbody=document.createElement("div")
    contentbody.setAttribute("id","content-body")
    contentbody.innerHTML="Call us at 480-001-024"
    
    content.appendChild(contentbody)
    

}