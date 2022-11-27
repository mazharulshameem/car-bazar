import React from "react";

const ConformationModal = ({ closeModal, modalData, successAction }) => {
  return (
    <div>
      <input type="checkbox" id="conformation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> Are You Sure to Delete..?</h3>
          <p className="py-4">This product can't br undone</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="conformation-modal"
              className="btn"
            >
              Comfirm
            </label>
            <label
              onClick={closeModal}
              htmlFor="conformation-modal"
              className="btn"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationModal;
