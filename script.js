var numberToFind = 0;
var attempts = 0;


function refresh(){
    var element = document.getElementById('bet');
    element.value = '';
    
    numberToFind = parseInt(Math.random() * 50);
    vattempts = 0;

    console.log('The number to find: '+numberToFind);
}

refresh();

function verifyNumber(){
    var element = document.getElementById('bet');
    var bet = element.value;

    if(bet > 50 || bet < 0)
    {
        alert('Aposta é inválida');
        return;
    }

    if(bet > numberToFind)
    {
        attempts++;
        alert('🚨 O número para ser encontrado é MENOR');
    }
    else if(bet < numberToFind)
    {
        attempts++;
        alert('🚨 O número para ser encontrado é MAIOR')
    }
    else
    {
        alert('✅ Parabéns você acertou!! Com '+attempts+' erros!');
        refresh();
    }
}


const btn =document.querySelector("#refresh") 
 
btn.addEventListener("click" , () => {
    location.reload()
}) // ao clicar em "recomeçar", a pagina recarrega.     
