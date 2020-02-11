/* eslint-disable no-undefined */
// eslint-disable-next-line strict
'use strict';

const fs = require('fs');
// const events = require('../lib/events.js');
const log = require('../lib/logger.js');


describe(' File system' , () =>{
  it(' Error form bad file', done => {
    fs.readFile('./a/lib/file.js', (err, data) => {
      console.log('----error----' , err);
      expect(err).toBeDefined();
      console.log('----data----' , data);
      expect(data).toBe(undefined);
      done();
    });
  });

  it('Create a log without Payload' , () =>{
    log('saveFile');
    console.log('-----' , log);
    expect(log('saveFile')).toBe(undefined);
  });
});