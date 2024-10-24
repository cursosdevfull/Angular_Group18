export class AuthRegister {
  private name: string;
  private lastname: string;
  private email: string;
  private password: string;
  private roleId: string;

  constructor(
    name: string,
    lastname: string,
    email: string,
    password: string,
    roleId: string
  ) {
    if (!name || !lastname || !email || !password || !roleId)
      throw new Error('Invalid parameters');

    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
  }

  get properties() {
    return {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      roleId: this.roleId,
    };
  }
}
