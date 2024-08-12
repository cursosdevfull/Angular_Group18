class NotificationV1 {
  sendEmail(
    name: string,
    email: string,
    subject: string,
    body: string,
    sender: string
  ) {
    return "email send";
  }
}

class NotificationV2 extends NotificationV1 {
  sendSMS(phone: string, message: string) {
    return "sms send";
  }
}

class NotificationV3 extends NotificationV2 {
  sendMessageWhatsapp(phone: string, message: string) {
    return "message send";
  }
}

const notification = new NotificationV3();
console.log(
  notification.sendEmail(
    "Jorge",
    "jorge@email.com",
    "Welcome",
    "Welcome to our community",
    "replay@email.com"
  )
);
