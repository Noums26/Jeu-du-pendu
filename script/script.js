window.addEventListener("DOMContentLoaded", () => {

    generator.addMenu()
    
})

// Variable contenant le mot precedant pour eviter une repetition de mot
let oldWord = ''

// Tableau contenant les mots
const words = [
    ['bug', 'var', 'let', 'for', 'map', 'set', 'css', 'alt', 'php', 'web'],
    ['html', 'loop', 'show', 'drop', 'hide', 'push', 'date', 'data', 'char', 'java'],
    ['const', 'split', 'error', 'width', 'class', 'click', 'enter', 'event', 'array', 'index'],
    ['height', 'margin', 'python', 'cookie', 'script', 'append', 'object', 'loaded', 'window', 'system'],
    ['listner', 'windows', 'control', 'console', 'content', 'comment', 'default', 'prevent', 'monitor', 'element'],
    ['function', 'dataview', 'computer', 'keyboard', 'language', 'keyframe', 'document', 'external', 'children', 'contains'],
    ['innerhtml', 'innertext', 'lowercase', 'uppercase', 'classname', 'bootstrap', 'animation', 'cryptokey', 'clonenode', 'lastchild'],
    ['javascript', 'closeevent', 'childnodes', 'firstchild', 'ondblclick', 'onkeypress', 'fullscreen', 'parentnode', 'parsefloat', 'settimeout'],
    ['application', 'getattribute', 'setattribute', 'contenttype', 'createrange', 'removechild', 'defaultview', 'getrootnode', 'onloadstart', 'onmousedown'],
    ['contentloaded', 'onloadeddata', 'insertbefore', 'lastmodified', 'onmouseenter', 'setinterval', 'syntaxerror', 'getelementbyid', 'programming', 'congratulation'],
]
let WORD = ''

// objet contenant les meilleurs scores
let HIGH = {
    niveau: 0,
    score: 0,
}

// variable utile pour le fonctionnement du jeu
let essaye = 5
let score = 0
let niveau = 1
let variance = 1