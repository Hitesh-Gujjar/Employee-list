import React, { memo } from "react";

function Popup({ open, setOpen, children }) {
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal bg-white p-4 rounded-lg w-full max-w-md mx-auto">
            <div className="modal-header flex justify-between items-center mb-4">
              <h2 className="text-2xl">
                <div>Hello</div>
              </h2>
              <button className="text-xl" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>This is a responsive modal.</p>
            </div>
            <div className="modal-footer mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Popup);
