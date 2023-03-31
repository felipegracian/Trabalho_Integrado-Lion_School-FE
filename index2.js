'use strict'

import { getAlunos } from './apicursos2.js'
const jsonAlunos = await getAlunos()
console.log('jsonalunos ',jsonAlunos)
const container_container_card_alunos = document.getElementById('container_Area_Main')

const criarCardAlunos = () => {

    jsonAlunos.alunos.forEach(function(aluno){
        const container = document.createElement('div')
        container.classList.add('container')
        const cardAlunos = document.createElement('div')
        if(aluno.status == "Cursando"){
            cardAlunos.classList.add('card_alunos_cursando')

            const containerCardAlunos = document.createElement('div')
            containerCardAlunos.classList.add('container_card_alunos')

            const fotoaluno = document.createElement('img')
            fotoaluno.src = aluno.foto

            const nomeAluno = document.createElement('text')
            nomeAluno.textContent = aluno.nome

            containerCardAlunos.append(fotoaluno, nomeAluno)
            cardAlunos.append(containerCardAlunos)
            container.append(cardAlunos)
            console.log(container)
        }else if(aluno.status == "Finalizado"){
            cardAlunos.classList.add('card_alunos_finalizado')

            const containerCardAlunos = document.createElement('div')
            containerCardAlunos.classList.add('container_card_alunos')

            const fotoaluno = document.createElement('img')
            fotoaluno.src = aluno.foto

            const nomeAluno = document.createElement('text')
            nomeAluno.textContent = aluno.nome

            containerCardAlunos.append(fotoaluno, nomeAluno)
            cardAlunos.append(containerCardAlunos)
            container.append(cardAlunos)
            console.log(container)
        }

        container_container_card_alunos.append(container)

    })

}

criarCardAlunos()
