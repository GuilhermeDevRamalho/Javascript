//Cria um código que pega a data atual e verifica se o dia é Par ou Impar
var agora = new Date()
var dia = agora.getDate()

if (dia % 2 == 0) {
    console.log(`Hoje é dia ${dia} e é um numero PAR`)
} else {
    console.log(`Hoje é dia ${dia} e é um numero IMPAR`)
}