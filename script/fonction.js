// objet contnant les differerntes fonction du jeu
const fonction = {
    // selectionne le mot
    selectWord: function (words, niveau) {
        const ARRAY = words[niveau-1]
        const index = Math.floor(Math.random()*10)
        return ARRAY[index].toLowerCase();
    },

    // verifie si la lettre existe dans le mot
    checkWord: function (char) {
        if (char.className == 'used') {
            return null;
        } else {
            char.className = 'used'
            char.setAttribute('onclick', false)
            const VAL = char.value
            let index = []
            for (let i = 0; i < WORD.length; i++) {
                if (VAL == WORD[i]) {
                    index.push(i)
                }
            }
            if (index.length != 0) {
                fonction.setChar(index, VAL)
            } else {
                fonction.checkLose(WORD)
            }
        }
    },

    // place la lettre dans la case correspondant
    setChar: function (index, value) {
        const UNKNOW = document.getElementById('unknow')
        const CASE = UNKNOW.getElementsByTagName('input')
        for (let i = 0; i < index.length; i++) {
            CASE[index[i]].value = value
        }
        score += index.length
        document.getElementById('score').innerHTML = 'score: ' + score
        fonction.checkWin() == true ? fonction.win() : null
    },

    // Verifie si le mot est trouve
    checkWin: function () {
        const UNKNOW = document.getElementById('unknow')
        const CASE = UNKNOW.getElementsByTagName('input')
        let result = true

        for (let i = 0; i < CASE.length; i++) {
            if (CASE[i].value == '') {
                result = false
                break;
            }
        }
        return result
    },

    // verifie si les essayes sont !=0
    checkLose: function () {
        essaye --
        document.getElementById('essaye').innerHTML = `essaye: ${essaye}`
        if (essaye == 0) {
            fonction.lose()
        }
    },

    // apres chaque partie gagner
    win: function () {
        generator.clearScreen()
        if (variance == 0) {
            niveau++
        }

        generator.winNiveau(generator.container)
        if (niveau == 2 && variance < 1) {
            variance = 2
        } else if (niveau <= 5 && niveau >= 3 && variance == 0) {
            variance = 3
        } else if (niveau >= 6 && niveau <= 10 && variance == 0) {
            variance = 4
        }
    },

    // si le joueur choisi de continuer apres une partie
    continuer: function () {
        essaye = 5
        generator.playGame()
        variance--
    },

    // si le joueur arrrete de jouer
    endGame: function () {
        generator.clearScreen()

        const div = document.createElement('div')
        div.className = 'winAlert'

        const p = document.createElement('p')
        p.innerText = 'Vous avez quité le jeu.'
        
        const h = document.createElement('h2')
        h.innerText = `votre score est ${score}`

        const btn = document.createElement('input')
        btn.type = 'button'
        btn.id = 'revenir'
        btn.value = 'Revenir au menu principale'
        btn.setAttribute('onclick', 'fonction.final()')

        div.appendChild(p)
        div.appendChild(h)
        div.appendChild(btn)

        generator.container.appendChild(div)
    },

    // initialise les valeur des variables
    initialise: function () {
        oldWord = ''
        score = 0
        niveau = 1
        essaye = 5
        variance = 1        
    },

    // si le joueur choisi de revenir au menu
    final: function() {
        if (HIGH.score <= score) {
            HIGH.score = score
            HIGH.niveau = niveau == 11 ? 10 : niveau
        }

        this.initialise()
        generator.addMenu()

    },

    // si le joueur perd la partie
    lose: function() {
        generator.clearScreen()

        const div = document.createElement('div')
        div.className = 'winAlert'

        const ans = document.createElement('h1')
        ans.id = "error"
        ans.innerText = WORD

        const p = document.createElement('p')
        p.innerText = `Vous avez perdu.`
        
        const h = document.createElement('h2')
        h.innerText = `votre score est ${score}`

        const btn = document.createElement('input')
        btn.type = 'button'
        btn.id = 'revenir'
        btn.value = 'Revenir au menu principale'
        btn.setAttribute('onclick', 'fonction.final()')

        div.appendChild(ans)
        div.appendChild(p)
        div.appendChild(h)
        div.appendChild(btn)

        generator.container.appendChild(div)
    },
}