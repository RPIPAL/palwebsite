import React, { useEffect } from "react";
import { baseUrl } from "../config.js";

function Events() {
  useEffect(() => {
    const loadPosts = async () => {
      let results = await fetch(`${baseUrl}/posts/`).then((resp) =>
        resp.json()
      );
      console.log(results);
    };

    loadPosts();
  });
  return <></>;
}

export default Events;
