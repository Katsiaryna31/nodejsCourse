const alphabet = require('./config');
const { program } = require('commander');

program
  .option('-s', '--shift')
  .option('-i', '--input')
  .option('-o', '--output')
  .option('-a', '--action');

program.parse(process.argv);

if (program.action) console.log(alphabet);
