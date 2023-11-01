var numberToFind;
var attempts = 0;


function startGame() {
    attempts = 0;

    var element = document.getElementById('bet');
    element.value = ''; // Limpa o campo de input
    numberToFind = Math.floor(Math.random() * 51);
    console.log('The number to find: ' + numberToFind);
}

function verifyNumber() {
    var element = document.getElementById('bet');
    var bet = Number(element.value);

    if (bet > 50 || bet < 0) {
        alert('Aposta é inválida');
        return;
    }

    if (bet === numberToFind) {
        attempts++;
        alert('✅ Parabéns você acertou!! Com ' + attempts + ' erros!');
    } else if (bet > numberToFind) {
        attempts++;
        alert('🚨 O número para ser encontrado é MENOR');
    } else {
        attempts++;
        alert('🚨 O número para ser encontrado é MAIOR');
    }
}

const btn = document.querySelector("#refresh");
btn.addEventListener("click", startGame);

// Inicie o jogo assim que a página for carregada
window.onload = startGame;

