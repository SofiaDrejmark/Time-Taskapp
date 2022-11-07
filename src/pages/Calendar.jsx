import React, { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import axios from "axios";
function Calendar() {
  const { timelogs, setTimelogs } = useAppContext();
  const id = 1;
  const timelog = timelogs.find((timelog) => timelog.id === id);
 
  function getTimelogs() {
    axios.get("http://localhost:3000/timelogs").then((response) => {
      setTimelogs(response.data);
    });
  }
  useEffect(() => {
    getTimelogs();
  }, []);

  return (
    <div className="bodyDiv">
      <div className="topDiv">
        <h2>Timelogs</h2>
      </div>
      
      <br />
      <ul className="timelogUl">
        {timelogs.map((timelog) => (
          <li key={timelog.id}>
            <h3>
              Start time:
              <br /> {timelog.start}
            </h3>

            <h3>
              Stop time:
              <br /> {timelog.stop}
            </h3>

            <h3>Time: {timelog.time}</h3>
            <br />
            <h3>Task nr: {timelog.taskId}</h3>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Calendar;
