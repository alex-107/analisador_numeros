let numero = document.getElementsByClassName(`numero`)[0]
let lista = document.getElementsByClassName(`lista`)[0]
let saida = document.getElementsByClassName(`resultado`)[0]
const botao_adicionar = document.getElementsByClassName(`botao`)[0]
const botao_finalizar = document.getElementsByClassName(`botao`)[1]
const valores = []
numero.focus(); // não é preciso chamar o evento em si

botao_adicionar.addEventListener(`click`, adicionar)
function adicionar() {
    if (numero.value >= 1 && numero.value <= 100) {
        valores.push(numero.value);
        // criando elementos HTML dinâmicamente via Js
        let item = document.createElement(`option`);
        item.text = `Valor ${numero.value} adicionado;`;
        lista.appendChild(item);
        saida.innerHTML = ``
    } else {
        alert(`Valor inválido`);
    }
    numero.value = ``;
    numero.focus();
}

botao_finalizar.addEventListener(`click`, finalizar)
function finalizar() {
    if (valores.length === 0) {
        alert(`Adicione valores para que o programa seja concluído`);
    } else {
        let tamanho = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = 0;
        for (let i in valores) {
            soma += Number(valores[i]); // reaproveitando código
        }
        let media = soma / tamanho;

        // forma mais eficiente de adicionar parágrafos
        saida.innerHTML = `<p><strong>${tamanho}</strong> números foram adicionados;</p>`;
        saida.innerHTML += `<p><strong>${maior}</strong> foi o maior número informado;</p>`;
        saida.innerHTML += `<p><strong>${menor}</strong> foi o menor número informado;</p>`;
        saida.innerHTML += `<p><strong>${soma}</strong> é o resultado da soma total;</p>`;
        saida.innerHTML += `<p><strong>${media}</strong> é o resultado da média total.</p>`;
    }
}