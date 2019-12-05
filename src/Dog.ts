export default class Dog {

  constructor(
    private name: string
  ){}

  bark(): void {
    console.log(`${this.name} barked`);
  }
}
