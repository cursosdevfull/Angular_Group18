class Database {
  getConnectionDatabase(
    host: string,
    port: number,
    username: string,
    password: string,
    schema: string
  ) {
    return {
      create: () => "user created",
      update: () => "user updated",
      delete: () => "user deleted",
    };
  }

  getORM() {
    return this.getConnectionDatabase(
      "localhost",
      3306,
      "user01",
      "pass01",
      ""
    );
  }
}

class ApiService {
  insert(user: User) {}

  update(user: User) {}

  delete(user: User) {}
}

class User {
  userId: number;
  firstname: string;
  lastname: string;
  age: number;
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
  //connection: {create(): string, update(): string, delete(): string}
  apiService: ApiService;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.createdAt = new Date();
    this.userId = new Date().getTime();
    //this.connection = new Database().getORM()
    this.apiService = new ApiService();
  }

  create() {
    //console.log(this.connection.create())
    this.apiService.insert(this);
  }

  updateAge(age: number) {
    this.age = age;
    this.updatedAt = new Date();
    //console.log(this.connection.update())
    this.apiService.update(this);
  }

  delete() {
    this.deletedAt = new Date();
    //console.log(this.connection.delete())
    this.apiService.delete(this);
  }
}

const user = new User("Javier", "Lozada", 30);
user.create();
user.updateAge(40);
user.delete();
