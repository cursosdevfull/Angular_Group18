interface IComputer {
  processor: string;
  memory: string;
  brand: string;
  getProcess(): string;
  getMemory(): string;
  getBrand(): string;
}

interface IPortable {
  processor: string;
  memory: string;
  brand: string;
  screenSize: string;
  getProcess(): string;
  getMemory(): string;
  getBrand(): string;
  getScreenSize(): string;
}

class Desktop implements IComputer {
  processor: string;
  memory: string;
  brand: string;

  constructor(processor: string, memory: string, brand: string) {
    this.processor = processor;
    this.memory = memory;
    this.brand = brand;
  }

  getProcess(): string {
    return this.processor;
  }
  getMemory(): string {
    return this.memory;
  }
  getBrand(): string {
    return this.brand;
  }
}

const desktop = new Desktop("amd ryzen 9", "64GB", "Lenovo");
console.log(desktop);

class Notebook implements IPortable {
  processor: string;
  memory: string;
  brand: string;
  screenSize: string;

  constructor(
    processor: string,
    memory: string,
    brand: string,
    screenSize: string
  ) {
    this.processor = processor;
    this.memory = memory;
    this.brand = brand;
    this.screenSize = screenSize;
  }

  getProcess(): string {
    return this.processor;
  }
  getMemory(): string {
    return this.memory;
  }
  getBrand(): string {
    return this.brand;
  }

  getScreenSize(): string {
    return this.screenSize;
  }
}

class Laptop implements IPortable {
  processor: string;
  memory: string;
  brand: string;
  screenSize: string;

  constructor(
    processor: string,
    memory: string,
    brand: string,
    screenSize: string
  ) {
    this.processor = processor;
    this.memory = memory;
    this.brand = brand;
    this.screenSize = screenSize;
  }

  getProcess(): string {
    return this.processor;
  }
  getMemory(): string {
    return this.memory;
  }
  getBrand(): string {
    return this.brand;
  }

  getScreenSize(): string {
    return this.screenSize;
  }
}

const notebook = new Notebook("amd ryzen 9", "64GB", "Lenovo", "17in");
console.log(notebook);
