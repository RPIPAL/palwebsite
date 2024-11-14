import React from "react";
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function EditRow(props) {
  return (
    <>
      <tr className="text-black">
        <td>
          <input
            type="text"
            className="p-2 border-2 border-black rounded-md w-full"
            value={props.createName}
            onChange={props.nameChange}
            autoFocus
            required
          />
        </td>
        <td>
          <textarea
            value={props.createDescription}
            className="p-1 border-2 border-black h-32 rounded-md text-xs"
            onChange={props.descriptionChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            className="p-2 border-2 border-black rounded-md w-full"
            value={props.createLocation}
            onChange={props.locationChange}
            autoFocus
            required
          />
        </td>
        <td>
          <input
            type="datetime-local"
            className="w-1/2"
            value={props.createDate}
            onChange={props.dateChange}
            required
          />
        </td>
        <td>
          <input
            className="bg-slate-300 p-2 py-10 rounded-md border-dotted border-blue-700 border-2 w-full"
            type="file"
            accept="image/*"
            onChange={props.showPreview}
            required
          />
          <img
            src={props.filePreview}
            alt="file upload preview"
            className={`h-52 m-auto mt-2 ${
              props.fileUpload === "" ? `hidden` : ``
            }`}
          />
        </td>
        <td className="*:my-4 *:flex *:items-center *:rounded-sm">
          <button
            className="bg-red-700 text-white p-2 rounded-sm text-xl"
            onClick={props.deleteReq}
            data-id={props.id}
          >
            Delete <MdDelete />
          </button>
          <button
            type="submit"
            className="bg-blue-700 text-white p-2 rounded-sm text-xl"
            onClick={props.patchReq}
            data-id={props.id}
          >
            Done <MdDone />
          </button>
          <button
            className="bg-red-700 text-white p-2 rounded-sm text-xl"
            onClick={props.cancelEdit}
          >
            Cancel <MdCancel className="" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default EditRow;
