export class Auth {
  private email: string;
  private password: string;
  private recaptchaCode: string;

  constructor(email: string, password: string, recaptchaCode: string) {
    if (!email || !password || !recaptchaCode)
      throw new Error('Invalid parameters');
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      throw new Error('Invalid email');

    this.email = email;
    this.password = password;
    this.recaptchaCode = recaptchaCode;
  }

  get properties() {
    return {
      email: this.email,
      password: this.password,
      recaptchaCode: this.recaptchaCode,
    };
  }
}
