import Calendar from "./pages/Calendar";
import Overwiew from "./pages/Overwiew";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Timelogs from "./pages/Timelogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import SingleTask from "./pages/SingleTask";
import Home from "./pages/Home";
import { AppProvider } from "./contexts/AppContext";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Root />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/overwiew" element={<Overwiew />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/timelogs" element={<Timelogs />} />
            <Route path="/tasks/:taskId" element={<SingleTask />} />
            <Route path="/projects/:projectId" element={<SingleProject />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
