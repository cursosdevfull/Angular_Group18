class Upload {
  uploadFile(file: File) {
    this.progress(file);
    //this.sentNotificationOnFinish(file)
    this.sentMessageToSlack();
  }

  progress(file: File) {
    console.log("file is uploding");
  }

  sentMessageToSlack() {
    console.log(`Notification: ${file.name} has uploaded`);
  }

  /*sentNotificationOnFinish(file: File){
        console.log(`Notification: ${file.name} has uploaded`)
    }*/
}

class UploadCustomer extends Upload {
  override sentNotificationOnFinish(file: File) {
    alert(`Notification: ${file.name} has uploaded`);
  }
}

const upload = new UploadCustomer();
const file = new File(["data"], "data.txt", { type: "text/plain" });
upload.uploadFile(file);
