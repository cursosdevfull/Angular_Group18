class Animal {
  public raza: string;
  public color: string;

  constructor() {
    this.raza = "Samoyedo";
    this.color = "Blanco";
  }

  public getDescription() {
    return "Raza: " + this.raza + " Color: " + this.color;
  }
}

const animal = new Animal();
animal.raza = "Gran danés";
animal.color = "Marrón";

console.log("raza", animal.raza);
console.log("color", animal.color);
console.log("description", animal.getDescription());
