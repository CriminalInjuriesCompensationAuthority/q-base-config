
const path = require('path');

console.log('vvvvvvvvvvvvvvvvvvvvvvv  base config pre vvvvvvvvvvvvvvvvvvvvvvvvvvvv');
console.log({
    'path.resolve(.)': path.resolve('.'),
    __dirname,
    'process.env.INIT_CWD': process.env.INIT_CWD,
    'process.cwd()': process.cwd()
});
console.log('^^^^^^^^^^^^^^^^^^^^^^^  base config pre ^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
