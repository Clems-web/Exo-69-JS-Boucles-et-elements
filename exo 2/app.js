let liste = document.getElementById("liste-commissions");
let input = document.getElementById("ingredients");
let bouton = document.getElementById("bouton");


bouton.addEventListener("click", function () {
    let creation = document.createElement("li");
    creation.innerHTML = input.value;
    liste.appendChild(creation);
})




