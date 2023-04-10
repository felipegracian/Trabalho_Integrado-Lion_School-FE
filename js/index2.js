'use strict'

import { getAlunosCurso } from './apicursos.js'
const jsonAlunosCurso = await getAlunosCurso()
const nomeCurso = document.getElementById('curso_name')
const status = document.getElementById('status')
const finalizado = document.getElementById('finalizado')
const cursando = document.getElementById('cursando')

const criaCardAlunos = (aluno) => {

    nomeCurso.innerHTML = aluno.curso.slice(6)

    const container = document.createElement('div')
    container.classList.add('container')

    const cardAlunos = document.createElement('div')
    cardAlunos.classList.add('card_alunos')

    if (aluno.status == 'Cursando') {
        cardAlunos.classList.add('cursando')
    } else {
        cardAlunos.classList.add('finalizado')
    }

    finalizado.addEventListener('click', () => {
        if (cardAlunos.classList.value == 'card_alunos cursando') {
            cardAlunos.style.display = 'none'
        } else {
            cardAlunos.style.display = 'flex'
        }
    })

    cursando.addEventListener('click', () => {
        if (cardAlunos.classList.value == 'card_alunos finalizado') {
            cardAlunos.style.display = 'none'
        } else {
            cardAlunos.style.display = 'flex'
        }
    })
    
    status.addEventListener('click', () => {
        if (cardAlunos.style.display = 'none') {
            cardAlunos.style.display = 'flex'
        }
    })
    


    const containerAlunos = document.createElement('div')
    containerAlunos.classList.add('container_card_alunos')

    const image = document.createElement('img')
    image.src = `${aluno.foto}`
    image.alt = 'foto usuário'

    const nome = document.createElement('span')
    nome.textContent = aluno.nome

    container.append(cardAlunos)
    cardAlunos.append(containerAlunos)
    containerAlunos.append(image, nome)

    cardAlunos.addEventListener('click', function(){
        localStorage.setItem('aluno', aluno.matricula)
        window.location.href = 'http://127.0.0.1:5500/index3.html'
    }) 


    return cardAlunos

}

const carregarAlunos = () => {
    const container = document.getElementById('container')
    const alunos = jsonAlunosCurso.aluno.map(criaCardAlunos)

    container.replaceChildren(...alunos)
}

carregarAlunos()

