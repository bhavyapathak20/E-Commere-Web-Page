const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 0;

plus.addEventListener("click" , increment)
function increment(){
    a++;
    num.innerText = a;
}

minus.addEventListener("click" , decrement)

function decrement(){
    if (a>0){
        a--;
        num.innerText = a;
    }
}

cart = document.getElementsByClassName(".cart-img")

cart.addEventListener("click" ,addBox)

function addBox(){
    cart.classList.add("cart-empty-message")
}