type UserProps = {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  email: string;
};

class User {
  private readonly userId: number;
  private firstname?: string;
  private lastname: string | undefined;
  private age?: number;
  private gender?: string;
  private email?: string;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: Partial<UserProps>) {
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.age = props.age;
    this.gender = props.gender;
    this.email = props.email;

    this.userId = new Date().getTime();
    this.createdAt = new Date();
  }
}

const props: Partial<UserProps> = {
  firstname: "Alfonso",
  email: "alfonso@email.com",
};
const user = new User(props);
console.log(user);
