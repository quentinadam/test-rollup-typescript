"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(`${this.name} barked`);
    }
}
exports.default = Dog;
