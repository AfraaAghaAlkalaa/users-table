import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.role}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <MdEdit size={20}/>
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <RiDeleteBin6Fill size={20}/>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
