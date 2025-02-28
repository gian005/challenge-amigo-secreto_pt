//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesDosAmigos = [];

function adicionarAmigo(){
    nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == ""){
        alert("Por favor, insira um nome.");
    } else {
        nomesDosAmigos .push(nomeDoAmigo);
        console.log(nomesDosAmigos);
        campo = document.querySelector('input');
        campo.value = "";
        exibirListaDeAmigos();
    }
}

function exibirListaDeAmigos(){
    lista2 = document.getElementById("listaAmigos");
    console.log(lista2);
    lista2.innerHTML = "";
    lista2.innerHTML = nomesDosAmigos ;

    // for(let x = 0; x < nomesDosAmigos.length;){
    //    lista2.innerHTML = nomesDosAmigos ;
    //    x ++;
    // }
}

//adicionarAmigo();
