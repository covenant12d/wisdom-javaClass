

 function boy(){
    let we = document.getElementById('input')
    let us = document.getElementById('input2')

    us.value = we.value.replace(/fuck|mad/gi , "****") 
    console.log(us.value);
    
}