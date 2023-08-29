var tentativa = 0;
var numero = Math.floor((1 + 100 * Math.random()));
function main() {
    var tent = document.getElementById('tentativas');
    var num1 = parseInt(document.getElementById("num").value);
    var dica = document.getElementById('dica');

    tentativa++;
    dica.innerHTML = teste(num1);
    tent.innerHTML = tentativa;
}
function teste(x) {
    if (x < numero)
        return "Seu numero é menor que o sorteado";
    else
        if (x > numero)
            return "Seu numero é maior que o sorteado";
        else
            return ("Parabéns! Acertou, a resposta era " + numero);
}