interface UserPropsRequired {
  firstname: string;
  lastname: string;
}

interface UserPropsOptionals {
  age: number;
  gender: string;
  email: string;
}

class User {
  private readonly userId: number;
  private firstname: string | undefined;
  private lastname: string | undefined;
  private age: number | undefined;
  private gender: string | undefined;
  private email: string | undefined;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserPropsRequired & Partial<UserPropsOptionals>) {
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.age = props.age;
    this.gender = props.gender;
    this.email = props.email;

    this.userId = new Date().getTime();
    this.createdAt = new Date();
  }
}

const props: UserPropsRequired & Partial<UserPropsOptionals> = {
  firstname: "Alfonso",
  lastname: "Zapata",
  email: "alfonso@email.com",
};
const user = new User(props);
console.log(user);
