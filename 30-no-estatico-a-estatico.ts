class Payment {
  static url: string = "https://payment-gateway.com";

  getUrlPayment() {
    return `${Payment.url}/v1/payment`;
  }
}

const payment = new Payment();
console.log(payment.getUrlPayment());
