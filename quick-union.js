class QuickUnion {

    constructor(n) {
        this.id = [];
        for (var i = 0; i < n; i++) {
            this.id[i] = i;
        }
    }

    _root(i) {
        while (this.id[i] != i) i = this.id[i];
        return i;
    }

    connected(p, q) {
        return this._root(p) === this._root(q);
    }

    union(p, q) {
        let i = this._root(p);
        let j = this._root(q);

        this.id[i] = j;

    }



}

var union = new QuickUnion(10);
console.log(union.connected(1, 2));
console.log(union.union(1, 2));
console.log(union.connected(1, 2));