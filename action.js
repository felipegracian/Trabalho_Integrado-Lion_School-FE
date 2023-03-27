'use strict'

const actionopen = document.getElementById('card')

const openNewWindow = () =>{
    const url = 'http://127.0.0.1:5500/index2.html'
    window.open(url)
}

actionopen.addEventListener('click', openNewWindow )