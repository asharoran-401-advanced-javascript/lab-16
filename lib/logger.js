// eslint-disable-next-line strict
'use strict';

const events = require('./events.js');

events.on('readFile' , payload => {
  log('readFile' , payload);
} );

events.on('writeFile' , payload =>{
  log('writeFile' , payload);
});

// events.on('saveFile' ,(file) =>{
//   console.log(` The ${file} is saved `);
// });

function log(eventName , payload) {
  let time = new Date().toDateString();
  console.log(` event ${eventName} , 
  Time : ${time} 
  The Payload : ${payload}`);
}

module.exports = log;
