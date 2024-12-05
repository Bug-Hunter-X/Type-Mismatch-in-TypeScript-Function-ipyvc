function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    //Handle non-numeric input appropriately, e.g., throw an error or return a default value
    throw new Error('Inputs must be numbers');
  }
}

let result1 = addSafe(1, 2); // Works correctly
let result2 = addSafe(1, "2"); // Throws an error
let result3 = addSafe(1, 2.5); // Works correctly