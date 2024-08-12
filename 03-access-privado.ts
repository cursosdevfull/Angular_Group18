class User {
  firstname: string;
  lastname: string;
  private password: string;
  email: string;
  private hobbies: Array<string>;

  constructor() {
    this.firstname = "Carlos";
    this.lastname = "Cáceres";
    this.password = "12345";
    this.email = "carlos.caceres@email.com";
    this.hobbies = ["run", "jump", "write"];
  }

  getPassword() {
    return this.password;
  }

  getHobbies() {
    //return Object.assign([],this.hobbies)
    return [...this.hobbies];
  }
}

const user = new User();
//console.log(user.password)
console.log(user.getPassword());

console.log(user);

const hobbies = user.getHobbies();
console.log(hobbies);
hobbies[0] = "read";
console.log(hobbies);
console.log(user);
