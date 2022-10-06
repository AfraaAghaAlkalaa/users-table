import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Role..."
          name="role"
          value={editFormData.role}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">
          <AiFillCheckCircle size={20} style={{ color: "green" }} />
        </button>
        <button type="button" onClick={handleCancelClick}>
          <MdCancel size={20} style={{ color: "red" }} />
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
