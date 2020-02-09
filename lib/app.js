// eslint-disable-next-line strict
'use strict';

// to read and write the file by using file system
const fs = require('fs');
const events = require('./events.js');
require('./logger.js');

// fs uses an error first callback on both read and write operations
// It can also act as a promise if you use util.promisify()

const util = require('util');
//------- converts a regular function into an async function /  function that returns a promise--------//
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

// As you read/write files, you can capture any errors that arise
// Rather than simply console.log() to display the error, emit an error event containing the error text
// we need two  function one for Read and one for Write

// ------------------ Read  with promise---------------------//
const readFile = (file) => {
  return read(file)
    .then( myResult => {
      // events.emit('readFile' , (file) => console.log(` Read the ${file}`));
      events.emit('readFile' , 'succesfuly Read The File');
      return myResult.toString().toUpperCase();
    })
    .catch((error) =>{
      events.emit('error' , console.error(error));
    });
};

// If there are no errors, emit a success event with a message
// In a separate module, implement event listeners for both event types
// These listeners should execute the console.log()

//---------------------- write ------------------//

const writeFile = (file , data) =>{ // we have Two Paramerter the file it self and data
  return write(file , data)
    .then( myResult =>{
      events.emit('writeFile' , 'Write File is succesful');
    })
    .catch((error) =>{
      events.emit('error' , console.error(error));
    });
};


module.exports = { readFile , writeFile};


/////-----------------------XXXXXX STARTER CODE XXXXXXXX--------------///
// const alterfile = (file) => {
//   fs.readFile(file , (err , data) =>{
//     if(err)  throw err ;
//     events.emit('read' , (file) => console.log(`${file} is read`));
//     let text = data.toString().toUpperCase();


//     fs.writeFile(file , Buffer.from(text) , (err , data) =>{
//       if(err) throw err ;
//       events.on('write' , () => console.log(`${file} saved`));
//     });
//   });
// };

// let file = process.argv.slice(2).shift();
// alterfile(file);
