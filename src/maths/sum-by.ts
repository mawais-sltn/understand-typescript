import { sumBy } from 'lodash';

const commitmentUnits = [
  {
    hourlyCommitment: 1.25,
    remainingCommitment: 5.36,
  },
  {
    hourlyCommitment: 4.25,
    remainingCommitment: 6.36,
  },
];

const hourlyCommitment = sumBy(commitmentUnits, (cu) => cu.hourlyCommitment);
console.log(hourlyCommitment);

const commitments = sumBy(commitmentUnits, (cu) => cu.hourlyCommitment + cu.remainingCommitment);
console.log(commitments);
