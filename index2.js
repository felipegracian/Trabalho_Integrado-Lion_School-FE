'use strict'

import {getAlunos} from './apicursos2.js'
const jsonAlunos = await getAlunos()

const criarCardAlunos = (aluno) =>{

    jsonAlunos.alunos.forEach((status) =>{
        if(status.status == 'Cursando'){
            const cardAlunos = document.createElement('div')
        } else{
            
        }
    })

    

}

criarCardAlunos()