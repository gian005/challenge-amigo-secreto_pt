//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");

function adicionarAmigo(){
    nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == ""){
        alert("Por favor, insira um nome.");
    } else {
        amigos .push(nomeDoAmigo);
        console.log(amigos);
        campo = document.querySelector('input');
        campo.value = "";
        exibirListaDeAmigos();
    }
}

function exibirListaDeAmigos(){
    listaAmigos.innerHTML = "";
	for(let x = 0; x < amigos.length; x++){
		let elemento = document.createElement('li');
		elemento.appendChild(document.createTextNode(amigos[x]));
		listaAmigos.appendChild(elemento);
        }
}

function sortearAmigo(){
	if(amigos.length > 0){
		let numeroSorteado = (Math.floor	(Math.random() * (amigos.length - 1 + 1)));
		let resultado = document.getElementById("resultado");
		listaAmigos.innerHTML = "";
		resultado.innerHTML = amigos[numeroSorteado];
		}
	}
