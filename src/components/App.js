import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let time = new Date().toLocaleString();
    console.log(time);
    setDate(time);
    let tim = setInterval(() => {
      let clock = new Date().toLocaleString();
      setDate(clock);
    }, 1000);

    return () => {
      clearInterval(tim);
    };
  }, []);
  return (
    <div id="main">
      <div className="date-time">{date}</div>
    </div>
  );
};

export default App;
