class HashTable {
    // [..., ['grapes', 10000], ..., ['apples', 9], ...]

    constructor(size) {
        this.data = new Array(size);
    }

    set(key, value) {
        let hashedKey = this._hash(key);
        if (!this.data[hashedKey])
           this.data[hashedKey] = [];
        this.data[hashedKey].push([key, value]);
    }

    get(key) {
        let hashedKey = this._hash(key);

        const currentBucket = this.data[hashedKey];

        if (!currentBucket)
            return undefined;

        if (currentBucket.length === 1)
            return currentBucket[0][1];

        return this._search(key, currentBucket);
    }

    keys() {
        let keysArray = [];
        let currentBucket;

        for (let i=0; i<this.data.length; i++) {
            currentBucket = this.data[i];
            if (currentBucket) {
                for (let j=0; j<currentBucket.length; j++)
                    keysArray.push(currentBucket[j][0])
            }
        }
        return keysArray;
    }

    _search(key, address) {
        for (let i=0; i<address.length; i++) {
            if (address[i][0] === key)
                return address[i][1];
        }
        return undefined;
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

}

const myHashTable = new HashTable(3);

myHashTable.set('grapes', 10000);
//console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
//console.log(myHashTable.get('apples'));
myHashTable.set('bananas', 5);
myHashTable.set('oranges', 8);

console.log(myHashTable.data)

console.log(myHashTable.keys());