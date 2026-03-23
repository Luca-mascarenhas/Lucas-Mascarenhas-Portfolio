// verifica se existe formulario na pagina

const form = document.getElementById("formContato");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

if(nome == "" || email == "" || mensagem == ""){
alert("Preencha todos os campos!");
return;
}

let emailValido = /\S+@\S+\.\S+/;

if(!emailValido.test(email)){
alert("Digite um email válido!");
return;
}

alert("Mensagem enviada com sucesso!");

form.reset();

});

}

// Dark Mode

function alternarTema(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("tema","escuro");
}else{
localStorage.setItem("tema","claro");
}

}

// carregar tema salvo

window.onload = function(){

let temaSalvo = localStorage.getItem("tema");

if(temaSalvo === "escuro"){
document.body.classList.add("dark-mode");
}

}
