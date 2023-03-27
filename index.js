'use strict'

import {getCursos} from './apicursos'
const cursos = await getCursos

const ciarCardCursos = (curso) =>{

    const containerCardCuros = document.createElement('div')
    containerCardCuros.classList.add('container_right_side_cards')

    const cardCursos = document.createElement('div')
    cardCursos.classList.add('card')

    const rowCards = document.createElement('div')
    rowCards.classList.add('row_card')

    const iconcurso = document.createElement('img')
    iconcurso.src = curso.icone

    const nomeCurso = document.createElement('text')
    nomeCurso.textContent = curso.sigla

    rowCards.append(iconcurso, nomeCurso)
    cardCursos.append(rowCards)
    containerCardCuros.append(cardCursos)

}

ciarCardCursos()