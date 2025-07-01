window.addEventListener('DOMContentLoaded', () => {
  generator.addMenu();
});

// Variable contenant le mot precedant pour eviter une repetition de mot
let oldWord = '';

// Tableau contenant les mots
const words = [
  ['bug', 'api', 'dom', 'sdk', 'sql', 'nan', 'css', 'ide', 'git', 'cli'],
  [
    'node',
    'code',
    'java',
    'html',
    'json',
    'hook',
    'http',
    'type',
    'test',
    'bool',
  ],
  [
    'array',
    'linux',
    'merge',
    'token',
    'error',
    'debug',
    'react',
    'props',
    'cloud',
    'async',
  ],
  [
    'commit',
    'gitlab',
    'import',
    'lambda',
    'script',
    'branch',
    'object',
    'syntax',
    'return',
    'system',
  ],
  [
    'backend',
    'control',
    'console',
    'content',
    'comment',
    'default',
    'virtual',
    'request',
    'promise',
    'pointer',
  ],
  [
    'function',
    'frontend',
    'devtools',
    'keyboard',
    'language',
    'keyframe',
    'document',
    'debugger',
    'database',
    'contains',
  ],
  [
    'framework',
    'websocket',
    'lowercase',
    'uppercase',
    'classname',
    'bootstrap',
    'animation',
    'algorithm',
    'exception',
    'singleton',
  ],
  [
    'javascript',
    'middleware',
    'deployment',
    'asyncawait',
    'scrollview',
    'onkeypress',
    'fullscreen',
    'navigation',
    'parsefloat',
    'settimeout',
  ],
  [
    'application',
    'getattribute',
    'setattribute',
    'contenttype',
    'refactoring',
    'removechild',
    'defaultview',
    'environment',
    'onloadstart',
    'onmousedown',
  ],
  [
    'Authentication',
    'Authorization',
    'insertbefore',
    'troubleshoot',
    'onmouseenter',
    'setinterval',
    'syntaxerror',
    'getelementbyid',
    'programming',
    'congratulation',
  ],
];
let WORD = '';

// objet contenant les meilleurs scores
let HIGH = {
  niveau: 0,
  score: 0,
};

// variable utile pour le fonctionnement du jeu
let essaye = 5;
let score = 0;
let niveau = 1;
let variance = 1;
