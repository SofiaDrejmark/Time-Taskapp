import React, { useState, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Timelogs() {
  const [timelogs, setTimelogs] = useState([]);

  async function getTimelogs() {
    await axios
      .get(`http://localhost:3000/timelogs`)
      .then((res) => {
        setTimelogs(res.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getTimelogs();
    getTasks();
  }, []);

  const { tasks, getTasks } = useAppContext();
  const id = 1;
  const task = tasks.find((task) => task.id === id);

  {
    return (
      <div className="bodyDiv">
        <div className="topDiv">
          <h2>Timer</h2>
        </div>
        <br />
        <h3>Choose task to start timer</h3>
        <ul className="taskUl">
          {tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.task}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Timelogs;
