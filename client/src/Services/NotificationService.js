class NotifyService {
  snack = null;

  init = snack => {
    this.snack = snack;
  };

  addMessage = message => {
    this.snack.showMessage(message);
  };
}

export default new NotifyService();
