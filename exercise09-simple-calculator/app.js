let input=document.getElementById("input");
console.log(input);
let finalBtn=document.getElementById("finalBtn");
console.log(finalBtn);
let buttons=document.getElementsByClassName("btn");
console.log(buttons);
let operators=document.getElementsByClassName("btn1");
console.log(operators);
let clear=document.getElementById("clear")

// Logic one is completed....
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", ()=>{
        input.value+=button.textContent
        button.style.backgroundColor="#ddd"
        setTimeout(() => {
            button.style.backgroundColor=""
        }, 150);
    })
})
Array.from(operators).forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        input.value+=operator.textContent
                operator.style.backgroundColor="#ddd"
        setTimeout(() => {
            operator.style.backgroundColor=""
        }, 150);
    })
})

// Logic 2

finalBtn.addEventListener("click", ()=>{
    try{
    input.value=eval(input.value)
                    finalBtn.style.backgroundColor="#ddd"
        setTimeout(() => {
            finalBtn.style.backgroundColor=""
        }, 150);
    console.log("final answer");
    }catch(error){
        input.value="Error"
    }
})

// login for keydown
document.addEventListener("keydown", (e)=>{
    if(e.key==="Enter")
        try{
            input.value=eval(input.value)
    }catch(error){
        input.value="Error"
    }
})

input.addEventListener("keypress", (e)=>e.preventDefault())
clear.addEventListener("click", ()=>{
    input.value=""
                    clear.style.backgroundColor="#ddd"
        setTimeout(() => {
            clear.style.backgroundColor=""
        }, 150);
})
