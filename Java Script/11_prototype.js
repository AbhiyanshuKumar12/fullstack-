let computer={
    cpu:4
}
let lenovo={
    display:"hd",
    __proto__:computer
}
console.log(`computer`,computer.__proto__);
console.log("computer", Object.getPrototypeOf(computer));

