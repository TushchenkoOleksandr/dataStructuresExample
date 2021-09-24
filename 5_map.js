console.log("Map");

let map = new Map();

console.log(map);

map.set("key", "value");
map.set(1, 1);
console.log('add elements',map);
map.delete("key");
console.log('delete elements',map);
map.set(1, 42);
console.log('change elements',map);
console.log('get elements',map.get(1));
