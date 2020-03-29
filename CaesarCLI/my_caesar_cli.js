const { getCipherOrder, getReadyMessage } = require('./functions');
const { program } = require('commander');

program
  .option('-s, --shift <number>', 'a cipher order')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .option('-a, --action <type>', 'action encode/decode')
  .parse(process.argv);

if (program.shift !== undefined) getCipherOrder(program.shift);
if (program.shift !== Number) Error('You should write number');
if (program.action === 'encode') getReadyMessage('encoding');
if (program.action === 'decode') getReadyMessage('decoding');
