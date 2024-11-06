let input=document.querySelector(".username");
let password=document.querySelector(".password");
let btn=document.querySelector("button")
btn.addEventListener("click",()=>{
    console.log(input.value);
    console.log(password.value);
});