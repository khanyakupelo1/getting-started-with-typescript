///<reference path="src/defining-types.ts"/>
const s = require('./src/defining-types');
import {WindowStates} from './src/composing-types';

console.log(s.getUser())

s.displayUserName(s.getUser())

s.getAge(s.getUser())

const windowState: WindowStates = 'closed'
console.log(windowState)

