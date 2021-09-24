console.log("hash table");

class HashTable {
  store = new Array();

  hash(key) {
    return key + "1";
  }

  add(key, value) {
    this.store[this.hash(key)] = value;
  }
  get(key) {
    return this.store[this.hash(key)];
  }
}

let hashTable = new HashTable();

hashTable.add("44", "1");
hashTable.add(100, "2");

console.log(hashTable.get(44), "    ", hashTable.get(100));
