// un objet contenant les generateur de DOM
const generator = {
    container: document.getElementById('container'),
    jouer: null,
    but: null,
    score: null,
    btnCompris: null,

    // netoie l'ecran
    clearScreen: function () {
        const ELT = this.container.childNodes
        for (let i = 0; i < ELT.length; i++) {
            this.container.removeChild(ELT[i])
        }
    },

    // affiche le menu
    addMenu: function () {
        const MENU = ['Jouer', 'But du jeu', 'Meilleur score', `generator.playGame()`, `generator.showGoal()`, `generator.showHighScore()`]
        this.clearScreen()
        let div = document.createElement('div')
        div.className = 'menuHome'
        div.id = 'menuHome'
        for (let i = 0; i < 3; i++) {
            let a = document.createElement('a')
            a.href = '#'
            const ID = MENU[i].split(' ')
            a.id = ID[0]
            a.setAttribute(`onclick`, MENU[i+3])
            a.innerText = MENU[i]
            div.appendChild(a)
        }
        this.container.appendChild(div)
        this.jouer = document.getElementById('Jouer')
        this.but = document.getElementById('But')
        this.score = document.getElementById('Meilleur')
    },

    // si on choisi de jouer au jeu
    playGame: function () {
        let WORD0 = fonction.selectWord(words, niveau)
        WORD = ''
        let res = false
        do {
            if (WORD0 == oldWord) {
                WORD0 = fonction.selectWord(words, niveau)
                res = false
            } else {
                oldWord = WORD0
                WORD = WORD0
                res = true
            }
        } while (res == false);
        const game = document.createElement('div')
        game.id = 'game'
        this.showStat(game)
        this.wordPlace(game)
        this.keyboard(game)
        this.container.appendChild(game)
        window.addEventListener("keypress", (e) => {
            let char = null
            if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode <= 122 && e.keyCode >= 97) {
                char = document.getElementById(`${e.key.toLowerCase()}`)
            }
            char != null ? fonction.checkWord(char) : null
        })
    },

    // affiche le but du jeu
    showGoal: function () {
        const DATA = {
            title: 'But Du jeu',
            phrase: [`Le but de ce jeu consiste à deviner lettre par lettre un mot caché qui sera représenté sous forme de case vide.`, `Cette version est faite pour les développeurs. Les mots à trouver sont des mots concernant la programmation et le domaine de l'informatique.`, `Au bout de 5 erreurs, vous perdez.\n Bonne chance!`],
            btn: ['button', `J'ai compris`, 'compris','generator.addMenu()'],
        }
        
        let div = document.createElement('div')
        div.className = 'butDuJeu'

        let title = document.createElement('h2')
        title.innerText = DATA.title

        let p = document.createElement('p')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        p.innerText = DATA.phrase[0]
        p1.innerText = DATA.phrase[1]
        p2.innerText = DATA.phrase[2]

        let btn = document.createElement('input')
        btn.type = DATA.btn[0]
        btn.value = DATA.btn[1]
        btn.id = DATA.btn[2]
        btn.setAttribute('onclick', DATA.btn[3]) 

        this.clearScreen()

        div.appendChild(title)
        div.appendChild(p)
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(btn)

        this.container.appendChild(div)

    },

    // affiche le score max
    showHighScore: function() {
        generator.clearScreen()

        const div = document.createElement('div')
        div.className = 'winAlert'
        
        const h = document.createElement('h2')
        h.innerText = `le meilleur score est ${HIGH.score}`
        const h1 = document.createElement('h2')
        h1.innerText = `sur le niveau ${HIGH.niveau}`

        const btn = document.createElement('input')
        btn.type = 'button'
        btn.id = 'revenir'
        btn.value = 'Revenir au menu principale'
        btn.setAttribute('onclick', 'fonction.final()')

        div.appendChild(h)
        div.appendChild(h1)
        div.appendChild(btn)

        generator.container.appendChild(div)

    },

    // affiche les cases qui contiendront les lettres
    wordPlace: function(div) {
        
        let unknow = document.createElement('div')
        unknow.id = 'unknow'
        for (let i = 0; i < WORD.length; i++) {
            let vide = document.createElement('input')
            vide.type = 'text'
            vide.value = ''
            vide.className = 'vide'
            vide.disabled = true
            vide.id = i
            unknow.appendChild(vide)
        }

        div.appendChild(unknow)
    },

    // affiche le clavier
    keyboard: function (div) {
        const DATA =  {
            char: ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
            'w', 'x', 'c', 'v', 'b', 'n',],
            btn: ['button', `Je ne veut plus jouer`, 'plus','fonction.endGame()'],
        }

        let keyboard = document.createElement('div')
        keyboard.id = 'keyboard'

        this.clearScreen()

        for (let i = 0; i < DATA.char.length; i++) {
            const E = DATA.char[i]
            let char = document.createElement('input')
            char.type = 'button'
            char.className = 'char'
            char.id = E;
            char.value = E
            char.setAttribute('onclick', `fonction.checkWord(${E})`)
            if (i == 0 || i == 10 || i == 20) {
                var range = document.createElement('div')                
                range.className = 'range'
            }
            range.appendChild(char)
            if (i == 9 || i == 19 || i == 25) {
                keyboard.appendChild(range)
            }
        }

        div.appendChild(keyboard)

        let btn = document.createElement('input')
        btn.type = DATA.btn[0]
        btn.value = DATA.btn[1]
        btn.id = DATA.btn[2]
        btn.setAttribute('onclick', DATA.btn[3]) 

        div.appendChild(btn)

    },

    // affiche les stat
    showStat: function (div) {
        const DATA = ['niveau', 'score', 'essaye']
        const DATA0 = [niveau, score, essaye]
        const stat = document.createElement('div')
        stat.id = 'stat'

        for (let i = 0; i < DATA.length; i++) {
            let h = document.createElement('h2')
            h.className = 'statDetail'
            h.id = DATA[i]
            h.innerText = DATA[i] + ': ' + DATA0[i]
            stat.appendChild(h)
        }

        div.appendChild(stat)
    },

    // affiche une genre de modal apres un niveau
    winNiveau: function (div) {
        const DATA = {
            p0: `Felicitation, il vous reste ${variance} mot a decouvrir dans le niveau ${niveau}`,
            p1: `Felicitaion, vous passez au niveau ${niveau}`,
            btn0: ['button', 'Continuer', 'fonction.continuer()'],
            btn1: ['button', 'Arreter de jouer', 'Arreter', 'fonction.endGame()'],
            congrat: ['Felicitation', 'Vous avez terminer tout les niveaux du jeu'],
        }
        const winAlert = document.createElement('div')
        winAlert.className = 'winAlert'

        const ans = document.createElement('h1')
        ans.id = 'answer'
        ans.innerText = WORD

        const btn0 = document.createElement('input')
        btn0.type = DATA.btn0[0]
        btn0.id = DATA.btn0[1]
        btn0.value = DATA.btn0[1]
        btn0.setAttribute('onclick', DATA.btn0[2])
        
        const btn1 = document.createElement('input')
        btn1.type = DATA.btn1[0]
        btn1.id = DATA.btn1[2]
        btn1.value = DATA.btn1[1]
        btn1.setAttribute('onclick', DATA.btn1[3])

        const p = document.createElement('p')
        if (variance > 0) {
            p.innerText = DATA.p0
        } else {
            p.innerText = DATA.p1
        }

        if (niveau < 11) {
            winAlert.appendChild(ans)
            winAlert.appendChild(p)
            winAlert.appendChild(btn0)
            winAlert.appendChild(btn1)    
        } else {
            const h = document.createElement('h1')
            h.id = DATA.congrat[0]
            h.innerText = DATA.congrat[0]
            p.innerText = DATA.congrat[1]

            const btn = document.createElement('input')
            btn.type = 'button'
            btn.id = 'revenir'
            btn.value = 'Revenir au menu principale'
            btn.setAttribute('onclick', 'fonction.final()')
            btn.setAttribute('autofocus', true)

            const finalScore = document.createElement('h2')
            finalScore.innerText = `Votre score final est ${score}`

            winAlert.appendChild(ans)
            winAlert.appendChild(h)
            winAlert.appendChild(p)
            winAlert.appendChild(finalScore)
            winAlert.appendChild(btn)
        }

        div.appendChild(winAlert)
    }
}