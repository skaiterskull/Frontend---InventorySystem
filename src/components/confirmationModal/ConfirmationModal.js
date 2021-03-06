import "./confirmationModal.css";

const ConfirmationModal = ({ showModal, hideModal, runFunction, body }) => {
  return (
    <div
      className={
        showModal ? "show-confirmation-modal" : "hide-confirmation-modal"
      }
    >
      <div className="modal-content">
        <p>{body}</p>
        <div className="confirmation-button">
          <span className="tick">
            <i className="fas fa-check" onClick={runFunction}></i>
          </span>
          <span className="close">
            <i className="fas fa-times" onClick={hideModal}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
