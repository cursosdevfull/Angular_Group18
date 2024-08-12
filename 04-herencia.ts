class RobotCoffee {
  makeAmericanCoffee() {
    return "american coffee";
  }

  getBill() {
    return "bill";
  }
}

class RobotCoffeeNew extends RobotCoffee {
  makeCappuchino() {
    return "cappuchino";
  }
}

const robot1 = new RobotCoffee();
console.log(robot1.makeAmericanCoffee());

const robot2 = new RobotCoffeeNew();
console.log(robot2.makeAmericanCoffee());
console.log(robot2.makeCappuchino());
