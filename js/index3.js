'use strict'

import {getAlunoInfo} from './apicursos.js'
const jSonAlunosInfo = await getAlunoInfo()

const mostrarCardAluno = (aluno) =>{

    const cardAluno = document.createElement('div')
    cardAluno.classList.add('container_card_aluno')

    const fotoAluno = document.createElement('img')
    fotoAluno.src = aluno.foto

    const nomeAluno = document.createElement('text')
    nomeAluno.textContent = aluno.nome

    cardAluno.append(fotoAluno, nomeAluno)

    return cardAluno
    
}

const carregarCardAluno = () =>{

    const containerCardAlunos = document.getElementById('card_aluno')

    const campos = jSonAlunosInfo.aluno.map(mostrarCardAluno)

    containerCardAlunos.replaceChildren(...campos)

}

const mostrarNotasAluno = (aluno2Function) =>{
    const containerGraficoMateriasAluno = document.createElement('div')
    containerGraficoMateriasAluno.classList.add('container_graphics')


    aluno2Function.disciplinas.forEach(function(mostrarNoGrafico){
        const mediaAluno = document.createElement('text')
        mediaAluno.textContent = mostrarNoGrafico.media

        const barraMediaAluno = document.createElement('div')

        setTimeout(() => {
            barraMediaAluno.style.height = mostrarNoGrafico.media + '%'
        }, 100);
        
        if(mostrarNoGrafico.media < 50){
            barraMediaAluno.classList.add('barra-vemelha')
            mediaAluno.classList.add('materia-vermelha')
        } else if (mostrarNoGrafico.media >= 50 && mostrarNoGrafico.media <= 70) {
            barraMediaAluno.classList.add('barra-amarela')
            mediaAluno.classList.add('materia-amarela')
        }


        const barraDeComparacaoMediaAluno = document.createElement('div')
        barraDeComparacaoMediaAluno.classList.add('materia_aluno_graphic_show')

       
        barraMediaAluno.classList.add('percentage_aluno')

        barraDeComparacaoMediaAluno.append(barraMediaAluno)

        const materiaAluno = document.createElement('text')
        materiaAluno.textContent = mostrarNoGrafico.sigla

        const containerDeCadaMateria = document.createElement('div')
        containerDeCadaMateria.classList.add('container_cada_materia')

        containerDeCadaMateria.append(mediaAluno, barraDeComparacaoMediaAluno, materiaAluno)
        containerGraficoMateriasAluno.append(containerDeCadaMateria)
    })

    return containerGraficoMateriasAluno
}

const carregarGraficoComAsNotasDoAluno = () =>{
    const containerCardGrafico = document.getElementById('card_graphics_aluno')
    const campos2Function = jSonAlunosInfo.aluno.map(mostrarNotasAluno)

    containerCardGrafico.replaceChildren(...campos2Function)
}

carregarCardAluno()
carregarGraficoComAsNotasDoAluno()