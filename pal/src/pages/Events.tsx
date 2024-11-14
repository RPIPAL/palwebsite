import React, { useEffect, useState } from "react";
import { baseUrl } from "../config.js";
import Navbar from "../components/Navbar.tsx";
import SideNav from "../components/SideNav.tsx";
import Event from "../components/Event.tsx";
import Footer from "../components/Footer.tsx";
import { ring } from "ldrs";

function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([
    { imageURL: "", name: "", date: "", description: "" },
  ]);
  const [pastEvents, setPastEvents] = useState([
    { imageURL: "", name: "", date: "", description: "" },
  ]);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  useEffect(() => {
    ring.register();
    const timeNow = new Date();
    const loadPosts = async () => {
      let results = await fetch(`${baseUrl}/events/`);
      const response = results.json();
      response.then((data) => {
        console.log(data);
        setPastEvents(
          data
            .filter(function (e) {
              const time = new Date(e.date);
              return timeNow > time;
            })
            .sort(function (a, b) {
              const aTime = new Date(a.time);
              const bTime = new Date(b.time);
              if (aTime > bTime) {
                return 1;
              } else {
                return -1;
              }
            })
        );
        setUpcomingEvents(
          data
            .filter(function (e) {
              const time = new Date(e.date);
              return timeNow < time;
            })
            .sort(function (a, b) {
              const aTime = new Date(a.time);
              const bTime = new Date(b.time);
              if (aTime > bTime) {
                return 1;
              } else {
                return -1;
              }
            })
        );
      });
      setIsLoading(false);
    };

    loadPosts();
  }, []);
  return (
    <>
      <SideNav toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`bg-gradient-to-br from-[#FFFF00] from-0% via-[#8B0000] via-30% to-[#00008B] to-100% text-[#FBEBD9] font-raleway overflow-hidden  ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <Navbar
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          absolute={false}
        />
        <div className="min-h-[calc(100vh-14rem)]">
          <h1 className="text-6xl font-bold text-center my-10">
            Upcoming Events
          </h1>
          {isLoading ? (
            <>
              <div className="m-auto flex justify-center items-center">
                <l-ring size="60" color="white"></l-ring>
              </div>
            </>
          ) : (
            <>
              <div
                className={`m-auto flex flex-col justify-center items-center lg:${
                  upcomingEvents.length === 0 ? "" : "grid"
                } lg:grid-cols-3 lg:w-5/6`}
              >
                {upcomingEvents.length === 0 ? (
                  <>
                    <p className="text-3xl font-semibold">
                      There are no upcoming events
                    </p>
                  </>
                ) : (
                  ""
                )}
                {upcomingEvents.map((event, i) => {
                  const delay = i * 0.15 + 0.1;
                  return <Event event={event} delay={delay} />;
                })}
              </div>
              <h1 className="text-6xl font-bold text-center my-10">
                Past Events
              </h1>
              <div className="m-auto flex flex-col mb-4 justify-center items-center lg:grid lg:grid-cols-3 lg:w-5/6">
                {pastEvents.length === 0 ? (
                  <>
                    <p>There are no past events</p>
                  </>
                ) : (
                  ""
                )}
                {pastEvents.map((event, i) => {
                  const delay = i * 0.15 + 0.1;
                  return <Event event={event} delay={delay} />;
                })}
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
