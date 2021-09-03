const { createMultiplyTable } = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors');

/// process.argv
// const [,, arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');

console.clear();
createMultiplyTable(argv.base, argv.l, argv.limit)
    .then( fileName => console.log(`${fileName} was created!!`.trap))
    .catch(err => console.log(err));


