interface IEmail {
  sentMail(email: string, sender: string, subject: string, body: string): void;
}

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
  register(name: string, email: string) {
    //const provider = new GMail()
    //const provider = new YahooEmail()
    const provider = new GMail();
    provider.sentMail(
      email,
      "postmaster@email.com",
      "Welcome",
      "Welcome to our community"
    );

    /*const gmail = new GMail()
        gmail.sentEmail(email, "postmaster@email.com", "Welcome", "Welcome to our community")*/
    /*const yahooEmail = new YahooEmail()
        yahooEmail.config(email, "postmaster@email.com", "Welcome", "Welcome to our community" )
        yahooEmail.sent()*/
    /*const godaddyEmail = new GodaddyEmail()
        godaddyEmail.isHTML = false
        godaddyEmail.configuration(email, "postmaster@email.com", "Welcome", "Welcome to our community" )
        godaddyEmail.validateEmail()
        godaddyEmail.sentEmailValidated()*/
  }
}

const userRegister = new UserRegister();
userRegister.register("Pedro", "pedro@email.com");
