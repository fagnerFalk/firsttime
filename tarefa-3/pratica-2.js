let multiplicador = 6
let n = 10
let i = 1

while (i <= n) {
    let calculo = multiplicador * i 
    let textoDeExibicao = `${multiplicador} x ${i} = ${calculo}`
    console.log(textoDeExibicao)
    i++
}