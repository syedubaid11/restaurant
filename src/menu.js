export default function menu(){
    const menu=document.createElement('div');
    menu.setAttribute('id','menu-res')

    menu.innerHTML=`
    <p>Our menu</p>
    </br>
    <div class="list">
    <li>Veg Pizza</li>
    <li>Non Veg Pizza</li>
    </div>
    `

}
    
 console.log("menu is working ")
