const plus = document.querySelector("span")
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const buttons = document.querySelectorAll("button")
const result =document.getElementById("result")
let focous =false;

plus.addEventListener('click' , () => {

    input2.focus()
    focous = true;
  
});


buttons.forEach(function (item, index) {
    item.addEventListener("click", () => {
        if
        (focous){
            input2.value += +item.innerText          
        } else {input.value += +item.innerText} 

    });
});
result.addEventListener('click' ,() =>{
 
    input3.value = +input.value + +input2.value 
   
})






