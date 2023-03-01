//EXERCICIO 1

const verificaPar = (numero) => {
    if (numero % 2 === 0) {
        return 'O número informado é PAR.'
    } else {
       return 'O número é IMPAR.'
    }
}

const numeroInformado = Number(prompt('Insira um número:'))

console.log(verificaPar(numeroInformado))


