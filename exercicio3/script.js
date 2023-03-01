//EXERCICIO 3

const verificaNacionalidade = () => {

    const nacionalidade = prompt('Qual a sua nacionalidade:').toLowerCase()

    if(nacionalidade === 'brasileira'){
        console.log('Você é brasileiro.')
    } else if(nacionalidade === 'argentina'){
        console.log('Você é argentina.')
    } else if(nacionalidade === 'uruguaia'){
        console.log('Você é uruguaia.')
    } else if(nacionalidade === 'chilena'){
        console.log('Você é chilena.')
    } else if(nacionalidade === 'colombiana'){
        console.log('Você é colombiana.')
    } else {
        console.log('Nacionalidade não encontrada.')
    }
}

verificaNacionalidade()