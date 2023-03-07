import { range } from 'lodash';

const period = 600;
const dayGap = (1440 * period) / 86400;
const loops = Math.round(30 / dayGap);
console.log('range', range(loops));
