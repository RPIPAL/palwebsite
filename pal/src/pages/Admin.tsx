import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import AdminEvent from "../components/AdminEvent.tsx";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
function Admin() {
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [creatingEvent, setCreatingEvent] = useState(false);
  const toggleCreate = () => {
    setCreatingEvent((create) => !create);
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
        <div className="container">
          <div>
            <button
              onClick={toggleCreate}
              className="flex items-center bg-blue-700 px-4 py-2 rounded-md ml-auto m-4"
            >
              Create new Event
              <FaPlus className="m-2" />
            </button>
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
                              autoFocus
                            />
                          </td>
                          <td>
                            <textarea className="p-2 border-2 border-black rounded-md w-full" />
                          </td>
                          <td>
                            <input type="datetime-local" />
                          </td>
                          <td>
                            <input type="file" />
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
                              <FaEdit className="text-3xl" />
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
