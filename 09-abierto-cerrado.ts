class Transportation {
  type: string;
  capacity: number;
  engine: string;

  constructor(type: string, capacity: number, engine: string) {
    this.type = type;
    this.capacity = capacity;
    this.engine = engine;
  }

  isSafe(): boolean {
    if (this.capacity > 10 && this.engine === "diesel") return false;
    //if(this.capacity>2) return false
    return true;
  }
}

class Bus extends Transportation {
  isBusSafe() {
    return this.isSafe();
  }
}

class Bike extends Transportation {
  isSafe() {
    if (this.capacity > 2) return false;
    return true;
  }
}

const bus = new Bus("bus", 9, "diesel");
console.log("Is bus safe?", bus.isBusSafe());

const bike = new Bike("bike", 3, "human traction");
console.log("Is bike safe?", bike.isSafe());
