var numberToFind;
var attempts = 0;

function startGame() {
    numberToFind = Math.floor(Math.random() * 51); // Gera um número aleatório entre 0 e 50
    attempts = 0;

    var element = document.getElementById('bet');
    element.value = ''; // Limpa o campo de input

    console.log('The number to find: ' + numberToFind);
}

function verifyNumber() {
    var element = document.getElementById('bet');
    var bet = element.value;

    if (bet > 50 || bet < 0) {
        alert('Aposta é inválida');
        return;
    }

    if (bet > numberToFind) {
        attempts++;
        alert('🚨 O número para ser encontrado é MENOR');
    } else if (bet < numberToFind) {
        attempts++;
        alert('🚨 O número para ser encontrado é MAIOR');
    } else {
        alert('✅ Parabéns você acertou!! Com ' + attempts + ' erros!');
    }
    
    startGame(); // Inicia um novo jogo, independentemente do resultado
}

const btn = document.querySelector("#refresh");

btn.addEventListener("click", startGame);

// Inicie o jogo assim que a página for carregada
window.onload = startGame;
