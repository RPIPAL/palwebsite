import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import EditRow from "../components/EditRow.tsx";

function Admin() {
  const [rowEdit, setRowEdit] = useState([]);
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [creatingEvent, setCreatingEvent] = useState(false);
  const [filePreview, setFilePreview] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  const [createName, setCreateName] = useState("");
  const [createDescription, setCreateDescription] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [eventLength, setEventLength] = useState(0);
  const [editId, setEditId] = useState(Number);
  const nameChange = (e) => {
    setCreateName(e.target.value);
  };
  const descriptionChange = (e) => {
    setCreateDescription(e.target.value);
  };
  const dateChange = (e) => {
    setCreateDate(e.target.value);
  };
  const deleteReq = async (e) => {
    try {
      const response = await fetch(
        `${baseUrl}/events/${e.currentTarget.getAttribute("data-id")}`,
        {
          method: "delete",
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const patchReq = async (e) => {
    try {
      if (fileUpload !== "") {
        const imagePromise = await uploadImage();
        const response = await fetch(
          `${baseUrl}/events/edit/${e.currentTarget.getAttribute("data-id")}`,
          {
            method: "patch",
            body: JSON.stringify({
              imageURL: imagePromise.data,
              name: createName,
              description: createDescription,
              date: createDate,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
      } else {
        console.log("Asd");
        const response = await fetch(
          `${baseUrl}/events/edit/${e.currentTarget.getAttribute("data-id")}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              name: createName,
              description: createDescription,
              date: createDate,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const postReq = async () => {
    try {
      const imagePromise = await uploadImage();
      const imgurRes = await uploadImgur(imagePromise);
      console.log(imgurRes);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", fileUpload);
    return axios.post(`${baseUrl}/upload`, formData);
  };
  const uploadImgur = async (path) => {
    console.log(path);
    const response = await fetch(`${baseUrl}/events/upload`, {
      method: "POST",
      body: JSON.stringify({
        path: path.data,
        name: createName,
        description: createDescription,
        date: createDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const showPreview = async (e) => {
    setFilePreview(URL.createObjectURL(e.target.files[0]));
    setFileUpload(e.target.files[0]);
  };

  const toggleCreate = () => {
    setCreatingEvent((create) => !create);
    setFileUpload("");
    setCreateName("");
    setCreateDate("");
    setCreateDescription("");
    setFilePreview("");
    setFileUpload("");
    setRowEdit(new Array(eventLength).fill(false));
  };

  const toggleEdit = (e) => {
    const event = JSON.parse(e.currentTarget.getAttribute("data-event"));
    setFilePreview(event.imageURL);
    setCreateName(event.name);
    setCreateDate(event.date);
    setCreateDescription(event.description);

    const id = parseInt(e.currentTarget.getAttribute("data-id"));
    setEditId(event._id);
    setRowEdit(new Array(eventLength).fill(false));
    setRowEdit((arr) => {
      const updatedArr = [...arr]; // Create a copy of the array
      updatedArr[id] = !updatedArr[id]; // Update the specific index
      return updatedArr; // Return the new array
    });

    console.log(rowEdit);
  };

  const cancelEdit = () => {
    setRowEdit(new Array(eventLength).fill(false));
  };

  useEffect(() => {
    const loadEvents = async () => {
      let results = await fetch(`${baseUrl}/events/`);
      const response = await results.json();

      setEvents(response);
      console.log(response);
      setEventLength(response.length);
      setRowEdit(new Array(response.length).fill(false));
      setIsLoading(false);
    };
    loadEvents();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-[#9b870c] via-[#C41E3A] via-25% to-[#0032A0] to-100% text-[#FBEBD9] min-h-screen font-poppins ">
        <Link to="/" className="flex items-center text-2xl p-4">
          <IoIosArrowBack className="text-3xl" />
          Return to Home
        </Link>
        <div className="container p-4">
          <div className="">
            {creatingEvent ? (
              <>
                <button
                  onClick={toggleCreate}
                  className="flex items-center bg-red-700 px-4 py-2 rounded-md ml-auto m-4"
                >
                  Cancel
                  <MdCancel className="m-2" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleCreate}
                  className="flex items-center bg-blue-700 px-4 py-2 rounded-md ml-auto m-4"
                >
                  Create new Event
                  <FaPlus className="m-2" />
                </button>
              </>
            )}
          </div>
          <div>
            {isLoading ? (
              ""
            ) : (
              <>
                <table className="w-full *:*:*:border-4 *:*:*:p-4">
                  <thead className="text-3xl">
                    <tr>
                      <th className="w-1/8">Name</th>
                      <th className="w-1/2">Description</th>
                      <th className="w-1/8">Date</th>
                      <th>Image</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {creatingEvent ? (
                      <>
                        <tr className="text-black">
                          <td>
                            <input
                              type="text"
                              className="p-2 border-2 border-black rounded-md"
                              value={createName}
                              onChange={nameChange}
                              autoFocus
                              required
                            />
                          </td>
                          <td>
                            <textarea
                              value={createDescription}
                              className="p-2 border-2 border-black rounded-md w-full"
                              onChange={descriptionChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="datetime-local"
                              value={createDate}
                              onChange={dateChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              className="bg-slate-300 p-2 py-10 rounded-md border-dotted border-blue-700 border-2"
                              type="file"
                              accept="image/*"
                              onChange={showPreview}
                              required
                            />
                            <img
                              src={filePreview}
                              alt="file upload preview"
                              className={`h-52 m-auto mt-2 ${
                                fileUpload === "" ? `hidden` : ``
                              }`}
                            />
                          </td>
                          <td>
                            <button
                              type="submit"
                              className="bg-blue-700 text-white p-3 rounded-sm text-2xl"
                              onClick={postReq}
                            >
                              <MdDone />
                            </button>
                          </td>
                        </tr>
                      </>
                    ) : (
                      ""
                    )}
                    {events.map((event, i) => {
                      return rowEdit[i] ? (
                        <EditRow
                          createName={createName}
                          nameChange={nameChange}
                          createDescription={createDescription}
                          descriptionChange={descriptionChange}
                          createDate={createDate}
                          dateChange={dateChange}
                          showPreview={showPreview}
                          filePreview={filePreview}
                          deleteReq={deleteReq}
                          patchReq={patchReq}
                          toggleEdit={toggleEdit}
                          id={editId}
                          cancelEdit={cancelEdit}
                        />
                      ) : (
                        <>
                          <tr id={event._id}>
                            <td>{event.name}</td>
                            <td className="text-sm">{event.description}</td>
                            <td className="w-1/8">{event.date}</td>
                            <td>
                              <img
                                className="h-52 m-auto mt-2"
                                src={event.imageURL}
                                alt=""
                              />
                            </td>
                            <td>
                              <button>
                                <FaEdit
                                  className="text-3xl"
                                  onClick={toggleEdit}
                                  data-event={JSON.stringify(event)}
                                  data-id={i}
                                />
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
