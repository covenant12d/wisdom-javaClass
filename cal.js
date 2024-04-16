let input = document.getElementById('input')
let big =document.getElementById('but')

function boy(gy){
    input.value += gy
}


function pressOpertor(op){
    input.value += op;         
}


function equalsto() {
 let answer = eval(input.value)
document.getElementById("screen").innerHTML = answer
}

function clear(){
    let cleared = document.getElementById('input');
    cleared.innerHTML -= " ";
    console.log(cleared)
}