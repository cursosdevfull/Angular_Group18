class UserSalary {
  private readonly userId: number;
  private _salary: number;

  constructor(userId: number, salary: number) {
    this.userId = userId;
    this._salary = salary;
  }

  get Salary() {
    return this._salary;
  }

  set Salary(value: number) {
    this._salary = value;
  }
}

const userId = new Date().getTime();
const userSalary = new UserSalary(userId, 10000);
console.log(userSalary.Salary);
userSalary.Salary = 20000;
console.log(userSalary.Salary);
