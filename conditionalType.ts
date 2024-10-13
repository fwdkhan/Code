type TypeOf<T> = T extends number ? "number" :
  T extends string ? "string" :
  T extends boolean ? "boolean" :
  "unknown";

function getType<T>(value: T): TypeOf<T> {
  return typeof value as TypeOf<T>;
}

const numberType = getType(10); // Type: "number"
const stringType = getType("hello"); // Type: "string"
const booleanType = getType(true); // Type: "boolean"
const unknownType = getType({}); // Type: "unknown"

console.log(numberType)
console.log(stringType)
console.log(booleanType)
console.log(unknownType)