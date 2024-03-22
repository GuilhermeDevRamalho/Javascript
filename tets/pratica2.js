//faz um programa para saber se o ano é ou não bissexto
var AnoAtual = new Date().getFullYear()
if (AnoAtual % 2 == 0) {
    console.log(`${AnoAtual} é um ano bissesto`)
} else {
    console.log(`${AnoAtual} não é um ano bissesto`)
}