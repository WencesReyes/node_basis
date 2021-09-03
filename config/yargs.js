const argv = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base for multiplication table',
})
.option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Flag to show the table when it is done',
})
.option('h', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limit for multiplication table',
})
.check((argv, options) => {
    if(isNaN(argv.b)) throw new Error('Base must be a number');
    if(argv.h > 20 || argv.h < 0) throw new Error('Limit must be greater than or equal to 0 and lower or equal to 20');
    return true;
}).argv;

console.log(argv)

module.exports = argv;