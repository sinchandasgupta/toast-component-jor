import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function dismissAll(event) {
      if (event.code === "Escape") {
        callback(event);
      }
    }
    window.addEventListener("keydown", dismissAll);

    return () => {
      window.removeEventListener("keydown", dismissAll);
    };
  }, []);
}
