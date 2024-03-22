/*Um usuario entra como uma Senha e Login
Verifica se a a senha contem Letra maiscula, minuscula, numeros, minimo oito caracteres, caracter especial (!.@#$%&) E se o email ta certo (com @gmail.com)*/
var login = 'EnzodoGRau128$@gmail.com'
var senha = 'Re1dea$'

console.log('____________________________')
console.log(`login: ${login}`)
console.log(`senha: ${senha}`)
console.log('____________________________')
if (senha.length >= 8) {
    console.log(`A senha tem ${senha.length} caracteres, esta de acordo com as regras`)
} else {
    console.log(`A senha tem ${senha.length} caracteres, não esta de acordo com as regras`)
}

if (senha.includes ('!') || senha.includes('.') || senha.includes('@') || senha.includes('#') || senha.includes('$') || senha.includes('%') || senha.includes('&')) {
    console.log(`Essa senha contem caracter especiais`)
} else {
    console.log(`essa senha não contem caracter especiais`)
}

if (senha.includes(1,2,3,4,5,6,7,8,9,0)) {
    console.log('A senha contem numeros')
} else {
    console.log('A senha não contem numeros')
}
console.log('____________________________')