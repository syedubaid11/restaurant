export default function createHome(){

    const content=document.getElementById("content")
    content.innerHTML="Pie Perfection"
    

    const head=document.getElementById("head")
    const heading=document.createElement('div')
    heading.setAttribute('id','heading')
    heading.innerHTML=""
    
    head.append(heading)

}


