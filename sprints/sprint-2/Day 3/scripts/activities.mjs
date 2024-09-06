//////////////////////////////////////////////////
// Imports
import { square } from "./square.mjs";
import message from "./message.mjs";
import { add, subtract, multiply } from "./operations.mjs";
import * as operations from "./operationsAll.mjs";
import {
  add as reExportedAdd,
  subtract as reExportedSubtract,
  multiply as reExportedMultiply,
} from "./reexport.mjs";
//////////////////////////////////////////////////
// Modules
/// Beginner
//// 1. Basic Import/Export

function squareAll(numbers) {
  return numbers.map(square);
}

// console.log(squareAll([1, 2, 3, 4, 5]));

/// 2. Default Exports

// message("¡Hola Mundo!");

/// 3. Named Exports

// console.log(add(1, 2));
// console.log(subtract(3, 2));
// console.log(multiply(2, 3));

/// 4. Import all exports

// console.log(operations.add(1, 2));
// console.log(operations.subtract(3, 2));
// console.log(operations.multiply(2, 3));

/// 5. Re-exporting

// console.log(reExportedAdd(1, 2));
// console.log(reExportedSubtract(3, 2));
// console.log(reExportedMultiply(2, 3));
