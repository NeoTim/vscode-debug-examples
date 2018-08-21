const name = 'Json';

// 可以在函数里面断点啊
const sayHello = name => {
  debugger
  console.log(`Hello, ${name}`);
};

sayHello(name);

console.log('end')
