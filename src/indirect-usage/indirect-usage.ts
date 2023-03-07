function sumAndSubtract(a: number, b: number): { x: number; y: number } {
  const x = a - b;
  const y = a + b;
  return { x, y };
}

const { x: q, y: w } = sumAndSubtract(5, 6);

console.log('q : ', q);
console.log('y : ', w);
