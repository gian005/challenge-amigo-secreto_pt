//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function adicionarAmigo(){
	resultado.innerHTML = "";
    nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == ""){
        alert("Por favor, insira um nome.");
    } else {
        amigos .push(nomeDoAmigo);
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
	document.querySelector('.button-remove-name').removeAttribute('disabled');
	if(amigos.length > 0){
		let numeroSorteado = (Math.floor	(Math.random() * (amigos.length - 1 + 1)));
		let nomeSorteado = amigos[numeroSorteado];
		listaAmigos.innerHTML = "";
		resultado.innerHTML = "O amigo secreto sorteado é: " + nomeSorteado;
		}else {
			alert("Não há nomes para sortear. Insira nomes no campo indicado.")
		}
	}
	
function novaListaDeAmigos(){
	document.querySelector('.button-remove-name').setAttribute('disabled', true);
	if(amigos.length > 0){
	amigos = [];
	listaAmigos.innerHTML = "";
	resultado.innerHTML = "";
		}else {
			alert("Não há nomes na lista.")
		}
	}
	

