const period = 600;
const day_gap = (1440 * period) / 86400;
console.log(day_gap);
const loops = Math.round(30 / day_gap);
console.log(loops);
