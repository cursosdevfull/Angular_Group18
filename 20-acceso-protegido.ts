class User {
  protected readonly userId: number;
  readonly username: string;

  constructor(username: string) {
    this.userId = new Date().getTime();
    this.username = username;
  }
}

class Developer extends User {
  report() {
    console.log(`Report userId: ${this.userId}`);
  }
}

class DeveloperCloud extends Developer {
  commit() {
    console.log(`Commit from userId: ${this.userId}`);
  }
}

const user = new User("juan.rodriguez");
const developer = new Developer("carla.tamayo");
const developerCloud = new DeveloperCloud("josefina.zapata");

//console.log(user.userId)
//console.log(developer.userId)
//console.log(developerCloud.userId)

developer.report();
developerCloud.commit();
