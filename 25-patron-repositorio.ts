type TOKEN = string;
type ProviderRepository = {
  doTransaction(products: string[], total: number): TOKEN;
};

class Culqi implements ProviderRepository {
  doTransaction(products: string[], total: number): TOKEN {
    return this.generationTransaction();
  }

  generationTransaction() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  }
}

class Niubiz implements ProviderRepository {
  doTransaction(products: string[], total: number): TOKEN {
    if (this.validateTotal(products)) {
      return this.tokenTransaction();
    }

    return "";
  }

  validateTotal(products: string[]) {
    return true;
  }

  tokenTransaction() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  }
}

class PayU implements ProviderRepository {
  doTransaction(products: string[], total: number): TOKEN {
    return this.successOperation();
  }

  successOperation() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  }
}

const paymentGateway: ProviderRepository = new PayU();
//const paymentGateway = new Niubiz()
//const paymentGateway = new PayU()

console.log(paymentGateway.doTransaction(["product01", "product02"], 100));
