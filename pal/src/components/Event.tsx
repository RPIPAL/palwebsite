import React from "react";
import { motion } from "framer-motion";
function Event(props) {
  if (props.event.name !== "") {
    const date = new Date(props.event.date);
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log(date);
    const formattedTime = formatter.format(date);
    return (
      <>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: props.delay }}
          className="bg-slate-900  w-80 rounded-md shadow-2xl my-4 m-auto lg:w-5/6"
        >
          <img
            className="m-auto pb-2 object-contain rounded-t-md"
            src={props.event.imageURL}
            alt=""
          />
          <div className="h-24 items-center flex justify-center">
            <h2 className="text-center text-4xl font-bold p-2 font-raleway ">
              {props.event.name}
            </h2>
          </div>

          <div className="px-4 pb-2 font-jetbrains">
            <p className="mb-2 min-h-32">{props.event.description}</p>
            <p>&#x1F4CD;{props.event.location}</p>
            <p>&#x231B;{formattedTime}</p>
            <p>&#x1F4C5;{date.toDateString()}</p>
          </div>
        </motion.div>
      </>
    );
  }
}

export default Event;
