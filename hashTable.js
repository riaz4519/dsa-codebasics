class HashTable {
  constructor() {
    this.size = 100;
    this.table = new Array(this.size);
  }

  getHash(key) {
    let h = 0;
    for (const value of key.toString()) {
      h += value.charCodeAt();
    }

    return h % this.size;
  }

  setItem(key, value) {
    let hash = this.getHash(key);
    this.table[hash] = value;
  }

  getItem(key) {
    let hash = this.getHash(key);

    return this.table[hash];
  }

  deleteItem(key) {

    let hash = this.getHash(key);
     this.table[hash = null;
    

  }
}

const hastTable = new HashTable();
console.log(hastTable.table);
hastTable.setItem("grade 9", "250");
console.log(hastTable.getItem("grade 9"));
console.log(hastTable.deleteItem("grade 9"));
console.log(hastTable.table);
