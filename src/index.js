function render(){
    var demo=document.createElement("h1")
    var test=demo.appendChild(document.createElement("section"))
    document.body.appendChild(test)

    demo.textContent="hello this is a test"
}

render()