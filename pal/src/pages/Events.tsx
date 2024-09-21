import React, { useEffect } from "react";
import { baseUrl } from "../config.js";

function Events() {
  useEffect(() => {
    const loadPosts = async () => {
      let results = await fetch(`${baseUrl}/events/`);
      const response = results.json();
      response.then((data) => {
        console.log(data);
      });
    };

    loadPosts();
  });
  return <></>;
}

export default Events;
