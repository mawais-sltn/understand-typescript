import { isEmpty } from 'lodash';

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const emptyArray: never[] = [];
console.log(isEmpty(numArray));
console.log(isEmpty(emptyArray));
