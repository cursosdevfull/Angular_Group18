class User {
  userId: number;
  firstname: string;
  lastname: string;
  age: number;
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
  connection: { create(): string; update(): string; delete(): string };

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.createdAt = new Date();
    this.userId = new Date().getTime();
    this.connection = this.getConnectionDatabase(
      "localhost",
      1421,
      "user01",
      "pass01",
      "xhis"
    );
  }

  create() {
    console.log(this.connection.create());
  }

  updateAge(age: number) {
    this.age = age;
    this.updatedAt = new Date();
    console.log(this.connection.update());
  }

  delete() {
    this.deletedAt = new Date();
    console.log(this.connection.delete());
  }

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
}

const user = new User("Javier", "Lozada", 30);
user.create();
user.updateAge(40);
user.delete();
