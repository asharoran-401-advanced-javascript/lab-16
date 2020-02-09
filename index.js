// eslint-disable-next-line strict
'use strict';

const {readFile , writeFile} = require('./lib/app.js');  // require a two function
const event = require('./lib/events.js');
require('./lib/logger.js');

let file = `${__dirname}/lib/logger.js`;

const editFile = () => { // use the Promise here //  I use lab 3 as a refferance
  readFile(file)
    .then(results => {
      console.log('==== my results ====',results);
      writeFile(file, results);
    })
    .catch(error => event.emit('Error', error));
};

editFile();

