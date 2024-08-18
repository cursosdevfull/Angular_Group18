class Payment {
  static url: string = "https://payment-gateway.com";

  static getUrlPayment() {
    return `${this.url}/v1/payment`;
  }
}

/*const payment = new Payment()
console.log(payment.getUrlPayment())*/

console.log(Payment.getUrlPayment());
