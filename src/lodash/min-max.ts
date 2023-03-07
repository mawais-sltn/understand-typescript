import { max, min } from 'lodash';

const volumeSize = 5 * 1024;

const iops = min([16000, max([100, 3 * volumeSize])]);
// const provisionedIops = max([0, iops! - 3000]);
// const currentThroughput = min([250, (iops! * 1) / 4]);
// const provisionedThroughput = max([0, currentThroughput! - 125]);

console.log('iops: ', iops);
console.log('provisionedIops: ', provisionedIops);
// console.log('currentThroughput: ', currentThroughput);
console.log('provisionedThroughput: ', provisionedThroughput);
