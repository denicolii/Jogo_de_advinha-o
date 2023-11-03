var numberToFind;
var attempts = 0


function startGame() {
    attempts = 0

    var element = document.getElementById('bet')
    element.value = '';
    numberToFind = Math.floor(Math.random() * 51)
    console.log('The number to find: ' + numberToFind)
    document.querySelector("body").style.backgroundImage = 'url(./img/background.jpg)'
}

function verifyNumber() {
    var element = document.getElementById('bet')
    var bet = Number(element.value);

    if (bet > 50 || bet < 0) {
        alert('Aposta é inválida')
        return;
    }

    if (bet === numberToFind) {
        attempts++;
        alert('✅ Parabéns você acertou!! Com ' + attempts + ' erros!')
        document.querySelector("body").style.backgroundImage = 'url(./img/bcfb660f3e6865cd73eda9132801821f.gif)'
    } else if (bet > numberToFind) {
        attempts++;
        alert('🚨 O número para ser encontrado é MENOR')
    } else {
        attempts++;
        alert('🚨 O número para ser encontrado é MAIOR')
    }
}

const btn = document.querySelector("#refresh")
btn.addEventListener("click", startGame)

window.onload = startGame;
