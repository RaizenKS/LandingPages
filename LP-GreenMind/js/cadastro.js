let nomeValue = "";
let emailValue = "";

const email = document.querySelector("#email");
const nome = document.querySelector("#nome");
const ap = document.querySelector(".ap");
const apH2 = document.querySelector(".ap-h2");
const cadform = document.querySelector(".cad-form");
const h1 = document.querySelector("h1");
const buy= document.querySelector(".buy");
const cadBt= document.querySelector(".cad-bt");

document.querySelector(".butao").addEventListener('click',()=>{
    nomeValue = nome.value;
    emailValue = email.value;

    if(nomeValue !=="" && emailValue !== ""){
        apH2.textContent = nomeValue;
        ap.classList.remove("hidden");
        cadform.classList.add("hidden");
        h1.classList.add("hidden");
        setTimeout(()=>{
        ap.classList.add("hidden");
        buy.classList.remove("hidden");
        },2000)
    }
    else{alert("Preencha os dados!")};
})

cadBt.addEventListener("click", function(){
    buy.classList.add("hidden");
    h1.textContent = "Pedido realizado";
    h1.classList.remove("hidden");
})


