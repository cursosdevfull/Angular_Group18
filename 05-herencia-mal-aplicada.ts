class UserInformationPersonal {
  userId: string;
  firstname: string;
  lastname: string;
  age: number;

  constructor(
    userId: string,
    firstname: string,
    lastname: string,
    age: number
  ) {
    this.userId = userId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
}

/*class UserSalary {
    userId: string
    salary: number

    constructor(userId: string, salary: number){
        this.userId = userId
        this.salary = salary
    }
}*/

class UserSalary extends UserInformationPersonal {
  salary: number;

  constructor(
    userId: string,
    firstname: string,
    lastname: string,
    age: number,
    salary: number
  ) {
    super(userId, firstname, lastname, age);
    this.salary = salary;
  }
}

const user = new UserSalary("abc-123", "Carla", "Tamayo", 23, 1000);
console.log(user);
