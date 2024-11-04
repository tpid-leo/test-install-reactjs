let winningGame = 0
let isGameOver = false

let p1Score = 0
const addScoreP1 = document.getElementById('p1-add-score')
const scoreP1 = document.getElementById('p1-score')


let p2Score = 0
const addScoreP2 = document.getElementById('p2-add-score')
const scoreP2 = document.getElementById('p2-score')

const resetScore = document.getElementById('reset')

const playTo = document.querySelector('#playto');


playTo.addEventListener('change', function () {
    winningGame = playTo.value
})

addScoreP1.addEventListener('click', () => {
    p1Score += 1
    if (winningGame == p1Score) {
        addScoreP1.classList = 'bg-gray-400'
        addScoreP2.classList = 'bg-gray-400'
        addScoreP1.disabled = true
        addScoreP2.disabled = true
    }
    scoreP1.textContent = p1Score
})

addScoreP2.addEventListener('click', () => {
    p2Score += 1
    if (p2Score == winningGame) {
        addScoreP1.classList = 'bg-gray-400'
        addScoreP2.classList = 'bg-gray-400'
        addScoreP1.disabled = true
        addScoreP2.disabled = true
    }
    scoreP2.textContent = p2Score
})

resetScore.addEventListener('click', () => {
    scoreP2.innerText = 0
    scoreP1.innerText = 0
    p1Score = 0
    p2Score = 0
    playTo.value = 0
    winningGame = 0
    addScoreP1.className = 'py-1.5 grow shadow-md shadow-slate-400 border bg-blue-700'
    addScoreP2.className = 'py-1.5 grow shadow-md shadow-slate-400 border bg-red-700'
    addScoreP1.disabled = false
    addScoreP2.disabled = false
})