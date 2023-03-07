const results = [
  {
    Id: 'm1',
    StatusCode: 'Complete',
    Label: 'CPUUtilization, peak of 31.5 was at 1-22 13:05',
    Timestamps: [1518868032, 1518867732, 1518867432],
    Values: [15000, 14000, 16000],
  },
  {
    Id: 'm2',
    StatusCode: 'Complete',
    Label: 'CPUUtilization, peak of 63.2 was at 1-22 13:20',
    Timestamps: [1518868032, 1518867732, 1518867432],
    Values: [15, 14, 16],
  },
  {
    Id: 'm3',
    StatusCode: 'Complete',
    Label: 'AWS/EC2 HealthyHostCount',
    Timestamps: [1518868032, 1518867732, 1518867432],
    Values: [15, 14, 16],
  },
];

const map = results.map((instance) => [instance.Id, Math.max(...instance.Values)] as [string, number]);

console.log(map);
