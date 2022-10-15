const buttons = document.querySelectorAll("button");
const output = document.querySelector(".display");
console.log(buttons);
buttons.forEach(i=>{
    i.addEventListener("click",calculate);
    
});

function calculate(){
    let buttonText = this.innerText;
    console.log(buttonText);
    if(buttonText==="RESET"){
        output.innerText = "0";
        return;
    }

    if(buttonText === "="){
        output.innerText = eval(output.innerText);
    }
    
    else{
        output.textContent += buttonText;
        return;
    }
}