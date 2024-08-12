type IEmail = {
  sentMail(email: string, sender: string, subject: string, body: string): void;
};

class GMail implements IEmail {
  sentMail(email: string, sender: string, subject: string, body: string) {
    this.sentEmail(email, sender, subject, body);
  }

  sentEmail(email: string, sender: string, subject: string, body: string) {
    console.log("email send by GMail");
  }
}

class YahooEmail implements IEmail {
  sentMail(email: string, sender: string, subject: string, body: string) {
    this.config(email, sender, subject, body);
    this.sent();
  }

  config(email: string, sender: string, subject: string, body: string) {}

  sent() {
    console.log("email send by YahooEmail");
  }
}

class GodaddyEmail implements IEmail {
  isHTML: boolean = true;

  sentMail(email: string, sender: string, subject: string, body: string) {
    this.isHTML = false;
    this.configuration(email, sender, subject, body);
    this.validateEmail();
    this.sentEmailValidated();
  }

  configuration(email: string, sender: string, subject: string, body: string) {}

  validateEmail() {}

  sentEmailValidated() {
    console.log("email send by GodaddyEmail");
  }
}

class UserRegister {
  provider: IEmail;

  constructor(provider: IEmail) {
    this.provider = provider;
  }

  register(name: string, email: string) {
    this.provider.sentMail(
      email,
      "postmaster@email.com",
      "Welcome",
      "Welcome to our community"
    );
  }
}

const provider = new GodaddyEmail();
const userRegister = new UserRegister(provider);
userRegister.register("Pedro", "pedro@email.com");
