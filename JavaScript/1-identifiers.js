'use strict';

const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;
const log = console.dir;
let message = 'Begin';

const event = () => {
  message = { counter, date: new Date() };
  if (counter === MAX_VALUE) {
    clearInterval(timer);
    message = 'The end';
  }
  counter++;
  log(message);
};

log(message);
timer = setInterval(event, INTERVAL);