class ConfirmService {
  modal = null;

  init = modal => {
    this.modal = modal;
  };

  show = ({ title, question, action }) => {
    return this.modal.show({ title, question, action });
  };
}

export default new ConfirmService();