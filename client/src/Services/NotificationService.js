class NotificationService {
  snack = null;

  init = snack => {
    this.snack = snack;
  };

  addMessage = ({ message, type, ...props }) => {
    this.snack &&
    this.snack.showMessage({ message: message.textMessage || message, type, ...props });
  };

  info = ({ message, ...props }) => {
    this.addMessage({ message, type: "info", ...props });
  };

  success = ({ message, ...props }) => {
    this.addMessage({ message, type: "success", ...props });
  };

  error = ({ message, ...props }) => {
    this.addMessage({ message, type: "error", ...props });
  };

  warning = ({ message, ...props }) => {
    this.addMessage({ message, type: "warning", ...props });
  };

  hideMessage = id => {
    this.snack && this.snack.hideMessage(id);
  };

  hideAllMesages = () => {
    this.snack && this.snack.hideAllMesages();
  };
}

export default new NotificationService();
