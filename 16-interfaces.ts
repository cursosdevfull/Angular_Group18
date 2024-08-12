interface IUserMethods {
  update(name: string): Date;
  delete(): Date;
  properties(): object;
}

interface IUserId {
  userId: number;
}

interface IAudit {
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

class User implements IUserMethods, IUserId, IAudit {
  readonly userId: number;
  private firstname: string;
  private age: number;
  private email: string;
  readonly createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;

  constructor(firstname: string, age: number, email: string) {
    this.userId = new Date().getTime();
    this.firstname = firstname;
    this.age = age;
    this.email = email;
    this.createdAt = new Date();
  }

  update(name: string): Date {
    throw new Error("Method not implemented.");
  }
  delete(): Date {
    throw new Error("Method not implemented.");
  }
  properties(): object {
    throw new Error("Method not implemented.");
  }
}
