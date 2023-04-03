'use strict'

export const getCursos = async() => {
    const url = `http://localhost:8080/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data
    
}

export const getAlunos = async() =>{
    const url = `http://localhost:8080/v1/lion-school/alunos`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getAlunosCurso = async() =>{
    const url = `http://localhost:8080/v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const curso = localStorage.getItem('curso')