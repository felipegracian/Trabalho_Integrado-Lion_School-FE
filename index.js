'use strict'

import { getCursos } from './apicursos.js'
const jsonCursos = await getCursos()

const criarCardCursos = (curso) => {

    const cardCursos = document.createElement('a')
    cardCursos.classList.add('card')
    cardCursos.href = './index2.html'

    cardCursos.addEventListener('click', function(){
        console.log(curso.sigla)
    })

    const rowCards = document.createElement('div')
    rowCards.classList.add('row_card')

    const iconcurso = document.createElement('img')
    iconcurso.src = curso.icone

    const nomeCurso = document.createElement('text')
    nomeCurso.textContent = curso.sigla

    rowCards.append(iconcurso, nomeCurso)
    cardCursos.append(rowCards)
    
    
    return cardCursos
    
}

const carregarCards = () => {
    const containerCardCuros = document.getElementById('container_right_side_cards')


    const campos = jsonCursos.cursos.map(criarCardCursos)

    containerCardCuros.replaceChildren(...campos)
    

}

carregarCards()


