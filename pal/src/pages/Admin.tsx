import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function Admin() {
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [creatingEvent, setCreatingEvent] = useState(false);
  const [filePreview, setFilePreview] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  const [createName, setCreateName] = useState("");
  const [createDescription, setCreateDescription] = useState("");
  const [createDate, setCreateDate] = useState();

  const nameChange = (e) => {
    setCreateName(e.target.value);
  };
  const descriptionChange = (e) => {
    setCreateDescription(e.target.value);
  };
  const dateChange = (e) => {
    setCreateDate(e.target.value);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const postReq = async () => {
    try {
      console.log("HELP");
      const formData = new FormData();
      formData.append("file", fileUpload);
      await fetch(`${baseUrl}/events/upload`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(async (res) => {
        console.log(res);
        //   await fetch(`${baseUrl}/events`, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     name: createName,
        //     description: createDescription,
        //     date: createDate,
        //   }),
        // }).then((resp) => resp.json());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const showPreview = async (e) => {
    setFilePreview(URL.createObjectURL(e.target.files[0]));
    // await convertBase64(e.target.files[0]).then((data) => {
    //   setFileUpload(data);
    // });
    setFileUpload(e.target.files[0]);
  };

  const toggleCreate = () => {
    setCreatingEvent((create) => !create);
    setFileUpload("");
  };

  useEffect(() => {
    const loadEvents = async () => {
      let results = await fetch(`${baseUrl}/events/`);
      const response = await results.json();

      setEvents(response);
      console.log(response);
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
                    {events.map((event) => {
                      return (
                        <>
                          <tr>
                            <td>{event.name}</td>
                            <td className="text-sm">{event.description}</td>
                            <td className="w-1/8">{event.date}</td>
                            <td>Image</td>
                            <td>
                              <button>
                                <FaEdit className="text-3xl" />
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
