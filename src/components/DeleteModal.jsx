import React from "react";

export default function DeleteModal({ handelNotesDelete }) {
  return (
    <>
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Notes</h4>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                  value="Cancel"
                />
                <input
                  type="button"
                  className="btn btn-danger"
                  value="Delete"
                  data-bs-dismiss="modal"
                  onClick={handelNotesDelete}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
