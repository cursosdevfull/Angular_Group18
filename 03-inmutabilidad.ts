class User {
  readonly userId: string;
  firstname: string;
  lastname: string;
  private password: string;
  email: string;
  private hobbies: Array<string>;
  private readonly createdAt: Date;

  constructor() {
    this.userId = "abcd";
    this.firstname = "Carlos";
    this.lastname = "Cáceres";
    this.password = "12345";
    this.email = "carlos.caceres@email.com";
    this.hobbies = ["run", "jump", "write"];
    this.createdAt = new Date();
  }

  update() {
    //this.userId = "12345"
  }
}

const user = new User();
user.update();
//user.userId = "efgh"

//console.log(user.createdAt)

console.log(user);
