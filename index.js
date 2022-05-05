const button = document.getElementById("submit");
const field = document.getElementById("input")
const resultado = document.getElementById("result")

button.onclick = function () {calc()};

function getValue (){
    let n = parseInt(field.value);
    return n;
}

function getOutput(text){
    const node = document.createElement("p");
    const textNode = document.createTextNode(text);
    node.appendChild(textNode);
    resultado.appendChild(node);
}

function calc(){
    let limit = getValue();
    for(let i = 1; i <= limit; i++){
        let x = Math.pow(i, 2);
        let y = Math.pow(i, 3);
        let text = [i, x, y].toString().replace(/,/g, " ");
        getOutput(text);
    }
}