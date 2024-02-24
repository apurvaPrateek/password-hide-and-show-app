const img = document.querySelector("img");
const input = document.querySelector("input");
img.addEventListener("click",()=>{
    
    if(input.type=="password"){
        
        img.src='./images/eye-close.png';
        input.type = "text";
    }
    else{
        img.src="./images/eye-open.png";
        input.type = "password";
    }
})