//EXERCICIO 2

const verificaDados = (idade, ensinoMedio, faculdade) => {

    if (idade >= 18) {
        console.log('Você já é maior de idade.')
    } else {
        console.log('Você ainda é menor de idade.')
    }

    if (ensinoMedio === 'sim') {
        console.log('Você já concluiu o ensino médio.')
    } else {
        console.log('Você ainda não concluiu o ensino médio.')
    }

    if (!(faculdade === 'sim')) {
        console.log('Você não está cursando nenhuma faculdade.')
    } else {
        console.log('Você está cursando faculdade.')
    }
}

const idadeInformada = Number(prompt('Insira a sua idade:'))
const temEnsinoMedio = prompt('Responda SIM ou NÃO\nVocê concluiu o ensino médio?').toLowerCase()
const fazFaculdade = prompt('Responda SIM ou NÃO\nVocê está cursando alguma faculdade?').toLowerCase()

verificaDados(idadeInformada, temEnsinoMedio, fazFaculdade)






// console.log(idade)
// console.log(ensinoMedio)
// console.log(faculdade)