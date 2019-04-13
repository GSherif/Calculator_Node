const Operations = require('./Operations/index');
const validate = require('./validator');

const params = process.argv.slice(2);

const currentOperationIndex = params.findIndex(item => item.startsWith('--'));

const currentOperation = params.splice(currentOperationIndex, 1).map(o => o.substring(2))[0];

const numbers = params.map(validate);

let func = Operations[currentOperation];

console.log(func(...numbers));
