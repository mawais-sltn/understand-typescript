import { loadModule, Model, Variable } from 'glpk-ts';

const coeffs: [Variable, number][] = [];
const priceList = [1, 3, 1, 3, 0, 7, 6];

async function main() {
  for (const priceItem of priceList) {
    await loadModule();
    const mipModel = new Model({
      sense: 'max',
      name: 'expansion-mip-target',
    });

    const [xVar] = mipModel.addVars(1, { lb: 0, type: 'i', obj: priceItem });
    coeffs.push([xVar, priceItem]);

    mipModel.addConstr({ lb: 0, ub: -1, coeffs });

    const intopt = mipModel.intopt({
      msgLevel: 'off',
      presolve: true,
    });

    if (intopt !== 'ok') {
      console.log('Trying price list ', priceItem);
      throw new Error(`maximizeValue failed with code ${intopt}`);
    }
  }
}

main().catch((x) => console.log(x));
