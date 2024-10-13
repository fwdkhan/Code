function f(C) {
  console.log('apply decorator')
  return C
}

@f
class MyClass {
  myMethod(message: string) {
    return `Hello, ${message}!`;
  }
}

const instance = new MyClass();
const result = instance.myMethod("world");
console.log(result);