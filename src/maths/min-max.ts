// const timeSlicesIdx = [...Array(100).keys()].map((idx) =>
//   Math.round((idx / 100) * (24 - 1))
// );

//console.log("timeSlicesIdx: ", timeSlicesIdx);

const volumeSize = 5 * 1024;

const iops = Math.min(16000, Math.max(100, 3 * volumeSize));
const provisionedIops = Math.max(0, iops - 3000);
const throughput = Math.min(250, iops / 4);
const provisionedThroughput = Math.max(0, throughput - 125);

console.log('iops: ', iops);
console.log('provisionedIops: ', provisionedIops);
console.log('throughput: ', throughput);
console.log('provisionedThroughput: ', provisionedThroughput);

console.log('min of empty array:', Math.min(...[]));
console.log('max of empty array:', Math.max(...[]));

console.log('min of empty array:', Math.min(...[0]));
console.log('max of empty array:', Math.max(...[0]));
