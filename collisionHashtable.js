class HashTable {
  constructor() {
    this.size = 100;
    this.table = new Array(this.size);
  }

  getHash(key) {
    let h = 0;
    for (let value of key.toString()) {
      h += value.charCodeAt();
    }

    return h % this.size;
  }

  setItem(key, value) {
    let hash = this.getHash(key);
    let found = false;

    for (let index in this.table[hash]) {
      if (this.table[hash][index][0] == key) {
        this.table[hash][index] = [key, value];
        found = true;
        break;
      }
    }

    if (!found) {
      this.table[hash] = [];
      this.table[hash].push([key, value]);
    }
  }
  deleteItem(key) {
    let hash = this.getHash(key);

    if (this.table[hash]) {
      console.log(this.table[hash]);
      this.table[hash] = this.table[hash].filter((value) => value[0] != key);
    }
  }
}

const hashTable = new HashTable();

hashTable.setItem("item 1", "data");
hashTable.setItem("item 1", "data1");
hashTable.deleteItem("item 1");
hashTable.setItem("item 1", "data1");
console.log(hashTable.table);
