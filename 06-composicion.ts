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

class UserSalary {
  salary: number;
  userInformationPersonal: UserInformationPersonal;

  constructor(
    userId: string,
    firstname: string,
    lastname: string,
    age: number,
    salary: number
  ) {
    this.salary = salary;
    this.userInformationPersonal = new UserInformationPersonal(
      userId,
      firstname,
      lastname,
      age
    );
  }
}

const user = new UserSalary("abc-123", "Juan", "Quispe", 30, 1000);
console.log(user);
